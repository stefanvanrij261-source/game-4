// English league setup with 4 divisions.
// This file is intentionally framework-agnostic and can run in browser or Node.

const ENGLISH_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'championship', name: 'Championship', level: 2, teams: 20 },
    { key: 'league-one', name: 'League One', level: 3, teams: 20 },
    { key: 'league-two', name: 'League Two', level: 4, teams: 20 }
];

const FRENCH_DIVISIONS = [
    { key: 'ligue-1', name: 'Ligue 1', level: 1, teams: 20 },
    { key: 'ligue-2', name: 'Ligue 2', level: 2, teams: 20 },
    { key: 'championnat-national', name: 'Championnat National', level: 3, teams: 20 },
    { key: 'national-2', name: 'National 2', level: 4, teams: 20 }
];

const GERMAN_DIVISIONS = [
    { key: 'bundesliga', name: 'Bundesliga', level: 1, teams: 20 },
    { key: '2-bundesliga', name: '2. Bundesliga', level: 2, teams: 20 },
    { key: '3-liga', name: '3. Liga', level: 3, teams: 20 },
    { key: 'regionalliga', name: 'Regionalliga', level: 4, teams: 20 }
];

const SPANISH_DIVISIONS = [
    { key: 'la-liga', name: 'La Liga', level: 1, teams: 20 },
    { key: 'la-liga-2', name: 'La Liga 2', level: 2, teams: 20 },
    { key: 'primera-rfef', name: 'Primera RFEF', level: 3, teams: 20 },
    { key: 'segunda-rfef', name: 'Segunda RFEF', level: 4, teams: 20 }
];

const ITALIAN_DIVISIONS = [
    { key: 'serie-a', name: 'Serie A', level: 1, teams: 20 },
    { key: 'serie-b', name: 'Serie B', level: 2, teams: 20 },
    { key: 'serie-c', name: 'Serie C', level: 3, teams: 20 },
    { key: 'serie-d', name: 'Serie D', level: 4, teams: 20 }
];

// European Countries Divisions
const ALBANIA_DIVISIONS = [
    { key: 'super-league', name: 'Kategoria Superiore', level: 1, teams: 20 },
    { key: 'first-division', name: 'Kategoria e Parë', level: 2, teams: 20 },
    { key: 'second-division', name: 'Kategoria e Dytë', level: 3, teams: 20 },
    { key: 'third-division', name: 'Kategoria e Tretë', level: 4, teams: 20 }
];

const ANDORRA_DIVISIONS = [
    { key: 'primera-division', name: 'Primera Divisió', level: 1, teams: 20 },
    { key: 'segunda-division', name: 'Segona Divisió', level: 2, teams: 20 },
    { key: 'tercera-division', name: 'Tercera Divisió', level: 3, teams: 20 },
    { key: 'cuarta-division', name: 'Quarta Divisió', level: 4, teams: 20 }
];

const ARMENIA_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const AUSTRIA_DIVISIONS = [
    { key: 'bundesliga', name: 'Österreichische Fußball-Bundesliga', level: 1, teams: 20 },
    { key: '2-bundesliga', name: '2. Bundesliga', level: 2, teams: 20 },
    { key: 'regional-league', name: 'Regional League', level: 3, teams: 20 },
    { key: 'landesliga', name: 'Landesliga', level: 4, teams: 20 }
];

const AZERBAIJAN_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const BELARUS_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const BELGIUM_DIVISIONS = [
    { key: 'pro-league', name: 'Pro League', level: 1, teams: 20 },
    { key: 'first-b', name: 'First B', level: 2, teams: 20 },
    { key: 'second-division', name: 'Second Division', level: 3, teams: 20 },
    { key: 'third-division', name: 'Third Division', level: 4, teams: 20 }
];

const BOSNIA_HERZEGOVINA_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const BULGARIA_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const CROATIA_DIVISIONS = [
    { key: 'primeira-liga', name: 'Prva HNL', level: 1, teams: 20 },
    { key: 'druga-liga', name: 'Druga HNL', level: 2, teams: 20 },
    { key: 'terca-liga', name: 'Treća HNL', level: 3, teams: 20 },
    { key: 'cetvrta-liga', name: 'Četvrta HNL', level: 4, teams: 20 }
];

const CYPRUS_DIVISIONS = [
    { key: 'super-league', name: 'Super League', level: 1, teams: 20 },
    { key: 'first-division', name: 'First Division', level: 2, teams: 20 },
    { key: 'second-division', name: 'Second Division', level: 3, teams: 20 },
    { key: 'third-division', name: 'Third Division', level: 4, teams: 20 }
];

const CZECH_DIVISIONS = [
    { key: 'first-league', name: 'Czech First League', level: 1, teams: 20 },
    { key: 'second-league', name: 'Czech Second League', level: 2, teams: 20 },
    { key: 'third-league', name: 'Czech Third League', level: 3, teams: 20 },
    { key: 'fourth-league', name: 'Czech Fourth League', level: 4, teams: 20 }
];

