const fs = require('fs');
const vm = require('vm');
const path = require('path');

function makeElement(id = '') {
    const el = {
        id,
        style: {},
        textContent: '',
        _innerHTML: '',
        children: [],
        classList: { add() {}, remove() {}, contains() { return true; } },
        appendChild(child) { this.children.push(child); if (child.id) documentStub.elements[child.id] = child; return child; },
        addEventListener() {},
        querySelector() { return null; },
        querySelectorAll() { return []; }
    };
    Object.defineProperty(el, 'innerHTML', {
        get() { return this._innerHTML; },
        set(value) {
            this._innerHTML = String(value);
            this.textContent = String(value).replace(/<[^>]*>/g, ' ');
            if (this.id === 'liveMatchContent') {
                for (const id of ['liveCanvasClock', 'liveEngineProgress', 'liveCanvasStatus', 'liveCanvasPossession', 'liveHudScore']) {
                    documentStub.elements[id] = makeElement(id);
                }
                documentStub.elements.liveMatchCanvas = makeCanvas('liveMatchCanvas');
            }
        }
    });
    return el;
}

function makeCanvas(id) {
    const el = makeElement(id);
    el.clientWidth = 960;
    el.clientHeight = 540;
    el.getBoundingClientRect = () => ({ width: 960, height: 540 });
    const gradient = { addColorStop() {} };
    el.getContext = () => new Proxy({ createLinearGradient: () => gradient }, {
        get(target, prop) {
            if (!(prop in target)) target[prop] = () => {};
            return target[prop];
        },
        set(target, prop, value) {
            target[prop] = value;
            return true;
        }
    });
    return el;
}

const documentStub = {
    elements: {},
    body: null,
    createElement(tag) { return tag === 'canvas' ? makeCanvas('') : makeElement(''); },
    getElementById(id) { return this.elements[id] || null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    addEventListener() {}
};
documentStub.body = makeElement('body');
['liveMatchModal', 'liveMatchContent'].forEach(id => documentStub.elements[id] = makeElement(id));

let frameId = 0;
const frames = new Map();
const context = {
    console,
    document: documentStub,
    window: { devicePixelRatio: 1, addEventListener() {}, document: documentStub },
    localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
    setInterval,
    clearInterval,
    setTimeout,
    clearTimeout,
    requestAnimationFrame(callback) {
        const id = ++frameId;
        const timer = setTimeout(() => callback(Date.now()), 16);
        frames.set(id, timer);
        return id;
    },
    cancelAnimationFrame(id) {
        const timer = frames.get(id);
        if (timer) clearTimeout(timer);
        frames.delete(id);
    },
    Date,
    Math,
    Number,
    String,
    Array,
    Object,
    Map,
    Set,
    JSON,
    Intl
};
context.window.window = context.window;
vm.createContext(context);
for (const file of ['league.js', 'teams.js', 'cup.js', 'calender.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), context, { filename: file });
}

async function run() {
    return vm.runInContext(`(async () => {
        function player(id, position, rating) {
            return { id, name: position + ' Player ' + id, position, rating, role: 'starter', energy: 100, value: rating * 100000, age: 25 };
        }
        function team(id, name, base) {
            const positions = ['GK','DEF','DEF','DEF','DEF','MID','MID','MID','ATT','ATT','ATT','GK','DEF','MID','ATT'];
            return { id, name, teamRating: base + 3, players: positions.map((pos, idx) => player(id + '-' + idx, pos, base + (idx % 6))) };
        }
        simulateGoals = (attack, defence, homeBoost) => homeBoost > 0 ? 2 : 1;
        const home = team('home', 'Home FC', 72);
        const away = team('away', 'Away United', 70);
        const fixture = { id: 1, homeTeamId: 'home', awayTeamId: 'away', homeTeamName: home.name, awayTeamName: away.name, played: false };
        appState.myTeam = home;
        appState.leagues = [{ key: 'test', name: 'Test League', teams: [home, away], fixtures: [fixture], standings: [] }];
        appState.cups = {};
        prepareMatchOutcome(fixture, home, away, false, true);
        appState.liveMatch = { fixtureId: 1 };
        renderLiveMatch();

        const goals = fixture.liveData.events.filter(event => event.type === 'goal');
        const first = goals[0];
        const last = goals[goals.length - 1];
        fixture.liveData.currentMinute = first.minute;
        fixture.liveData.currentSecond = first.second;
        const scoreAfterFirst = getLiveScoreAtCurrentEvent(fixture);
        fixture.liveData.currentMinute = last.minute;
        fixture.liveData.currentSecond = last.second;
        const scoreAfterLast = getLiveScoreAtCurrentEvent(fixture);
        startLiveMatchClock(1);
        await new Promise(resolve => setTimeout(resolve, 1900));
        return {
            homeScore: fixture.homeScore,
            awayScore: fixture.awayScore,
            goalCount: goals.length,
            goalTimes: goals.map(event => [event.minute, event.second]),
            scriptedEnd: fixture.liveData.scriptedEnd,
            scoreAfterFirst,
            scoreAfterLast,
            played: fixture.played,
            completed: fixture.liveData.completed,
            finalClock: fixture.liveData.currentMinute
        };
    })()`, context, { timeout: 10000 });
}

run().then(result => {
    console.log(JSON.stringify(result, null, 2));
    const ok = result.homeScore === 2
        && result.awayScore === 1
        && result.goalCount === 3
        && result.goalTimes.every(([minute, second]) => minute === 0 && second > 0 && second < 60)
        && result.scoreAfterFirst.home + result.scoreAfterFirst.away === 1
        && result.scoreAfterLast.home + result.scoreAfterLast.away === 3
        && result.scriptedEnd.minute === 1
        && result.played
        && result.completed
        && result.finalClock === 90;
    process.exit(ok ? 0 : 1);
}).catch(error => {
    console.error(error);
    process.exit(1);
});