const DENMARK_DIVISIONS = [
    { key: 'super-league', name: 'Danish Superliga', level: 1, teams: 20 },
    { key: 'first-division', name: 'Danish First Division', level: 2, teams: 20 },
    { key: 'second-division', name: 'Danish Second Division', level: 3, teams: 20 },
    { key: 'third-division', name: 'Danish Third Division', level: 4, teams: 20 }
];

const ESTONIA_DIVISIONS = [
    { key: 'premier-league', name: 'Esiliiga', level: 1, teams: 20 },
    { key: 'first-league', name: 'Esiliiga A', level: 2, teams: 20 },
    { key: 'second-league', name: 'Esiliiga B', level: 3, teams: 20 },
    { key: 'third-league', name: 'Regional League', level: 4, teams: 20 }
];

const FINLAND_DIVISIONS = [
    { key: 'veikkausliiga', name: 'Veikkausliiga', level: 1, teams: 20 },
    { key: 'kakkonen', name: 'Kakkonen', level: 2, teams: 20 },
    { key: 'kolmonen', name: 'Kolmonen', level: 3, teams: 20 },
    { key: 'nelonen', name: 'Nelonen', level: 4, teams: 20 }
];

const GEORGIA_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const GREECE_DIVISIONS = [
    { key: 'super-league', name: 'Super League Greece', level: 1, teams: 20 },
    { key: 'football-league', name: 'Football League', level: 2, teams: 20 },
    { key: 'gamma-ethniki', name: 'Gamma Ethniki', level: 3, teams: 20 },
    { key: 'delta-ethniki', name: 'Delta Ethniki', level: 4, teams: 20 }
];

const HUNGARY_DIVISIONS = [
    { key: 'nb-i', name: 'NB I', level: 1, teams: 20 },
    { key: 'nb-ii', name: 'NB II', level: 2, teams: 20 },
    { key: 'nb-iii', name: 'NB III', level: 3, teams: 20 },
    { key: 'nb-iv', name: 'NB IV', level: 4, teams: 20 }
];

const ICELAND_DIVISIONS = [
    { key: 'premiere-division', name: 'Úrvalsdeild', level: 1, teams: 20 },
    { key: 'first-division', name: '1. Deild', level: 2, teams: 20 },
    { key: 'second-division', name: '2. Deild', level: 3, teams: 20 },
    { key: 'third-division', name: '3. Deild', level: 4, teams: 20 }
];

const IRELAND_DIVISIONS = [
    { key: 'premier-division', name: 'Premier Division', level: 1, teams: 20 },
    { key: 'first-division', name: 'First Division', level: 2, teams: 20 },
    { key: 'second-division', name: 'Second Division', level: 3, teams: 20 },
    { key: 'third-division', name: 'Third Division', level: 4, teams: 20 }
];

const KAZAKHSTAN_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const KOSOVO_DIVISIONS = [
    { key: 'super-league', name: 'Superliga', level: 1, teams: 20 },
    { key: 'first-division', name: 'First Division', level: 2, teams: 20 },
    { key: 'second-division', name: 'Second Division', level: 3, teams: 20 },
    { key: 'third-division', name: 'Third Division', level: 4, teams: 20 }
];

const LATVIA_DIVISIONS = [
    { key: 'virsliga', name: 'Virsliga', level: 1, teams: 20 },
    { key: 'first-league', name: '1. Liga', level: 2, teams: 20 },
    { key: 'second-league', name: '2. Liga', level: 3, teams: 20 },
    { key: 'third-league', name: '3. Liga', level: 4, teams: 20 }
];

const LIECHTENSTEIN_DIVISIONS = [
    { key: 'premier-league', name: 'Swiss Football League (FL)', level: 1, teams: 20 },
    { key: 'first-league', name: 'Challenge League (FL)', level: 2, teams: 20 },
    { key: 'second-league', name: 'Promotion League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Classic League', level: 4, teams: 20 }
];

const LITHUANIA_DIVISIONS = [
    { key: 'a-league', name: 'A Lyga', level: 1, teams: 20 },
    { key: 'first-league', name: '1. Lyga', level: 2, teams: 20 },
    { key: 'second-league', name: '2. Lyga', level: 3, teams: 20 },
    { key: 'third-league', name: '3. Lyga', level: 4, teams: 20 }
];

const LUXEMBOURG_DIVISIONS = [
    { key: 'premier-league', name: 'Ligue Nationale', level: 1, teams: 20 },
    { key: 'first-division', name: 'Division d\'Honneur', level: 2, teams: 20 },
    { key: 'second-division', name: 'Division 2', level: 3, teams: 20 },
    { key: 'third-division', name: 'Division 3', level: 4, teams: 20 }
];

const MALTA_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'first-division', name: 'First Division', level: 2, teams: 20 },
    { key: 'second-division', name: 'Second Division', level: 3, teams: 20 },
    { key: 'third-division', name: 'Third Division', level: 4, teams: 20 }
];

const MOLDOVA_DIVISIONS = [
    { key: 'super-league', name: 'Super League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const MONACO_DIVISIONS = [
    { key: 'ligue-1', name: 'Ligue 1', level: 1, teams: 20 },
    { key: 'ligue-2', name: 'Ligue 2', level: 2, teams: 20 },
    { key: 'ligue-3', name: 'Ligue 3', level: 3, teams: 20 },
    { key: 'ligue-4', name: 'Ligue 4', level: 4, teams: 20 }
];

const MONTENEGRO_DIVISIONS = [
    { key: 'primera-liga', name: 'Prva Crnogorska Liga', level: 1, teams: 20 },
    { key: 'druga-liga', name: 'Druga Crnogorska Liga', level: 2, teams: 20 },
    { key: 'terca-liga', name: 'Treća Crnogorska Liga', level: 3, teams: 20 },
    { key: 'cetvrta-liga', name: 'Četvrta Crnogorska Liga', level: 4, teams: 20 }
];

const NETHERLANDS_DIVISIONS = [
    { key: 'eredivisie', name: 'Eredivisie', level: 1, teams: 20 },
    { key: 'eerste-divisie', name: 'Eerste Divisie', level: 2, teams: 20 },
    { key: 'tweede-divisie', name: 'Tweede Divisie', level: 3, teams: 20 },
    { key: 'derde-divisie', name: 'Derde Divisie', level: 4, teams: 20 }
];

const NORTH_MACEDONIA_DIVISIONS = [
    { key: 'super-league', name: 'Macedonian Super League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const NORWAY_DIVISIONS = [
    { key: 'eliteserien', name: 'Eliteserien', level: 1, teams: 20 },
    { key: 'first-division', name: 'OBOS-ligaen', level: 2, teams: 20 },
    { key: 'second-division', name: 'NM Serie 2', level: 3, teams: 20 },
    { key: 'third-division', name: 'NM Serie 3', level: 4, teams: 20 }
];

const POLAND_DIVISIONS = [
    { key: 'ekstraklasa', name: 'Ekstraklasa', level: 1, teams: 20 },
    { key: 'i-liga', name: 'I Liga', level: 2, teams: 20 },
    { key: 'ii-liga', name: 'II Liga', level: 3, teams: 20 },
    { key: 'iii-liga', name: 'III Liga', level: 4, teams: 20 }
];

const PORTUGAL_DIVISIONS = [
    { key: 'primeira-liga', name: 'Primeira Liga', level: 1, teams: 20 },
    { key: 'segunda-liga', name: 'Segunda Liga', level: 2, teams: 20 },
    { key: 'terceira-liga', name: 'Terceira Liga', level: 3, teams: 20 },
    { key: 'quarta-liga', name: 'Quarta Liga', level: 4, teams: 20 }
];

const ROMANIA_DIVISIONS = [
    { key: 'liga-i', name: 'Liga I', level: 1, teams: 20 },
    { key: 'liga-ii', name: 'Liga II', level: 2, teams: 20 },
    { key: 'liga-iii', name: 'Liga III', level: 3, teams: 20 },
    { key: 'liga-iv', name: 'Liga IV', level: 4, teams: 20 }
];

const RUSSIA_DIVISIONS = [
    { key: 'premiere-league', name: 'Russian Premier League', level: 1, teams: 20 },
    { key: 'first-division', name: 'First Division', level: 2, teams: 20 },
    { key: 'second-division', name: 'Second Division', level: 3, teams: 20 },
    { key: 'third-division', name: 'Third Division', level: 4, teams: 20 }
];

const SAN_MARINO_DIVISIONS = [
    { key: 'super-league', name: 'Campionato Sammarinese', level: 1, teams: 20 },
    { key: 'first-division', name: 'Prima Divisione', level: 2, teams: 20 },
    { key: 'second-division', name: 'Seconda Divisione', level: 3, teams: 20 },
    { key: 'third-division', name: 'Terza Divisione', level: 4, teams: 20 }
];

const SERBIA_DIVISIONS = [
    { key: 'super-league', name: 'Super Liga', level: 1, teams: 20 },
    { key: 'prva-liga', name: 'Prva Liga', level: 2, teams: 20 },
    { key: 'druga-liga', name: 'Druga Liga', level: 3, teams: 20 },
    { key: 'terca-liga', name: 'Treća Liga', level: 4, teams: 20 }
];

const SLOVAKIA_DIVISIONS = [
    { key: '1-liga', name: '1. Liga', level: 1, teams: 20 },
    { key: '2-liga', name: '2. Liga', level: 2, teams: 20 },
    { key: '3-liga', name: '3. Liga', level: 3, teams: 20 },
    { key: '4-liga', name: '4. Liga', level: 4, teams: 20 }
];

const SLOVENIA_DIVISIONS = [
    { key: 'prva-liga', name: 'Prva Liga', level: 1, teams: 20 },
    { key: 'druga-liga', name: 'Druga Liga', level: 2, teams: 20 },
    { key: 'terca-liga', name: 'Tretja Liga', level: 3, teams: 20 },
    { key: 'cetvrta-liga', name: 'Četrta Liga', level: 4, teams: 20 }
];

const SWEDEN_DIVISIONS = [
    { key: 'allsvenskan', name: 'Allsvenskan', level: 1, teams: 20 },
    { key: 'superettan', name: 'Superettan', level: 2, teams: 20 },
    { key: 'division-1', name: 'Division 1', level: 3, teams: 20 },
    { key: 'division-2', name: 'Division 2', level: 4, teams: 20 }
];

const SWITZERLAND_DIVISIONS = [
    { key: 'super-league', name: 'Super League', level: 1, teams: 20 },
    { key: 'challenge-league', name: 'Challenge League', level: 2, teams: 20 },
    { key: 'promotion-league', name: 'Promotion League', level: 3, teams: 20 },
    { key: 'classic-league', name: 'Classic League', level: 4, teams: 20 }
];

const TURKEY_DIVISIONS = [
    { key: 'super-lig', name: 'Süper Lig', level: 1, teams: 20 },
    { key: '1-lig', name: '1. Lig', level: 2, teams: 20 },
    { key: '2-lig', name: '2. Lig', level: 3, teams: 20 },
    { key: '3-lig', name: '3. Lig', level: 4, teams: 20 }
];

const UKRAINE_DIVISIONS = [
    { key: 'premier-league', name: 'Premier League', level: 1, teams: 20 },
    { key: 'first-league', name: 'First League', level: 2, teams: 20 },
    { key: 'second-league', name: 'Second League', level: 3, teams: 20 },
    { key: 'third-league', name: 'Third League', level: 4, teams: 20 }
];

const VATICAN_CITY_DIVISIONS = [
    { key: 'league-one', name: 'Vatican City League', level: 1, teams: 20 },
    { key: 'league-two', name: 'Vatican City Second', level: 2, teams: 20 },
    { key: 'league-three', name: 'Vatican City Third', level: 3, teams: 20 },
    { key: 'league-four', name: 'Vatican City Fourth', level: 4, teams: 20 }
];

const USA_DIVISIONS = [
    { key: 'mls', name: 'MLS', level: 1, teams: 20 },
    { key: 'usl-championship', name: 'USL Championship', level: 2, teams: 20 },
    { key: 'usl-league-one', name: 'USL League One', level: 3, teams: 20 },
    { key: 'nisa', name: 'NISA', level: 4, teams: 20 }
];

const BRAZIL_DIVISIONS = [
    { key: 'serie-a', name: 'Serie A', level: 1, teams: 20 },
    { key: 'serie-b', name: 'Serie B', level: 2, teams: 20 },
    { key: 'serie-c', name: 'Serie C', level: 3, teams: 20 },
    { key: 'serie-d', name: 'Serie D', level: 4, teams: 20 }
];

const ARGENTINA_DIVISIONS = [
    { key: 'primera-division', name: 'Primera División', level: 1, teams: 20 },
    { key: 'primera-nacional', name: 'Primera Nacional', level: 2, teams: 20 },
    { key: 'primera-b', name: 'Primera B', level: 3, teams: 20 },
    { key: 'primera-c', name: 'Primera C', level: 4, teams: 20 }
];

const JAPAN_DIVISIONS = [
    { key: 'j1-league', name: 'J1 League', level: 1, teams: 20 },
    { key: 'j2-league', name: 'J2 League', level: 2, teams: 20 },
    { key: 'j3-league', name: 'J3 League', level: 3, teams: 20 },
    { key: 'jfl', name: 'Japan Football League', level: 4, teams: 20 }
];

const AUSTRALIA_DIVISIONS = [
    { key: 'a-league', name: 'A-League', level: 1, teams: 20 },
    { key: 'npl', name: 'National Premier Leagues', level: 2, teams: 20 },
    { key: 'npl2', name: 'NPL2', level: 3, teams: 20 },
    { key: 'npl3', name: 'NPL3', level: 4, teams: 20 }
];

const SOUTH_AFRICA_DIVISIONS = [
    { key: 'premier-soccer-league', name: 'Premier Soccer League', level: 1, teams: 20 },
    { key: 'national-first-division', name: 'National First Division', level: 2, teams: 20 },
    { key: 'sabc-cup', name: 'SABC Cup', level: 3, teams: 20 },
    { key: 'nedbank-cup', name: 'Nedbank Cup', level: 4, teams: 20 }
];

const MEXICO_DIVISIONS = [
    { key: 'liga-mx', name: 'Liga MX', level: 1, teams: 20 },
    { key: 'liga-expansion', name: 'Liga de Expansión MX', level: 2, teams: 20 },
    { key: 'liga-tfm', name: 'Liga TFM', level: 3, teams: 20 },
    { key: 'liga-infantil', name: 'Liga Infantil', level: 4, teams: 20 }
];

const CANADA_DIVISIONS = [
    { key: 'canadian-premier-league', name: 'Canadian Premier League', level: 1, teams: 20 },
    { key: 'canadian-championship', name: 'Canadian Championship', level: 2, teams: 20 },
    { key: 'canadian-npl', name: 'NPL Canada', level: 3, teams: 20 },
    { key: 'canadian-amateur', name: 'Canadian Amateur League', level: 4, teams: 20 }
];

const SOUTH_KOREA_DIVISIONS = [
    { key: 'k-league-1', name: 'K League 1', level: 1, teams: 20 },
    { key: 'k-league-2', name: 'K League 2', level: 2, teams: 20 },
    { key: 'k3-league', name: 'K3 League', level: 3, teams: 20 },
    { key: 'k4-league', name: 'K4 League', level: 4, teams: 20 }
];

const CHINA_DIVISIONS = [
    { key: 'china-super-league', name: 'Chinese Super League', level: 1, teams: 20 },
    { key: 'china-league-one', name: 'China League One', level: 2, teams: 20 },
    { key: 'china-league-two', name: 'China League Two', level: 3, teams: 20 },
    { key: 'china-amateur', name: 'China Amateur League', level: 4, teams: 20 }
];

const INDIA_DIVISIONS = [
    { key: 'isl', name: 'Indian Super League', level: 1, teams: 20 },
    { key: 'i-league', name: 'I-League', level: 2, teams: 20 },
    { key: 'i-league-2', name: 'I-League 2', level: 3, teams: 20 },
    { key: 'state-leagues', name: 'State Leagues', level: 4, teams: 20 }
];

const NIGERIA_DIVISIONS = [
    { key: 'npfl', name: 'NPFL', level: 1, teams: 20 },
    { key: 'nigerian-league-one', name: 'Nigerian League One', level: 2, teams: 20 },
    { key: 'nigerian-league-two', name: 'Nigerian League Two', level: 3, teams: 20 },
    { key: 'nigeria-amateur', name: 'Nigeria Amateur League', level: 4, teams: 20 }
];

const EGYPT_DIVISIONS = [
    { key: 'egyptian-premier-league', name: 'Egyptian Premier League', level: 1, teams: 20 },
    { key: 'egyptian-second-division', name: 'Egyptian Second Division', level: 2, teams: 20 },
    { key: 'egyptian-third-division', name: 'Egyptian Third Division', level: 3, teams: 20 },
    { key: 'egypt-amateur', name: 'Egypt Amateur League', level: 4, teams: 20 }
];

const MOROCCO_DIVISIONS = [
    { key: 'botola-pro1', name: 'Botola Pro 1', level: 1, teams: 20 },
    { key: 'botola-pro2', name: 'Botola Pro 2', level: 2, teams: 20 },
    { key: 'amateur-division-one', name: 'Amateur Division One', level: 3, teams: 20 },
    { key: 'amateur-division-two', name: 'Amateur Division Two', level: 4, teams: 20 }
];

const GHANA_DIVISIONS = [
    { key: 'ghana-premier-league', name: 'Ghana Premier League', level: 1, teams: 20 },
    { key: 'ghana-first-division', name: 'Ghana First Division', level: 2, teams: 20 },
    { key: 'ghana-division-two', name: 'Ghana Division Two', level: 3, teams: 20 },
    { key: 'ghana-amateur', name: 'Ghana Amateur League', level: 4, teams: 20 }
];

const NEW_ZEALAND_DIVISIONS = [
    { key: 'nz-premiership', name: 'NZ Premiership', level: 1, teams: 20 },
    { key: 'nz-championship', name: 'NZ Championship', level: 2, teams: 20 },
    { key: 'nz-npl', name: 'NPL New Zealand', level: 3, teams: 20 },
    { key: 'nz-amateur', name: 'NZ Amateur League', level: 4, teams: 20 }
];

const FIJI_DIVISIONS = [
    { key: 'fiji-premiership', name: 'Fiji Premier League', level: 1, teams: 20 },
    { key: 'fiji-super', name: 'Fiji Super League', level: 2, teams: 20 },
    { key: 'fiji-national', name: 'Fiji National League', level: 3, teams: 20 },
    { key: 'fiji-amateur', name: 'Fiji Amateur League', level: 4, teams: 20 }
];

const SAMOA_DIVISIONS = [
    { key: 'samoa-national-league', name: 'Samoa National League', level: 1, teams: 20 },
    { key: 'samoa-championship', name: 'Samoa Championship', level: 2, teams: 20 },
    { key: 'samoa-league-one', name: 'Samoa League One', level: 3, teams: 20 },
    { key: 'samoa-amateur', name: 'Samoa Amateur League', level: 4, teams: 20 }
];

const PAPUA_NEW_GUINEA_DIVISIONS = [
    { key: 'png-national-league', name: 'PNG National League', level: 1, teams: 20 },
    { key: 'png-championship', name: 'PNG Championship', level: 2, teams: 20 },
    { key: 'png-league-one', name: 'PNG League One', level: 3, teams: 20 },
    { key: 'png-amateur', name: 'PNG Amateur League', level: 4, teams: 20 }
];

const SOLOMON_ISLANDS_DIVISIONS = [
    { key: 'solomon-premier', name: 'Solomon Premier League', level: 1, teams: 20 },
    { key: 'solomon-championship', name: 'Solomon Championship', level: 2, teams: 20 },
    { key: 'solomon-league-one', name: 'Solomon League One', level: 3, teams: 20 },
    { key: 'solomon-amateur', name: 'Solomon Amateur League', level: 4, teams: 20 }
];

/**
 * Create a 4-division German league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (76 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createGermanLeagueSystem(teamNames = []) {
    const totalSlots = GERMAN_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Germany Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = GERMAN_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'Germany',
        divisions
    };
}

/**
 * Create a 4-division Spanish league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (80 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createSpanishLeagueSystem(teamNames = []) {
    const totalSlots = SPANISH_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Spain Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = SPANISH_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'Spain',
        divisions
    };
}

/**
 * Create a 4-division Italian league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (80 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createItalianLeagueSystem(teamNames = []) {
    const totalSlots = ITALIAN_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Italy Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = ITALIAN_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'Italy',
        divisions
    };
}

/**
 * Create a 4-division USA league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (64 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createUSALeagueSystem(teamNames = []) {
    const totalSlots = USA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`USA Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = USA_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'USA',
        divisions
    };
}

/**
 * Create a 4-division Brazil league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (100 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createBrazilLeagueSystem(teamNames = []) {
    const totalSlots = BRAZIL_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Brazil Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = BRAZIL_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'Brazil',
        divisions
    };
}

/**
 * Create a 4-division Argentina league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (107 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createArgentinaLeagueSystem(teamNames = []) {
    const totalSlots = ARGENTINA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Argentina Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = ARGENTINA_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'Argentina',
        divisions
    };
}

/**
 * Create a 4-division Japan league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (78 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createJapanLeagueSystem(teamNames = []) {
    const totalSlots = JAPAN_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Japan Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = JAPAN_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'Japan',
        divisions
    };
}

/**
 * Create a 4-division Australia league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (88 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createAustraliaLeagueSystem(teamNames = []) {
    const totalSlots = AUSTRALIA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Australia Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = AUSTRALIA_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'Australia',
        divisions
    };
}

/**
 * Create a 4-division South Africa league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (96 names recommended if using the defined division sizes).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createSouthAfricaLeagueSystem(teamNames = []) {
    const totalSlots = SOUTH_AFRICA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`South Africa Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = SOUTH_AFRICA_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'South Africa',
        divisions
    };
}

function createMexicoLeagueSystem(teamNames = []) {
    const totalSlots = MEXICO_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Mexico Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = MEXICO_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Mexico', divisions };
}

function createCanadaLeagueSystem(teamNames = []) {
    const totalSlots = CANADA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Canada Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = CANADA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Canada', divisions };
}

function createSouthKoreaLeagueSystem(teamNames = []) {
    const totalSlots = SOUTH_KOREA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`South Korea Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = SOUTH_KOREA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'South Korea', divisions };
}

function createChinaLeagueSystem(teamNames = []) {
    const totalSlots = CHINA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`China Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = CHINA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'China', divisions };
}

function createIndiaLeagueSystem(teamNames = []) {
    const totalSlots = INDIA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`India Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = INDIA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'India', divisions };
}

function createNigeriaLeagueSystem(teamNames = []) {
    const totalSlots = NIGERIA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Nigeria Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = NIGERIA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Nigeria', divisions };
}

function createEgyptLeagueSystem(teamNames = []) {
    const totalSlots = EGYPT_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Egypt Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = EGYPT_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Egypt', divisions };
}

function createMoroccoLeagueSystem(teamNames = []) {
    const totalSlots = MOROCCO_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Morocco Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = MOROCCO_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Morocco', divisions };
}

function createGhanaLeagueSystem(teamNames = []) {
    const totalSlots = GHANA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Ghana Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = GHANA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Ghana', divisions };
}

function createNewZealandLeagueSystem(teamNames = []) {
    const totalSlots = NEW_ZEALAND_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`New Zealand Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = NEW_ZEALAND_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'New Zealand', divisions };
}

function createFijiLeagueSystem(teamNames = []) {
    const totalSlots = FIJI_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Fiji Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = FIJI_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Fiji', divisions };
}

function createSamoaLeagueSystem(teamNames = []) {
    const totalSlots = SAMOA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Samoa Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = SAMOA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Samoa', divisions };
}

function createPapuaNewGuineaLeagueSystem(teamNames = []) {
    const totalSlots = PAPUA_NEW_GUINEA_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Papua New Guinea Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = PAPUA_NEW_GUINEA_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Papua New Guinea', divisions };
}

function createSolomonIslandsLeagueSystem(teamNames = []) {
    const totalSlots = SOLOMON_ISLANDS_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);
    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`Solomon Islands Club ${i + 1}`);
    }
    let cursor = 0;
    const divisions = SOLOMON_ISLANDS_DIVISIONS.map(division => {
        const teams = [];
        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({ id: `${division.key}-${i + 1}`, name: teamName });
        }
        return { key: division.key, name: division.name, level: division.level, teams };
    });
    return { country: 'Solomon Islands', divisions };
}

/**
 * Create a 4-division French league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (80 names recommended).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createFrenchLeagueSystem(teamNames = []) {
    const totalSlots = FRENCH_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`France Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = FRENCH_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'France',
        divisions
    };
}

/**
 * Create a 4-division English league pyramid.
 *
 * @param {string[]} teamNames - Flat array of team names (80 names recommended).
 * @returns {{country: string, divisions: Array<{key:string,name:string,level:number,teams:Array<{id:string,name:string}>}>}}
 */
function createEnglishLeagueSystem(teamNames = []) {
    const totalSlots = ENGLISH_DIVISIONS.reduce((sum, d) => sum + d.teams, 0);

    const normalizedNames = [...teamNames];
    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`England Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = ENGLISH_DIVISIONS.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            const teamName = normalizedNames[cursor++];
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: teamName
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: 'England',
        divisions
    };
}

const COUNTRY_DIVISIONS_BY_NAME = {
    'England': ENGLISH_DIVISIONS,
    'France': FRENCH_DIVISIONS,
    'Germany': GERMAN_DIVISIONS,
    'Spain': SPANISH_DIVISIONS,
    'Italy': ITALIAN_DIVISIONS,
    'Albania': ALBANIA_DIVISIONS,
    'Andorra': ANDORRA_DIVISIONS,
    'Armenia': ARMENIA_DIVISIONS,
    'Austria': AUSTRIA_DIVISIONS,
    'Azerbaijan': AZERBAIJAN_DIVISIONS,
    'Belarus': BELARUS_DIVISIONS,
    'Belgium': BELGIUM_DIVISIONS,
    'Bosnia and Herzegovina': BOSNIA_HERZEGOVINA_DIVISIONS,
    'Bulgaria': BULGARIA_DIVISIONS,
    'Croatia': CROATIA_DIVISIONS,
    'Cyprus': CYPRUS_DIVISIONS,
    'Czech Republic': CZECH_DIVISIONS,
    'Denmark': DENMARK_DIVISIONS,
    'Estonia': ESTONIA_DIVISIONS,
    'Finland': FINLAND_DIVISIONS,
    'Georgia': GEORGIA_DIVISIONS,
    'Greece': GREECE_DIVISIONS,
    'Hungary': HUNGARY_DIVISIONS,
    'Iceland': ICELAND_DIVISIONS,
    'Ireland': IRELAND_DIVISIONS,
    'Kazakhstan': KAZAKHSTAN_DIVISIONS,
    'Kosovo': KOSOVO_DIVISIONS,
    'Latvia': LATVIA_DIVISIONS,
    'Liechtenstein': LIECHTENSTEIN_DIVISIONS,
    'Lithuania': LITHUANIA_DIVISIONS,
    'Luxembourg': LUXEMBOURG_DIVISIONS,
    'Malta': MALTA_DIVISIONS,
    'Moldova': MOLDOVA_DIVISIONS,
    'Monaco': MONACO_DIVISIONS,
    'Montenegro': MONTENEGRO_DIVISIONS,
    'Netherlands': NETHERLANDS_DIVISIONS,
    'North Macedonia': NORTH_MACEDONIA_DIVISIONS,
    'Norway': NORWAY_DIVISIONS,
    'Poland': POLAND_DIVISIONS,
    'Portugal': PORTUGAL_DIVISIONS,
    'Romania': ROMANIA_DIVISIONS,
    'Russia': RUSSIA_DIVISIONS,
    'San Marino': SAN_MARINO_DIVISIONS,
    'Serbia': SERBIA_DIVISIONS,
    'Slovakia': SLOVAKIA_DIVISIONS,
    'Slovenia': SLOVENIA_DIVISIONS,
    'Sweden': SWEDEN_DIVISIONS,
    'Switzerland': SWITZERLAND_DIVISIONS,
    'Turkey': TURKEY_DIVISIONS,
    'Ukraine': UKRAINE_DIVISIONS,
    'Vatican City': VATICAN_CITY_DIVISIONS,
    'USA': USA_DIVISIONS,
    'Brazil': BRAZIL_DIVISIONS,
    'Argentina': ARGENTINA_DIVISIONS,
    'Mexico': MEXICO_DIVISIONS,
    'Canada': CANADA_DIVISIONS,
    'Japan': JAPAN_DIVISIONS,
    'South Korea': SOUTH_KOREA_DIVISIONS,
    'China': CHINA_DIVISIONS,
    'India': INDIA_DIVISIONS,
    'Australia': AUSTRALIA_DIVISIONS,
    'Nigeria': NIGERIA_DIVISIONS,
    'Egypt': EGYPT_DIVISIONS,
    'South Africa': SOUTH_AFRICA_DIVISIONS,
    'Morocco': MOROCCO_DIVISIONS,
    'Ghana': GHANA_DIVISIONS,
    'New Zealand': NEW_ZEALAND_DIVISIONS,
    'Fiji': FIJI_DIVISIONS,
    'Samoa': SAMOA_DIVISIONS,
    'Papua New Guinea': PAPUA_NEW_GUINEA_DIVISIONS,
    'Solomon Islands': SOLOMON_ISLANDS_DIVISIONS
};

function createLeagueSystemForCountry(countryName, teamNames = []) {
    const divisionsConfig = COUNTRY_DIVISIONS_BY_NAME[countryName] || ENGLISH_DIVISIONS;
    const totalSlots = divisionsConfig.reduce((sum, division) => sum + division.teams, 0);
    const normalizedNames = [...teamNames];

    for (let i = normalizedNames.length; i < totalSlots; i++) {
        normalizedNames.push(`${countryName} Club ${i + 1}`);
    }

    let cursor = 0;
    const divisions = divisionsConfig.map(division => {
        const teams = [];

        for (let i = 0; i < division.teams; i++) {
            teams.push({
                id: `${division.key}-${i + 1}`,
                name: normalizedNames[cursor++]
            });
        }

        return {
            key: division.key,
            name: division.name,
            level: division.level,
            teams
        };
    });

    return {
        country: countryName,
        divisions
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ENGLISH_DIVISIONS,
        FRENCH_DIVISIONS,
        GERMAN_DIVISIONS,
        SPANISH_DIVISIONS,
        ITALIAN_DIVISIONS,
        USA_DIVISIONS,
        BRAZIL_DIVISIONS,
        ARGENTINA_DIVISIONS,
        JAPAN_DIVISIONS,
        AUSTRALIA_DIVISIONS,
        SOUTH_AFRICA_DIVISIONS,
        MEXICO_DIVISIONS,
        CANADA_DIVISIONS,
        SOUTH_KOREA_DIVISIONS,
        CHINA_DIVISIONS,
        INDIA_DIVISIONS,
        NIGERIA_DIVISIONS,
        EGYPT_DIVISIONS,
        MOROCCO_DIVISIONS,
        GHANA_DIVISIONS,
        NEW_ZEALAND_DIVISIONS,
        FIJI_DIVISIONS,
        SAMOA_DIVISIONS,
        PAPUA_NEW_GUINEA_DIVISIONS,
        SOLOMON_ISLANDS_DIVISIONS,
        COUNTRY_DIVISIONS_BY_NAME,
        createLeagueSystemForCountry,
        createEnglishLeagueSystem,
        createFrenchLeagueSystem,
        createGermanLeagueSystem,
        createSpanishLeagueSystem,
        createItalianLeagueSystem,
        createUSALeagueSystem,
        createBrazilLeagueSystem,
        createArgentinaLeagueSystem,
        createJapanLeagueSystem,
        createAustraliaLeagueSystem,
        createSouthAfricaLeagueSystem,
        createMexicoLeagueSystem,
        createCanadaLeagueSystem,
        createSouthKoreaLeagueSystem,
        createChinaLeagueSystem,
        createIndiaLeagueSystem,
        createNigeriaLeagueSystem,
        createEgyptLeagueSystem,
        createMoroccoLeagueSystem,
        createGhanaLeagueSystem,
        createNewZealandLeagueSystem,
        createFijiLeagueSystem,
        createSamoaLeagueSystem,
        createPapuaNewGuineaLeagueSystem,
        createSolomonIslandsLeagueSystem
    };
}

if (typeof window !== 'undefined') {
    window.ENGLISH_DIVISIONS = ENGLISH_DIVISIONS;
    window.COUNTRY_DIVISIONS_BY_NAME = COUNTRY_DIVISIONS_BY_NAME;
    window.createLeagueSystemForCountry = createLeagueSystemForCountry;
    window.createEnglishLeagueSystem = createEnglishLeagueSystem;
    window.createFrenchLeagueSystem = createFrenchLeagueSystem;
    window.createGermanLeagueSystem = createGermanLeagueSystem;
    window.createSpanishLeagueSystem = createSpanishLeagueSystem;
    window.createItalianLeagueSystem = createItalianLeagueSystem;
    window.createUSALeagueSystem = createUSALeagueSystem;
    window.createBrazilLeagueSystem = createBrazilLeagueSystem;
    window.createArgentinaLeagueSystem = createArgentinaLeagueSystem;
    window.createJapanLeagueSystem = createJapanLeagueSystem;
    window.createAustraliaLeagueSystem = createAustraliaLeagueSystem;
    window.createSouthAfricaLeagueSystem = createSouthAfricaLeagueSystem;
    window.createMexicoLeagueSystem = createMexicoLeagueSystem;
    window.createCanadaLeagueSystem = createCanadaLeagueSystem;
    window.createSouthKoreaLeagueSystem = createSouthKoreaLeagueSystem;
    window.createChinaLeagueSystem = createChinaLeagueSystem;
    window.createIndiaLeagueSystem = createIndiaLeagueSystem;
    window.createNigeriaLeagueSystem = createNigeriaLeagueSystem;
    window.createEgyptLeagueSystem = createEgyptLeagueSystem;
    window.createMoroccoLeagueSystem = createMoroccoLeagueSystem;
    window.createGhanaLeagueSystem = createGhanaLeagueSystem;
    window.createNewZealandLeagueSystem = createNewZealandLeagueSystem;
    window.createFijiLeagueSystem = createFijiLeagueSystem;
    window.createSamoaLeagueSystem = createSamoaLeagueSystem;
    window.createPapuaNewGuineaLeagueSystem = createPapuaNewGuineaLeagueSystem;
    window.createSolomonIslandsLeagueSystem = createSolomonIslandsLeagueSystem;
}
