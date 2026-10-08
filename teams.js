// Team and player generation utilities

const PLAYER_FIRST_NAMES = [
    'James', 'John', 'William', 'Thomas', 'Henry', 'Edward', 'George', 'Charles', 'Harry', 'Oliver',
    'Jack', 'Jacob', 'Noah', 'Ethan', 'Lucas', 'Mason', 'Logan', 'Alexander', 'Benjamin', 'Daniel',
    'Matthew', 'Samuel', 'Joseph', 'David', 'Michael', 'Christopher', 'Andrew', 'Joshua', 'Ryan', 'Nathan',
    'Isaac', 'Caleb', 'Dylan', 'Luke', 'Gabriel', 'Anthony', 'Jonathan', 'Adam', 'Aaron', 'Connor',
    'Liam', 'Owen', 'Sebastian', 'Elijah', 'Leo', 'Julian', 'Dominic', 'Zachary', 'Tyler', 'Evan',
    'Aiden', 'Jayden', 'Brayden', 'Hayden', 'Kaden', 'Cameron', 'Jordan', 'Parker', 'Quinn', 'Blake',
    'Finley', 'Reece', 'Rowan', 'Toby', 'Alfie', 'Archie', 'Theo', 'Hugo', 'Louis', 'Arthur',
    'Reuben', 'Ezra', 'Felix', 'Jasper', 'Milo', 'Otis', 'Sonny', 'Cody', 'Brandon', 'Kyle',
    'Shane', 'Travis', 'Brett', 'Dean', 'Curtis', 'Darren', 'Leon', 'Mitchell', 'Scott', 'Stuart'
];

const PLAYER_LAST_NAMES = [
    'Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson', 'Johnson', 'Davies', 'Robinson', 'Wright',
    'Thompson', 'Evans', 'Walker', 'White', 'Roberts', 'Green', 'Hall', 'Wood', 'Jackson', 'Clarke',
    'Harris', 'Edwards', 'Turner', 'Martin', 'Cooper', 'Hill', 'Ward', 'Morris', 'Moore', 'King',
    'Baker', 'Harrison', 'Morgan', 'Allen', 'Bennett', 'Parker', 'Cook', 'Bailey', 'Carter', 'Richardson',
    'Cox', 'Gray', 'Simpson', 'Adams', 'Fisher', 'Collins', 'Stewart', 'Barnes', 'Knight', 'Palmer',
    'Chapman', 'Shaw', 'Lloyd', 'Ellis', 'Richards', 'Russell', 'Griffin', 'Foster', 'Powell', 'Long',
    'Hughes', 'Price', 'Jenkins', 'Holmes', 'Scott', 'Murray', 'Matthews', 'Hunter', 'Mills', 'Gibson',
    'Spencer', 'Berry', 'Gordon', 'Webb', 'Payne', 'Black', 'Fox', 'Rose', 'Stone', 'West',
    'Burke', 'Rice', 'Dean', 'Lane', 'Gardner', 'Hudson', 'Fowler', 'Warren', 'Porter', 'Harvey'
];

const FRENCH_FIRST_NAMES = [
    'Lucas', 'Hugo', 'Léo', 'Arthur', 'Raphaël', 'Noah', 'Gabriel', 'Louis', 'Ethan', 'Mathis',
    'Adam', 'Nathan', 'Tom', 'Enzo', 'Axel', 'Maël', 'Paul', 'Victor', 'Gabin', 'Romain'
];

const FRENCH_LAST_NAMES = [
    'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau',
    'Simon', 'Laurent', 'Lefèvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Rousseau', 'Vincent', 'Fournier'
];

const GERMAN_FIRST_NAMES = [
    'Lukas', 'Felix', 'Max', 'Paul', 'Levin', 'Luis', 'Jonas', 'Noah', 'Finn', 'Elias',
    'Mats', 'Jan', 'Nico', 'Tobias', 'Niklas', 'Moritz', 'Simon', 'Marcel', 'Tim', 'Oskar'
];

const GERMAN_LAST_NAMES = [
    'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
    'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann'
];

const SPANISH_FIRST_NAMES = [
    'Alejandro', 'Carlos', 'Daniel', 'David', 'Diego', 'Fernando', 'Francisco', 'Gabriel', 'Hugo', 'Iván',
    'Javier', 'José', 'Juan', 'Luis', 'Manuel', 'Miguel', 'Pablo', 'Pedro', 'Rafael', 'Sergio'
];

const SPANISH_LAST_NAMES = [
    'García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Martín', 'Ruiz',
    'Hernández', 'Jiménez', 'Moreno', 'Álvarez', 'Romero', 'Gutiérrez', 'Navarro', 'Torres', 'Domínguez', 'Vázquez'
];

const ITALIAN_FIRST_NAMES = [
    'Alessandro', 'Andrea', 'Antonio', 'Carlo', 'Davide', 'Emanuele', 'Fabio', 'Federico', 'Francesco', 'Gabriele',
    'Gianluca', 'Giovanni', 'Luca', 'Marco', 'Matteo', 'Massimo', 'Nicola', 'Paolo', 'Roberto', 'Simone'
];

const ITALIAN_LAST_NAMES = [
    'Rossi', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno',
    'Gallo', 'Conti', 'De Luca', 'Mancini', 'Costa', 'Giordano', 'Rizzo', 'Lombardi', 'Moretti', 'Barbieri'
];

const MEXICO_FIRST_NAMES = [
    'Miguel', 'Javier', 'Luis', 'Carlos', 'Antonio', 'Alejandro', 'Fernando', 'Francisco', 'Jesus', 'Eduardo',
    'Ricardo', 'Juan', 'Roberto', 'Rafael', 'Mario', 'Oscar', 'Sergio', 'Victor', 'Enrique', 'Ignacio'
];

const MEXICO_LAST_NAMES = [
    'Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Torres',
    'Flores', 'Gómez', 'Díaz', 'Reyes', 'Jiménez', 'Ruiz', 'Morales', 'Ortega', 'Castillo', 'Vázquez'
];

const CANADA_FIRST_NAMES = [
    'Liam', 'Noah', 'Oliver', 'Ethan', 'Mason', 'Logan', 'Lucas', 'Jackson', 'Aiden', 'Jacob',
    'William', 'Benjamin', 'Henry', 'Owen', 'Alexander', 'Samuel', 'Matthew', 'Ryan', 'Nathan', 'Connor'
];

const CANADA_LAST_NAMES = [
    'Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Lee', 'Walker', 'Green', 'Hall', 'Thomas',
    'Scott', 'McDonald', 'Wilson', 'Clark', 'Campbell', 'Mitchell', 'Watson', 'Peterson', 'Carter', 'Poirier'
];

const SOUTH_KOREA_FIRST_NAMES = [
    'Ji', 'Min', 'Seo', 'Jun', 'Woo', 'Hyun', 'Tae', 'Dong', 'Sung', 'Young',
    'Hye', 'Jin', 'Mi', 'Eun', 'Seo', 'Na', 'Yeon', 'Hae', 'Ji', 'In'
];

const SOUTH_KOREA_LAST_NAMES = [
    'Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Cho', 'Yoon', 'Jang', 'Lim',
    'Han', 'Oh', 'Seo', 'Shin', 'Yoo', 'Kwon', 'Hwang', 'Ahn', 'Song', 'Chun'
];

const CHINA_FIRST_NAMES = [
    'Wei', 'Jian', 'Lei', 'Jie', 'Li', 'Jun', 'Peng', 'Tao', 'Hao', 'Ming',
    'Yu', 'Hui', 'Bo', 'Chen', 'Qiang', 'Guang', 'Feng', 'Zhi', 'Xiao', 'Yang'
];

const CHINA_LAST_NAMES = [
    'Li', 'Wang', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou',
    'Xu', 'Sun', 'Ma', 'Zhu', 'Hu', 'Guo', 'He', 'Gao', 'Lin', 'Luo'
];

const INDIA_FIRST_NAMES = [
    'Arjun', 'Rahul', 'Rohan', 'Vikram', 'Amit', 'Siddharth', 'Karan', 'Nikhil', 'Anand', 'Vijay',
    'Ravi', 'Rohit', 'Manish', 'Saurav', 'Aakash', 'Deven', 'Deepak', 'Harish', 'Kunal', 'Sachin'
];

const INDIA_LAST_NAMES = [
    'Patel', 'Singh', 'Kumar', 'Sharma', 'Gupta', 'Verma', 'Chaudhary', 'Joshi', 'Reddy', 'Nair',
    'Mehta', 'Das', 'Jain', 'Chopra', 'Bhat', 'Shah', 'Nanda', 'Iyer', 'Kapoor', 'Saxena'
];

const NIGERIA_FIRST_NAMES = [
    'Chinedu', 'Ifeanyi', 'Oluwaseun', 'Adekemi', 'Emeka', 'Ibrahim', 'Ade', 'Tunde', 'Chukwu', 'Uche',
    'Bisi', 'Femi', 'Kemi', 'Amina', 'Esther', 'Ngozi', 'Oluchi', 'Tosin', 'Ken', 'Nnamdi'
];

const NIGERIA_LAST_NAMES = [
    'Okafor', 'Johnson', 'Oladipo', 'Ibrahim', 'Ogun', 'Ola', 'Adebayo', 'Chukwu', 'Eze', 'Okechukwu',
    'Onyeka', 'Balogun', 'Okonkwo', 'Adewale', 'Ojo', 'Idowu', 'Oluwole', 'Ajayi', 'Ibe', 'Ebenezer'
];

const EGYPT_FIRST_NAMES = [
    'Mohamed', 'Ahmed', 'Omar', 'Youssef', 'Ali', 'Mostafa', 'Karim', 'Hassan', 'Mahmoud', 'Ibrahim',
    'Amir', 'Tamer', 'Adel', 'Ayman', 'Hany', 'Walid', 'Sherif', 'Nader', 'Mourad', 'Sami'
];

const EGYPT_LAST_NAMES = [
    'Hassan', 'Mohamed', 'Ali', 'Abdel', 'Ibrahim', 'Youssef', 'El-Sayed', 'Hussein', 'Saeed', 'Farouk',
    'Mahmoud', 'Fahmy', 'Salah', 'Abdelrahman', 'Nashat', 'Ramzy', 'Fathi', 'Gamal', 'Tarek', 'Zaki'
];

const MOROCCO_FIRST_NAMES = [
    'Karim', 'Youssef', 'Ahmed', 'Hassan', 'Said', 'Omar', 'Rachid', 'Abdel', 'Nabil', 'Anas',
    'Samir', 'Hamid', 'Yassine', 'Mehdi', 'Tarek', 'Ayman', 'Bilal', 'Rida', 'Hicham', 'Younes'
];

const MOROCCO_LAST_NAMES = [
    'El Idrissi', 'Amrani', 'Benzema', 'Oulad', 'Alaoui', 'Boufal', 'Mzoughi', 'Bennani', 'Hassani', 'Barkat',
    'Talbi', 'Aziz', 'Fassi', 'Hamdani', 'Lahmar', 'Sahraoui', 'Rahal', 'Chaoui', 'Errai', 'Mansouri'
];

const GHANA_FIRST_NAMES = [
    'Kwame', 'Kofi', 'Yaw', 'Kojo', 'Prince', 'Nana', 'Samuel', 'Daniel', 'Michael', 'John',
    'David', 'Joseph', 'Emmanuel', 'Peter', 'Richard', 'Benjamin', 'Edward', 'Frederick', 'Eric', 'Frank'
];

const GHANA_LAST_NAMES = [
    'Mensah', 'Boateng', 'Appiah', 'Owusu', 'Adams', 'Ofori', 'Agyeman', 'Kwarteng', 'Asante', 'Nkrumah',
    'Osei', 'Aidoo', 'Antwi', 'Kumah', 'Ankrah', 'Tetteh', 'Amponsah', 'Kissi', 'Sarpong', 'Baah'
];

const NEW_ZEALAND_FIRST_NAMES = [
    'Liam', 'Noah', 'Oliver', 'Mason', 'Lucas', 'Oliver', 'Leo', 'Charlie', 'James', 'Thomas',
    'Jacob', 'Max', 'Ethan', 'Leo', 'Isaac', 'Harry', 'Hugo', 'Samuel', 'Archie', 'Oscar'
];

const NEW_ZEALAND_LAST_NAMES = [
    'Smith', 'Jones', 'Williams', 'Brown', 'Taylor', 'Wilson', 'Thompson', 'Evans', 'Nguyen', 'Robinson',
    'Walker', 'Hill', 'King', 'Scott', 'Young', 'Martin', 'Lee', 'Mitchell', 'Reid', 'Carter'
];

const FIJI_FIRST_NAMES = [
    'Jone', 'Peni', 'Ratu', 'Isimeli', 'Eroni', 'Sakiusa', 'Esala', 'Mako', 'Viliame', 'Apisai',
    'Semisi', 'Elia', 'Naemi', 'Jas', 'Tevita', 'Samu', 'Apenisa', 'Manasa', 'Peniasi', 'Jonah'
];

const FIJI_LAST_NAMES = [
    'Ratu', 'Naiqama', 'Nawaqanitawase', 'Baledrokadroka', 'Tuisawau', 'Masilaca', 'Kuridrani', 'Vatubua', 'Radradra', 'Raiwalui',
    'Vakalahi', 'Ravi', 'Tavui', 'Yarnall', 'Luvu', 'Saili', 'Waqavonovono', 'Tavua', 'Matae', 'Nasilia'
];

const SAMOA_FIRST_NAMES = [
    'Luka', 'Tusi', 'Mata', 'Faasiu', 'Iose', 'Faalogo', 'Samuela', 'Tupu', 'Malo', 'Lemalu',
    'Poe', 'Fili', 'Mose', 'Uili', 'Telea', 'Logan', 'Tulia', 'Paia', 'Niko', 'Leki'
];

const SAMOA_LAST_NAMES = [
    'Tupuola', 'Tuuga', 'Fale', 'Ala', 'Mataafa', 'Vai', 'Aiono', 'Lavelua', 'Toto', 'Tuilaepa',
    'Malietoa', 'Mataafa', 'Taufa', 'Tafuna', 'Alofa', 'Lemanu', 'Leota', 'Tuipulotu', 'Fao', 'Vai'
];

const PAPUA_NEW_GUINEA_FIRST_NAMES = [
    'Moses', 'John', 'Peter', 'David', 'Paul', 'Mark', 'Daniel', 'Joseph', 'Isaac', 'Samuel',
    'Benjamin', 'Simon', 'Elijah', 'Joshua', 'Jacob', 'Nathan', 'Michael', 'Andrew', 'Thomas', 'Luke'
];

const PAPUA_NEW_GUINEA_LAST_NAMES = [
    'Malo', 'Moresby', 'Kidu', 'Gavara', 'Nepa', 'Kapi', 'Tasip', 'Mekere', 'Zeming', 'Naupa',
    'Koim', 'Yali', 'Gogom', 'Waroi', 'Piri', 'Wabo', 'Kijana', 'Rigo', 'Bebe', 'Kakasa'
];

const SOLOMON_ISLANDS_FIRST_NAMES = [
    'David', 'James', 'Peter', 'Michael', 'John', 'Samuel', 'Daniel', 'Paul', 'Andrew', 'Mark',
    'Joseph', 'Thomas', 'Isaac', 'Benjamin', 'Joshua', 'Simon', 'Luke', 'Nathan', 'Robert', 'Aaron'
];

const SOLOMON_ISLANDS_LAST_NAMES = [
    'Ramo', 'Honiara', 'Pasa', 'Riki', 'Kokomala', 'Tavui', 'Ari', 'Bana', 'Ishihara', 'Kort',
    'Sauni', 'Tuki', 'Ravi', 'Vakalahi', 'Taoa', 'Marau', 'Lomaloma', 'Tome', 'Nasi', 'Peni'
];

const USA_FIRST_NAMES = [
    'James', 'Michael', 'John', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Daniel',
    'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin'
];

const USA_LAST_NAMES = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'
];

const BRAZIL_FIRST_NAMES = [
    'João', 'José', 'Maria', 'Antonio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz',
    'Marcos', 'Luis', 'Gabriel', 'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Raimundo'
];

const BRAZIL_LAST_NAMES = [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes',
    'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes', 'Soares', 'Fernandes', 'Vieira', 'Barbosa'
];

const ARGENTINA_FIRST_NAMES = [
    'Juan', 'José', 'Carlos', 'Jorge', 'Luis', 'Miguel', 'Antonio', 'Pedro', 'Alejandro', 'Roberto',
    'Fernando', 'Ricardo', 'Pablo', 'Daniel', 'Eduardo', 'Sergio', 'Gustavo', 'Mario', 'Raúl', 'Oscar'
];

const ARGENTINA_LAST_NAMES = [
    'García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Pérez', 'Sánchez', 'Romero', 'Sosa',
    'Torres', 'Álvarez', 'Ruiz', 'Ramírez', 'Flores', 'Acosta', 'Benítez', 'Medina', 'Herrera', 'Aguirre'
];

const JAPAN_FIRST_NAMES = [
    'Hiroshi', 'Kenji', 'Yuki', 'Takashi', 'Kazuki', 'Ryota', 'Yuto', 'Haruto', 'Sota', 'Yuta',
    'Daiki', 'Shota', 'Taro', 'Jiro', 'Saburo', 'Shiro', 'Kuro', 'Akira', 'Haru', 'Natsu'
];

const JAPAN_LAST_NAMES = [
    'Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato',
    'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Shimizu', 'Saito'
];

const AUSTRALIA_FIRST_NAMES = [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas',
    'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua'
];

const AUSTRALIA_LAST_NAMES = [
    'Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White', 'Martin', 'Anderson',
    'Thompson', 'Nguyen', 'Thomas', 'Walker', 'Harris', 'Lee', 'Ryan', 'Robinson', 'Kelly', 'King'
];

const SOUTH_AFRICA_FIRST_NAMES = [
    'Sipho', 'Thabo', 'Lerato', 'Nomsa', 'Bongani', 'Zanele', 'Jabulani', 'Nomsa', 'Thandi', 'Sibusiso',
    'Mandla', 'Nomvula', 'Themba', 'Zodwa', 'Vusi', 'Nomsa', 'Bhekisisa', 'Nomsa', 'Thabo', 'Lerato'
];

const SOUTH_AFRICA_LAST_NAMES = [
    'Nkosi', 'Dlamini', 'Zulu', 'Mthembu', 'Ndlovu', 'Shabalala', 'Mkhize', 'Khoza', 'Buthelezi', 'Sithole',
    'Ngwenya', 'Moyo', 'Ncube', 'Sibanda', 'Gumede', 'Cele', 'Mthembu', 'Nxumalo', 'Zwane', 'Mthembu'
];

// European Players First Names
const ALBANIA_FIRST_NAMES = ['Besnik', 'Eftim', 'Hamit', 'Ismail', 'Kastriot', 'Nexhat', 'Naser', 'Qazim', 'Riza', 'Samir', 'Taulant', 'Ujdi', 'Valdrin', 'Vasil', 'Xhaka', 'Ymer', 'Zamir', 'Arber', 'Amir', 'Andi'];
const ALBANIA_LAST_NAMES = ['Rama', 'Krasniqi', 'Naibi', 'Osmani', 'Muçaj', 'Hysaj', 'Djimsiti', 'Çitaku', 'Veseli', 'Ajdini', 'Asani', 'Broja', 'Cikalleshi', 'Çikalleshi', 'Dorënjaku', 'Halimi', 'Hazizaj', 'Iliev', 'Ibrahimovic', 'Janssen'];

const ANDORRA_FIRST_NAMES = ['Albert', 'Andreu', 'Carles', 'Custodio', 'Esteve', 'Ferran', 'Francesc', 'Gràcia', 'Ignasi', 'Jaume', 'Joan', 'Jordi', 'Josep', 'Juan', 'Koldo', 'Liberato', 'Miquel', 'Nàxer', 'Oleguer', 'Paco'];
const ANDORRA_LAST_NAMES = ['Xangari', 'Mancuso', 'Molina', 'Mora', 'Moreno', 'Nieto', 'Oller', 'Olivella', 'Oliver', 'Oms', 'Orra', 'Peña', 'Pereda', 'Perich', 'Pons', 'Puig', 'Quintana', 'Rabaneda', 'Ramírez', 'Ramos'];

const ARMENIA_FIRST_NAMES = ['Arsen', 'Artür', 'Avram', 'Avaş', 'Araksia', 'Arek', 'Artem', 'Ashot', 'Artsak', 'Atom', 'Aram', 'Armen', 'Arshak', 'Artashes', 'Arto', 'Arvaz', 'Asgad', 'Asatur', 'Asidia', 'Asmik'];
const ARMENIA_LAST_NAMES = ['Adamyan', 'Avetisyan', 'Azoyan', 'Arutyunyan', 'Akopyan', 'Abrahamyan', 'Antaramyan', 'Adizyan', 'Akhalbedyan', 'Akhuranyan', 'Alboyan', 'Alenatyan', 'Aleksanyan', 'Alikhayan', 'Alivanyan', 'Almazyan', 'Almekyan', 'Aloyan', 'Alshanian', 'Amaryan'];

const AUSTRIA_FIRST_NAMES = ['Andreas', 'Andrija', 'Arno', 'Arnold', 'Arthur', 'Asa', 'Asterios', 'Auguste', 'Augusto', 'Aurora', 'Aurélien', 'Austen', 'Austin', 'Aut', 'Autumn', 'Ava', 'Avery', 'Avid', 'Avitus', 'Avraham'];
const AUSTRIA_LAST_NAMES = ['Alaba', 'Altintop', 'Arnautovic', 'Aspilicueta', 'Aubameyang', 'Augustin', 'Aurer', 'Auschwitz', 'Austausch', 'Ausweis', 'Bahoune', 'Baiocchi', 'Bajic', 'Balaban', 'Balajka', 'Balassa', 'Balaž', 'Balbino', 'Baldauf', 'Baldinger'];

const AZERBAIJAN_FIRST_NAMES = ['Alasgar', 'Alattin', 'Aleksei', 'Aleksandr', 'Alexei', 'Alfaham', 'Alfird', 'Alfredi', 'Algan', 'Algis', 'Aliakbar', 'Alian', 'Aliaskar', 'Alibek', 'Alief', 'Alih', 'Alim', 'Alimasp', 'Alimjan', 'Alinur'];
const AZERBAIJAN_LAST_NAMES = ['Aghayev', 'Aghasaliyev', 'Akhmedov', 'Akhmedova', 'Akinshev', 'Akperov', 'Aktekeyev', 'Akulliyev', 'Alashbekov', 'Alashirov', 'Alaubayev', 'Alayarova', 'Alazov', 'Albeganov', 'Albekov', 'Albeydullayev', 'Albiyev', 'Albores', 'Alcayev', 'Aldarov'];

const BELARUS_FIRST_NAMES = ['Aleksandr', 'Alexei', 'Aleš', 'Aliaksei', 'Almazbek', 'Andrei', 'Anatoli', 'Anatoly', 'Anadol', 'Anatoliy', 'Andro', 'Andrzej', 'Andzej', 'Andŷ', 'Ania', 'Aniello', 'Anil', 'Anis', 'Anisio', 'Anita'];
const BELARUS_LAST_NAMES = ['Alferov', 'Aleksandrov', 'Alekseyev', 'Aleshin', 'Alekseyev', 'Aleksin', 'Aleksinsky', 'Aleksiyev', 'Aleksnader', 'Aleksnikov', 'Aleksushkin', 'Aleksyuk', 'Alfeyev', 'Alfeyer', 'Alfimov', 'Alfimtsev', 'Alfiorov', 'Alfirov', 'Alfinov', 'Alfiovski'];

const BELGIUM_FIRST_NAMES = ['Albert', 'Alain', 'Alain-Dominique', 'Alain-Michel', 'Alan', 'Alar', 'Alarico', 'Alassio', 'Alavéz', 'Alavi', 'Alba', 'Albany', 'Albaro', 'Albena', 'Alber', 'Albert', 'Alberto', 'Albertus', 'Alberts', 'Albertus'];
const BELGIUM_LAST_NAMES = ['Agostini', 'Agron', 'Aguiló', 'Agulló', 'Aguiluela', 'Agurto', 'Agustín', 'Agustoni', 'Agustsson', 'Aguth', 'Agustinus', 'Agustin', 'Agustín', 'Agustine', 'Agustinov', 'Agustinova', 'Agusti', 'Agustin', 'Agustina', 'Agusti'];

const BOSNIA_FIRST_NAMES = ['Adnan', 'Adem', 'Adil', 'Adriano', 'Adib', 'Adin', 'Admir', 'Adolfo', 'Adolf', 'Adolphe', 'Adolfo', 'Adolfus', 'Adolphe', 'Adolpho', 'Adolf', 'Adolfo', 'Adolfe', 'Adolfe', 'Adolfo', 'Adolphus'];
const BOSNIA_LAST_NAMES = ['Adarević', 'Adamović', 'Adamčević', 'Adamčik', 'Adamčíková', 'Adamčíková', 'Adamčik', 'Adamčíková', 'Adamčíková', 'Adamčíková', 'Adamčáková', 'Adamák', 'Adamčáková', 'Adamčáková', 'Adamčáková', 'Adamčáková', 'Adamčáková', 'Adamčáková', 'Adamčáková', 'Adamčáková'];

const BULGARIA_FIRST_NAMES = ['Aleksandar', 'Aleksi', 'Aleksiy', 'Aleksey', 'Aleksandr', 'Aleksandur', 'Aleksandre', 'Aleksandri', 'Aleksandris', 'Aleksandrite', 'Aleksa', 'Aleksa', 'Aleksander', 'Aleksandar', 'Aleksandor', 'Aleksandur', 'Aleksandur', 'Aleksandur', 'Aleksandur', 'Aleksandur'];
const BULGARIA_LAST_NAMES = ['Aleksandrov', 'Aleksandrova', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov', 'Aleksandrov'];

const CROATIA_FIRST_NAMES = ['Ante', 'Andrija', 'Andro', 'Anđelko', 'Anđela', 'Andraž', 'Andrica', 'Andrian', 'Andries', 'Andrino', 'Andrio', 'Andriot', 'Andris', 'Andrisano', 'Andriso', 'Andrissa', 'Andrita', 'Andritsch', 'Andritso', 'Andrit'];
const CROATIA_LAST_NAMES = ['Aganović', 'Agović', 'Ahmedinović', 'Ahmović', 'Ajdinović', 'Ajdukovic', 'Ajler', 'Ajzin', 'Akerlof', 'Akmanic', 'Akmann', 'Aknazarian', 'Aksamija', 'Aksata', 'Aksdal', 'Akseli', 'Aksharov', 'Aksin', 'Aksiola', 'Aksu'];

const CYPRUS_FIRST_NAMES = ['Andonis', 'Andrias', 'Andrinas', 'Andros', 'Andreas', 'Andreou', 'Andrev', 'Andreyas', 'Andri', 'Andrias', 'Andries', 'Andrini', 'Andrio', 'Andrios', 'Andris', 'Andrisi', 'Andrita', 'Andritsa', 'Andritsis', 'Andritsos'];
const CYPRUS_LAST_NAMES = ['Afroti', 'Agadakos', 'Agalides', 'Aganides', 'Agaramis', 'Agarathos', 'Agariadis', 'Agaridi', 'Agaridis', 'Agaritis', 'Agaritidis', 'Agarpides', 'Agarropulos', 'Agartos', 'Agarusi', 'Agathangelidis', 'Agathangelos', 'Agathas', 'Agathias', 'Agathidis'];

const CZECH_FIRST_NAMES = ['Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš'];
const CZECH_LAST_NAMES = ['Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech', 'Čech'];

const DENMARK_FIRST_NAMES = ['Anders', 'Anda', 'Andé', 'Andeen', 'Andee', 'Ander', 'Anderee', 'Anderer', 'Anderes', 'Anderegg', 'Anderer', 'Anderle', 'Anderson', 'Anderso', 'Anderss', 'Anderssen', 'Andersson', 'Andersen', 'Andersyn', 'Andert'];
const DENMARK_LAST_NAMES = ['Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen', 'Andersen'];

const ESTONIA_FIRST_NAMES = ['Aleksander', 'Aleksei', 'Alexei', 'Aleksandr', 'Alexis', 'Aleksis', 'Alekso', 'Aleksy', 'Aleksei', 'Aleksis', 'Aleksey', 'Aleksiy', 'Aleksei', 'Aleksi', 'Aleksio', 'Aleksis', 'Aleksiy', 'Aleksy', 'Aleksandr', 'Aleksei'];
const ESTONIA_LAST_NAMES = ['Alekseev', 'Alekseyev', 'Aleksejev', 'Aleksejeff', 'Aleksejew', 'Aleksejew', 'Aleksejeff', 'Alekseyeff', 'Alekseyeff', 'Aleksin', 'Aleksinsky', 'Aleksinyuk', 'Aleksinsky', 'Aleksin', 'Aleksinsky', 'Aleksinsky', 'Aleksin', 'Aleksinsky', 'Aleksinsky', 'Aleksinsky'];

const FINLAND_FIRST_NAMES = ['Ari', 'Aaro', 'Aapo', 'Aatos', 'Aaron', 'Aarre', 'Aarre', 'Aarni', 'Aarne', 'Aarno', 'Aaro', 'Aarvo', 'Aasa', 'Aasse', 'Aastaranta', 'Aavala', 'Aavanen', 'Aavanti', 'Aavanto', 'Aavik'];
const FINLAND_LAST_NAMES = ['Aaltonen', 'Aaltola', 'Aaltopää', 'Aaltonen', 'Aaltovirta', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen', 'Aaltonen'];

const GEORGIA_FIRST_NAMES = ['Anzor', 'Anzoria', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor', 'Anzor'];
const GEORGIA_LAST_NAMES = ['Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri', 'Tsiklauri'];

const GREECE_FIRST_NAMES = ['Alexandros', 'Alexios', 'Alexandros', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios', 'Alexios'];
const GREECE_LAST_NAMES = ['Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos', 'Papadopoulos'];

const HUNGARY_FIRST_NAMES = ['Antal', 'Antaios', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall', 'Antall'];
const HUNGARY_LAST_NAMES = ['Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy', 'Nagy'];

const ICELAND_FIRST_NAMES = ['Ari', 'Arnar', 'Arnor', 'Aron', 'Aronsson', 'Arron', 'Arsal', 'Artan', 'Arthor', 'Artie', 'Artur', 'Arturion', 'Arturo', 'Artús', 'Arup', 'Aruuguq', 'Aruuguq', 'Aruuguq', 'Aruuguq', 'Aruuguq'];
const ICELAND_LAST_NAMES = ['Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson', 'Sigurdsson'];

const IRELAND_FIRST_NAMES = ['Aidan', 'Aile', 'Ailín', 'Ailbhe', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín', 'Ailín'];
const IRELAND_LAST_NAMES = ['Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy', 'Murphy'];

const KAZAKHSTAN_FIRST_NAMES = ['Aibek', 'Aibyn', 'Aidar', 'Aidaraliyev', 'Aider', 'Aidemir', 'Aidyn', 'Aidynov', 'Aidyn', 'Aiedarov', 'Aigerim', 'Aigul', 'Aiguzel', 'Aiig', 'Aiiyn', 'Aiizhan', 'Aijanov', 'Aikarina', 'Aikarina', 'Aiken'];
const KAZAKHSTAN_LAST_NAMES = ['Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov', 'Samatov'];

const KOSOVO_FIRST_NAMES = ['Arbnor', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni', 'Arbni'];
const KOSOVO_LAST_NAMES = ['Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj', 'Hoxhaj'];

const LATVIA_FIRST_NAMES = ['Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands', 'Armands'];
const LATVIA_LAST_NAMES = ['Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins', 'Vanins'];

const LIECHTENSTEIN_FIRST_NAMES = ['Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas', 'Andreas'];
const LIECHTENSTEIN_LAST_NAMES = ['Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller', 'Muller'];

const LITHUANIA_FIRST_NAMES = ['Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius', 'Andrius'];
const LITHUANIA_LAST_NAMES = ['Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla', 'Skerla'];

const LUXEMBOURG_FIRST_NAMES = ['Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain'];
const LUXEMBOURG_LAST_NAMES = ['Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli'];

const MALTA_FIRST_NAMES = ['Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred', 'Alfred'];
const MALTA_LAST_NAMES = ['Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana', 'Caruana'];

const MOLDOVA_FIRST_NAMES = ['Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru', 'Alexandru'];
const MOLDOVA_LAST_NAMES = ['Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob', 'Iacob'];

const MONACO_FIRST_NAMES = ['Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert', 'Albert'];
const MONACO_LAST_NAMES = ['Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo', 'Diallo'];

const MONTENEGRO_FIRST_NAMES = ['Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar'];
const MONTENEGRO_LAST_NAMES = ['Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic', 'Vukcevic'];

const NETHERLANDS_FIRST_NAMES = ['Arjan', 'Arjen', 'Arjun', 'Arlen', 'Arles', 'Arlette', 'Arley', 'Arlie', 'Arlien', 'Arliene', 'Arlin', 'Arlind', 'Arline', 'Arlise', 'Arlis', 'Arlise', 'Arlis', 'Arlito', 'Arlive', 'Arlivia'];
const NETHERLANDS_LAST_NAMES = ['De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer', 'De Boer'];

const NORTH_MACEDONIA_FIRST_NAMES = ['Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar'];
const NORTH_MACEDONIA_LAST_NAMES = ['Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski', 'Milevski'];

const NORWAY_FIRST_NAMES = ['Arne', 'Arnar', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne', 'Arne'];
const NORWAY_LAST_NAMES = ['Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen', 'Henriksen'];

const POLAND_FIRST_NAMES = ['Arkadiusz', 'Arkady', 'Arkadio', 'Arkady', 'Arlen', 'Arles', 'Arlington', 'Arlin', 'Arlind', 'Arline', 'Arlinn', 'Arlis', 'Arlos', 'Arloto', 'Arlowdo', 'Arlt', 'Arup', 'Arun', 'Arundel', 'Arundha'];
const POLAND_LAST_NAMES = ['Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski', 'Lewandowski'];

const PORTUGAL_FIRST_NAMES = ['André', 'Andrés', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André', 'André'];
const PORTUGAL_LAST_NAMES = ['Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva', 'Silva'];

const ROMANIA_FIRST_NAMES = ['Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian', 'Adrian'];
const ROMANIA_LAST_NAMES = ['Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu', 'Mutu'];

const RUSSIA_FIRST_NAMES = ['Alexander', 'Aleksandr', 'Aleksei', 'Alexei', 'Aleksey', 'Aleksandr', 'Alexei', 'Aleksei', 'Alexander', 'Aleksei', 'Aleksey', 'Aleksei', 'Aleksandr', 'Aleksei', 'Aleksey', 'Alexei', 'Aleksandr', 'Aleksei', 'Aleksey', 'Aleksandr'];
const RUSSIA_LAST_NAMES = ['Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin', 'Kokorin'];

const SAN_MARINO_FIRST_NAMES = ['Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto', 'Alberto'];
const SAN_MARINO_LAST_NAMES = ['Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini', 'Simoncini'];

const SERBIA_FIRST_NAMES = ['Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar', 'Aleksandar'];
const SERBIA_LAST_NAMES = ['Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic', 'Stojkovic'];

const SLOVAKIA_FIRST_NAMES = ['Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton', 'Anton'];
const SLOVAKIA_LAST_NAMES = ['Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman', 'Seman'];

const SLOVENIA_FIRST_NAMES = ['Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš', 'Aleš'];
const SLOVENIA_LAST_NAMES = ['Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh', 'Čeh'];

const SWEDEN_FIRST_NAMES = ['Anders', 'Ander', 'Anderee', 'Anderer', 'Anderes', 'Anderegg', 'Anderer', 'Anderle', 'Anderson', 'Anderso', 'Anderss', 'Anderssen', 'Andersson', 'Andersen', 'Andersyn', 'Andert', 'Anderton', 'Andersonius', 'Andersville', 'Andervine'];
const SWEDEN_LAST_NAMES = ['Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall', 'Bergvall'];

const SWITZERLAND_FIRST_NAMES = ['Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain', 'Alain'];
const SWITZERLAND_LAST_NAMES = ['Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli', 'Benelli'];

const TURKEY_FIRST_NAMES = ['Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet', 'Ahmet'];
const TURKEY_LAST_NAMES = ['Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim', 'Terim'];

const UKRAINE_FIRST_NAMES = ['Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy', 'Andriy'];
const UKRAINE_LAST_NAMES = ['Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko', 'Shevchenko'];

const VATICAN_CITY_FIRST_NAMES = ['Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo', 'Angelo'];
const VATICAN_CITY_LAST_NAMES = ['Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti', 'Benedetti'];

const POSITION_KEYS = ['GK', 'DEF', 'MID', 'ATT'];
let playerIdCounter = 1;

PLAYER_FIRST_NAMES.push(
    'Wayne', 'Perry', 'Craig', 'Dale', 'Glenn', 'Keith', 'Neil', 'Ross', 'Trevor', 'Warren',
    'Barry', 'Clive', 'Derek', 'Graham', 'Malcolm', 'Nigel', 'Colin', 'Rodney', 'Bernard', 'Douglas',
    'Bruce', 'Carl', 'Dennis', 'Eric', 'Frank', 'Albert', 'Alfred', 'Arnold', 'Austin', 'Axel',
    'Adrian', 'Amos', 'Andy', 'Ashton', 'Avery', 'Beckett', 'Benson', 'Brody', 'Byron', 'Callum',
    'Calvin', 'Cedric', 'Chester', 'Christian', 'Clarence', 'Clifford', 'Clyde', 'Conrad', 'Corey', 'Damian',
    'Damon', 'Darius', 'Darryl', 'Declan', 'Desmond', 'Dexter', 'Donald', 'Duncan', 'Edgar', 'Edmund',
    'Edwin', 'Elliot', 'Elton', 'Emmett', 'Ernest', 'Eugene', 'Fergus', 'Finnegan', 'Floyd', 'Frederick',
    'Gareth', 'Garry', 'Gavin', 'Geoffrey', 'Gerald', 'Gilbert', 'Guy', 'Hamish', 'Harold', 'Hector',
    'Herbert', 'Howard', 'Hugh', 'Ian', 'Irving', 'Ivan', 'Jared', 'Jason', 'Jeffery', 'Jeremy',
    'Jerome', 'Jesse', 'Joel', 'Joey', 'Johnny', 'Jonas', 'Jude', 'Justin', 'Kenneth', 'Kevin'
);

PLAYER_LAST_NAMES.push(
    'Barrett', 'Barton', 'Bates', 'Beck', 'Bell', 'Benson', 'Bird', 'Bishop', 'Blair', 'Booth',
    'Bowen', 'Boyd', 'Bradley', 'Brady', 'Brewer', 'Bridges', 'Brooks', 'Burgess', 'Burns', 'Burton',
    'Bush', 'Cain', 'Caldwell', 'Cannon', 'Carr', 'Carson', 'Case', 'Chambers', 'Chandler', 'Clayton',
    'Cobb', 'Coleman', 'Conway', 'Cooke', 'Cross', 'Curtis', 'Dalton', 'Daniels', 'Davidson', 'Dennis',
    'Dixon', 'Douglas', 'Doyle', 'Drake', 'Duncan', 'Dunn', 'Elliott', 'Erickson', 'Farmer', 'Ferguson',
    'Field', 'Fleming', 'Ford', 'Francis', 'Fuller', 'Garrett', 'George', 'Gibbs', 'Gilbert', 'Gill',
    'Goodwin', 'Graham', 'Griffiths', 'Hamilton', 'Hammond', 'Hardy', 'Harper', 'Hart', 'Hawkins', 'Hayes',
    'Henderson', 'Henry', 'Hicks', 'Holt', 'Hopkins', 'Howard', 'Hunt', 'Jacobs', 'Jarvis', 'Jennings'
);

const PLAYER_NAME_POOLS_BY_COUNTRY = {
    'France': { firstNames: FRENCH_FIRST_NAMES, lastNames: FRENCH_LAST_NAMES },
    'Germany': { firstNames: GERMAN_FIRST_NAMES, lastNames: GERMAN_LAST_NAMES },
    'Spain': { firstNames: SPANISH_FIRST_NAMES, lastNames: SPANISH_LAST_NAMES },
    'Italy': { firstNames: ITALIAN_FIRST_NAMES, lastNames: ITALIAN_LAST_NAMES },
    'USA': { firstNames: USA_FIRST_NAMES, lastNames: USA_LAST_NAMES },
    'Brazil': { firstNames: BRAZIL_FIRST_NAMES, lastNames: BRAZIL_LAST_NAMES },
    'Argentina': { firstNames: ARGENTINA_FIRST_NAMES, lastNames: ARGENTINA_LAST_NAMES },
    'Japan': { firstNames: JAPAN_FIRST_NAMES, lastNames: JAPAN_LAST_NAMES },
    'Australia': { firstNames: AUSTRALIA_FIRST_NAMES, lastNames: AUSTRALIA_LAST_NAMES },
    'South Africa': { firstNames: SOUTH_AFRICA_FIRST_NAMES, lastNames: SOUTH_AFRICA_LAST_NAMES },
    'Mexico': { firstNames: MEXICO_FIRST_NAMES, lastNames: MEXICO_LAST_NAMES },
    'Canada': { firstNames: CANADA_FIRST_NAMES, lastNames: CANADA_LAST_NAMES },
    'South Korea': { firstNames: SOUTH_KOREA_FIRST_NAMES, lastNames: SOUTH_KOREA_LAST_NAMES },
    'China': { firstNames: CHINA_FIRST_NAMES, lastNames: CHINA_LAST_NAMES },
    'India': { firstNames: INDIA_FIRST_NAMES, lastNames: INDIA_LAST_NAMES },
    'Nigeria': { firstNames: NIGERIA_FIRST_NAMES, lastNames: NIGERIA_LAST_NAMES },
    'Egypt': { firstNames: EGYPT_FIRST_NAMES, lastNames: EGYPT_LAST_NAMES },
    'Morocco': { firstNames: MOROCCO_FIRST_NAMES, lastNames: MOROCCO_LAST_NAMES },
    'Ghana': { firstNames: GHANA_FIRST_NAMES, lastNames: GHANA_LAST_NAMES },
    'New Zealand': { firstNames: NEW_ZEALAND_FIRST_NAMES, lastNames: NEW_ZEALAND_LAST_NAMES },
    'Fiji': { firstNames: FIJI_FIRST_NAMES, lastNames: FIJI_LAST_NAMES },
    'Samoa': { firstNames: SAMOA_FIRST_NAMES, lastNames: SAMOA_LAST_NAMES },
    'Papua New Guinea': { firstNames: PAPUA_NEW_GUINEA_FIRST_NAMES, lastNames: PAPUA_NEW_GUINEA_LAST_NAMES },
    'Solomon Islands': { firstNames: SOLOMON_ISLANDS_FIRST_NAMES, lastNames: SOLOMON_ISLANDS_LAST_NAMES },
    'Albania': { firstNames: ALBANIA_FIRST_NAMES, lastNames: ALBANIA_LAST_NAMES },
    'Andorra': { firstNames: ANDORRA_FIRST_NAMES, lastNames: ANDORRA_LAST_NAMES },
    'Armenia': { firstNames: ARMENIA_FIRST_NAMES, lastNames: ARMENIA_LAST_NAMES },
    'Austria': { firstNames: AUSTRIA_FIRST_NAMES, lastNames: AUSTRIA_LAST_NAMES },
    'Azerbaijan': { firstNames: AZERBAIJAN_FIRST_NAMES, lastNames: AZERBAIJAN_LAST_NAMES },
    'Belarus': { firstNames: BELARUS_FIRST_NAMES, lastNames: BELARUS_LAST_NAMES },
    'Belgium': { firstNames: BELGIUM_FIRST_NAMES, lastNames: BELGIUM_LAST_NAMES },
    'Bosnia and Herzegovina': { firstNames: BOSNIA_FIRST_NAMES, lastNames: BOSNIA_LAST_NAMES },
    'Bulgaria': { firstNames: BULGARIA_FIRST_NAMES, lastNames: BULGARIA_LAST_NAMES },
    'Croatia': { firstNames: CROATIA_FIRST_NAMES, lastNames: CROATIA_LAST_NAMES },
    'Cyprus': { firstNames: CYPRUS_FIRST_NAMES, lastNames: CYPRUS_LAST_NAMES },
    'Czech Republic': { firstNames: CZECH_FIRST_NAMES, lastNames: CZECH_LAST_NAMES },
    'Denmark': { firstNames: DENMARK_FIRST_NAMES, lastNames: DENMARK_LAST_NAMES },
    'Estonia': { firstNames: ESTONIA_FIRST_NAMES, lastNames: ESTONIA_LAST_NAMES },
    'Finland': { firstNames: FINLAND_FIRST_NAMES, lastNames: FINLAND_LAST_NAMES },
    'Georgia': { firstNames: GEORGIA_FIRST_NAMES, lastNames: GEORGIA_LAST_NAMES },
    'Greece': { firstNames: GREECE_FIRST_NAMES, lastNames: GREECE_LAST_NAMES },
    'Hungary': { firstNames: HUNGARY_FIRST_NAMES, lastNames: HUNGARY_LAST_NAMES },
    'Iceland': { firstNames: ICELAND_FIRST_NAMES, lastNames: ICELAND_LAST_NAMES },
    'Ireland': { firstNames: IRELAND_FIRST_NAMES, lastNames: IRELAND_LAST_NAMES },
    'Kazakhstan': { firstNames: KAZAKHSTAN_FIRST_NAMES, lastNames: KAZAKHSTAN_LAST_NAMES },
    'Kosovo': { firstNames: KOSOVO_FIRST_NAMES, lastNames: KOSOVO_LAST_NAMES },
    'Latvia': { firstNames: LATVIA_FIRST_NAMES, lastNames: LATVIA_LAST_NAMES },
    'Liechtenstein': { firstNames: LIECHTENSTEIN_FIRST_NAMES, lastNames: LIECHTENSTEIN_LAST_NAMES },
    'Lithuania': { firstNames: LITHUANIA_FIRST_NAMES, lastNames: LITHUANIA_LAST_NAMES },
    'Luxembourg': { firstNames: LUXEMBOURG_FIRST_NAMES, lastNames: LUXEMBOURG_LAST_NAMES },
    'Malta': { firstNames: MALTA_FIRST_NAMES, lastNames: MALTA_LAST_NAMES },
    'Moldova': { firstNames: MOLDOVA_FIRST_NAMES, lastNames: MOLDOVA_LAST_NAMES },
    'Monaco': { firstNames: MONACO_FIRST_NAMES, lastNames: MONACO_LAST_NAMES },
    'Montenegro': { firstNames: MONTENEGRO_FIRST_NAMES, lastNames: MONTENEGRO_LAST_NAMES },
    'Netherlands': { firstNames: NETHERLANDS_FIRST_NAMES, lastNames: NETHERLANDS_LAST_NAMES },
    'North Macedonia': { firstNames: NORTH_MACEDONIA_FIRST_NAMES, lastNames: NORTH_MACEDONIA_LAST_NAMES },
    'Norway': { firstNames: NORWAY_FIRST_NAMES, lastNames: NORWAY_LAST_NAMES },
    'Poland': { firstNames: POLAND_FIRST_NAMES, lastNames: POLAND_LAST_NAMES },
    'Portugal': { firstNames: PORTUGAL_FIRST_NAMES, lastNames: PORTUGAL_LAST_NAMES },
    'Romania': { firstNames: ROMANIA_FIRST_NAMES, lastNames: ROMANIA_LAST_NAMES },
    'Russia': { firstNames: RUSSIA_FIRST_NAMES, lastNames: RUSSIA_LAST_NAMES },
    'San Marino': { firstNames: SAN_MARINO_FIRST_NAMES, lastNames: SAN_MARINO_LAST_NAMES },
    'Serbia': { firstNames: SERBIA_FIRST_NAMES, lastNames: SERBIA_LAST_NAMES },
    'Slovakia': { firstNames: SLOVAKIA_FIRST_NAMES, lastNames: SLOVAKIA_LAST_NAMES },
    'Slovenia': { firstNames: SLOVENIA_FIRST_NAMES, lastNames: SLOVENIA_LAST_NAMES },
    'Sweden': { firstNames: SWEDEN_FIRST_NAMES, lastNames: SWEDEN_LAST_NAMES },
    'Switzerland': { firstNames: SWITZERLAND_FIRST_NAMES, lastNames: SWITZERLAND_LAST_NAMES },
    'Turkey': { firstNames: TURKEY_FIRST_NAMES, lastNames: TURKEY_LAST_NAMES },
    'Ukraine': { firstNames: UKRAINE_FIRST_NAMES, lastNames: UKRAINE_LAST_NAMES },
    'Vatican City': { firstNames: VATICAN_CITY_FIRST_NAMES, lastNames: VATICAN_CITY_LAST_NAMES }
};

const IMPROVED_EUROPE_PLAYER_NAME_POOLS = {
    'England': { firstNames: ['Harry', 'Jack', 'Oliver', 'George', 'Thomas', 'William', 'Charlie', 'James', 'Alfie', 'Mason', 'Lewis', 'Callum'], lastNames: ['Smith', 'Taylor', 'Brown', 'Wilson', 'Johnson', 'Davies', 'Walker', 'Robinson', 'Thompson', 'White', 'Hughes', 'Green'] },
    'Albania': { firstNames: ['Arber', 'Besnik', 'Dritan', 'Erjon', 'Florian', 'Genti', 'Ilir', 'Kreshnik', 'Lorik', 'Mirlind', 'Taulant', 'Valon'], lastNames: ['Hoxha', 'Krasniqi', 'Berisha', 'Shehu', 'Gashi', 'Lika', 'Dervishi', 'Basha', 'Rama', 'Meta', 'Cana', 'Mema'] },
    'Andorra': { firstNames: ['Marc', 'Jordi', 'Joan', 'Pau', 'David', 'Albert', 'Sergi', 'Xavier', 'Toni', 'Roc', 'Ferran', 'Nil'], lastNames: ['Garcia', 'Pujol', 'Riera', 'Martinez', 'Sanchez', 'Fernandez', 'Torres', 'Vila', 'Morell', 'Font', 'Cervos', 'Rubio'] },
    'Armenia': { firstNames: ['Aram', 'Gor', 'Tigran', 'Vahan', 'Narek', 'Hayk', 'Artur', 'Sargis', 'Levon', 'Karen', 'Ruben', 'Mher'], lastNames: ['Grigoryan', 'Hakobyan', 'Petrosyan', 'Sargsyan', 'Harutyunyan', 'Mkrtchyan', 'Hovhannisyan', 'Avetisyan', 'Manukyan', 'Vardanyan', 'Babayan', 'Karapetyan'] },
    'Austria': { firstNames: ['Lukas', 'Matthias', 'Florian', 'David', 'Stefan', 'Dominik', 'Maximilian', 'Philipp', 'Tobias', 'Julian', 'Markus', 'Christoph'], lastNames: ['Gruber', 'Huber', 'Bauer', 'Wagner', 'Mayer', 'Steiner', 'Fischer', 'Weber', 'Schmid', 'Hofer', 'Berger', 'Leitner'] },
    'Azerbaijan': { firstNames: ['Rashad', 'Emin', 'Farid', 'Ilgar', 'Namiq', 'Tural', 'Ramil', 'Kamran', 'Murad', 'Orkhan', 'Samir', 'Vugar'], lastNames: ['Aliyev', 'Mammadov', 'Huseynov', 'Hasanov', 'Karimov', 'Ismayilov', 'Abdullayev', 'Guliyev', 'Rahimov', 'Jafarov', 'Nabiyev', 'Seyidov'] },
    'Belarus': { firstNames: ['Maksim', 'Pavel', 'Dmitry', 'Ilya', 'Kiryl', 'Nikita', 'Roman', 'Sergey', 'Viktar', 'Yury', 'Andrei', 'Uladzimir'], lastNames: ['Ivanov', 'Kozlov', 'Novik', 'Kravchenko', 'Sokolov', 'Moroz', 'Volkov', 'Koval', 'Bondar', 'Sidorov', 'Mikhalik', 'Pavlov'] },
    'Belgium': { firstNames: ['Thibaut', 'Dries', 'Jules', 'Arthur', 'Milan', 'Noah', 'Lars', 'Wout', 'Thomas', 'Lucas', 'Elias', 'Seppe'], lastNames: ['Peeters', 'Janssens', 'Maes', 'Jacobs', 'Mertens', 'Claes', 'Willems', 'Goossens', 'Vermeulen', 'De Smet', 'Van den Berg', 'Lambrechts'] },
    'Bosnia and Herzegovina': { firstNames: ['Adnan', 'Emir', 'Haris', 'Mirza', 'Nermin', 'Tarik', 'Edin', 'Amar', 'Kenan', 'Samir', 'Dino', 'Zlatan'], lastNames: ['Hadzic', 'Kovacevic', 'Begovic', 'Dedic', 'Smajic', 'Jusufovic', 'Civic', 'Dzeko', 'Pjanic', 'Bajramovic', 'Salihovic', 'Krunic'] },
    'Bulgaria': { firstNames: ['Georgi', 'Dimitar', 'Ivan', 'Nikolay', 'Petar', 'Kiril', 'Todor', 'Martin', 'Stanislav', 'Viktor', 'Borislav', 'Radoslav'], lastNames: ['Ivanov', 'Petrov', 'Dimitrov', 'Georgiev', 'Stoyanov', 'Nikolov', 'Kostov', 'Iliev', 'Todorov', 'Hristov', 'Angelov', 'Popov'] },
    'Croatia': { firstNames: ['Luka', 'Ivan', 'Mateo', 'Marko', 'Domagoj', 'Ante', 'Josip', 'Nikola', 'Duje', 'Bruno', 'Stipe', 'Marin'], lastNames: ['Horvat', 'Kovacic', 'Modric', 'Perisic', 'Brozovic', 'Livakovic', 'Petkovic', 'Kramaric', 'Juranovic', 'Barisic', 'Vlasic', 'Orsic'] },
    'Cyprus': { firstNames: ['Andreas', 'Giorgos', 'Michalis', 'Kostas', 'Nikos', 'Marios', 'Christos', 'Petros', 'Sotiris', 'Panagiotis', 'Stelios', 'Charis'], lastNames: ['Georgiou', 'Andreou', 'Christou', 'Ioannou', 'Constantinou', 'Michael', 'Nikolaou', 'Charalambous', 'Demetriou', 'Kyriakou', 'Sotiriou', 'Eliades'] },
    'Czech Republic': { firstNames: ['Tomas', 'Jan', 'Petr', 'Lukas', 'Martin', 'Jakub', 'Matej', 'Vaclav', 'Adam', 'David', 'Ondrej', 'Radek'], lastNames: ['Novak', 'Svoboda', 'Dvorak', 'Prochazka', 'Kucera', 'Cerny', 'Vesely', 'Horak', 'Nemec', 'Marek', 'Kadlec', 'Kral'] },
    'Denmark': { firstNames: ['Mikkel', 'Christian', 'Andreas', 'Jonas', 'Magnus', 'Rasmus', 'Frederik', 'Kasper', 'Mathias', 'Emil', 'Simon', 'Victor'], lastNames: ['Nielsen', 'Jensen', 'Hansen', 'Pedersen', 'Andersen', 'Christensen', 'Larsen', 'Sorensen', 'Rasmussen', 'Madsen', 'Olsen', 'Poulsen'] },
    'Estonia': { firstNames: ['Markus', 'Karl', 'Rasmus', 'Henri', 'Martin', 'Kristjan', 'Sander', 'Taavi', 'Marten', 'Kaspar', 'Rauno', 'Siim'], lastNames: ['Tamm', 'Saar', 'Sepp', 'Kask', 'Kukk', 'Rebane', 'Mets', 'Koppel', 'Ilves', 'Pohlak', 'Luts', 'Vaher'] },
    'Finland': { firstNames: ['Elias', 'Mikael', 'Juhani', 'Onni', 'Eero', 'Aleksi', 'Teemu', 'Rasmus', 'Joel', 'Lauri', 'Mikko', 'Jere'], lastNames: ['Korhonen', 'Virtanen', 'Makinen', 'Nieminen', 'Hamalainen', 'Laine', 'Heikkinen', 'Koskinen', 'Lehtonen', 'Saarinen', 'Salminen', 'Rantanen'] },
    'France': { firstNames: ['Kylian', 'Antoine', 'Lucas', 'Theo', 'Hugo', 'Raphael', 'Olivier', 'Adrien', 'Jules', 'Kingsley', 'Eduardo', 'Warren'], lastNames: ['Martin', 'Bernard', 'Dubois', 'Moreau', 'Giroud', 'Griezmann', 'Mbappe', 'Camavinga', 'Tchouameni', 'Saliba', 'Kounde', 'Lefevre'] },
    'Georgia': { firstNames: ['Giorgi', 'Zurab', 'Luka', 'Nika', 'Levan', 'Saba', 'Davit', 'Irakli', 'Beka', 'Tornike', 'Otar', 'Guram'], lastNames: ['Kvaratskhelia', 'Kashia', 'Mikautadze', 'Dvali', 'Lobzhanidze', 'Aburjania', 'Chakvetadze', 'Kvekveskiri', 'Mamardashvili', 'Shengelia', 'Beridze', 'Tabidze'] },
    'Germany': { firstNames: ['Florian', 'Jamal', 'Kai', 'Leroy', 'Joshua', 'Leon', 'Nico', 'Jonas', 'Julian', 'Serge', 'Timo', 'Robin'], lastNames: ['Muller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Wagner', 'Becker', 'Hofmann', 'Brandt', 'Musiala', 'Kimmich', 'Fullkrug'] },
    'Greece': { firstNames: ['Giorgos', 'Kostas', 'Dimitris', 'Nikos', 'Vangelis', 'Petros', 'Tasos', 'Manolis', 'Sotiris', 'Christos', 'Pavlos', 'Stavros'], lastNames: ['Papadopoulos', 'Nikolaou', 'Georgiou', 'Dimitriou', 'Ioannidis', 'Tsimikas', 'Bakasetas', 'Mavropanos', 'Giannoulis', 'Fortounis', 'Masouras', 'Kourbelis'] },
    'Hungary': { firstNames: ['Dominik', 'Balazs', 'Bence', 'Adam', 'Laszlo', 'Gabor', 'Peter', 'Zsolt', 'Mihaly', 'Mark', 'Roland', 'Kristof'], lastNames: ['Nagy', 'Kovacs', 'Toth', 'Szabo', 'Horvath', 'Varga', 'Kiss', 'Molnar', 'Szalai', 'Szoboszlai', 'Dibusz', 'Orban'] },
    'Iceland': { firstNames: ['Aron', 'Birkir', 'Gylfi', 'Kolbeinn', 'Hordur', 'Alfred', 'Johann', 'Runar', 'Sverrir', 'Ari', 'Jon', 'Isak'], lastNames: ['Sigurdsson', 'Gudmundsson', 'Bjarnason', 'Magnusson', 'Gunnarsson', 'Finnbogason', 'Traustason', 'Palsson', 'Kristinsson', 'Einarsson', 'Helgason', 'Thorarinsson'] },
    'Ireland': { firstNames: ['Sean', 'Conor', 'Liam', 'Cian', 'Darragh', 'Evan', 'Finn', 'Jack', 'Ronan', 'Shane', 'Troy', 'Callum'], lastNames: ['Murphy', 'Kelly', 'Byrne', 'Walsh', 'Ryan', 'OBrien', 'ONeill', 'Doyle', 'McCarthy', 'Connolly', 'Coleman', 'Browne'] },
    'Italy': { firstNames: ['Federico', 'Lorenzo', 'Nicolo', 'Giacomo', 'Matteo', 'Alessandro', 'Davide', 'Manuel', 'Gianluca', 'Leonardo', 'Andrea', 'Sandro'], lastNames: ['Rossi', 'Bianchi', 'Romano', 'Ricci', 'Mancini', 'Chiesa', 'Barella', 'Donnarumma', 'Bastoni', 'Locatelli', 'Dimarco', 'Frattesi'] },
    'Kazakhstan': { firstNames: ['Abat', 'Aslan', 'Bauyrzhan', 'Dauren', 'Elkhan', 'Islam', 'Maksat', 'Nuraly', 'Serik', 'Timur', 'Yerkebulan', 'Zhanat'], lastNames: ['Aimbetov', 'Kuat', 'Maliy', 'Tagybergen', 'Zainutdinov', 'Nurgaliyev', 'Suyumbayev', 'Bystrov', 'Muzhikov', 'Kenzhebek', 'Darabayev', 'Shomko'] },
    'Kosovo': { firstNames: ['Arber', 'Besar', 'Edon', 'Florent', 'Ilir', 'Leart', 'Mergim', 'Milot', 'Vedat', 'Zymer', 'Fidan', 'Valon'], lastNames: ['Rrahmani', 'Muriqi', 'Berisha', 'Vojvoda', 'Zhegrova', 'Kryeziu', 'Bytyqi', 'Rashica', 'Halimi', 'Hoxha', 'Kastrati', 'Shala'] },
    'Latvia': { firstNames: ['Arturs', 'Roberts', 'Janis', 'Raimonds', 'Davis', 'Kaspars', 'Edgars', 'Martins', 'Valerijs', 'Ritvars', 'Kristers', 'Vladislavs'], lastNames: ['Ozols', 'Berzins', 'Kalnins', 'Petersons', 'Liepa', 'Ivanovs', 'Ciganiks', 'Gutkovskis', 'Uldrikis', 'Tobers', 'Dubra', 'Savalnieks'] },
    'Liechtenstein': { firstNames: ['Noah', 'Luca', 'Simon', 'Fabian', 'Sandro', 'Philipp', 'Marco', 'Nicolas', 'Yanik', 'Livio', 'Robin', 'Andrin'], lastNames: ['Buchel', 'Wolfinger', 'Frick', 'Hasler', 'Goppel', 'Sele', 'Meier', 'Kieber', 'Kindle', 'Marxer', 'Ospelt', 'Schlegel'] },
    'Lithuania': { firstNames: ['Mantas', 'Tomas', 'Domantas', 'Arvydas', 'Edgaras', 'Fedoras', 'Justas', 'Karolis', 'Lukas', 'Modestas', 'Paulius', 'Vytautas'], lastNames: ['Kazlauskas', 'Jankauskas', 'Stankevicius', 'Novikovas', 'Cernych', 'Sirvys', 'Lasickas', 'Girdvainis', 'Mikoliunas', 'Paulauskas', 'Slivka', 'Vaitkunas'] },
    'Luxembourg': { firstNames: ['Laurent', 'Danel', 'Gerson', 'Vincent', 'Mathias', 'Enes', 'Leandro', 'Christopher', 'Florian', 'Sebastien', 'Mica', 'Tim'], lastNames: ['Jans', 'Sinani', 'Bohnert', 'Thill', 'Martins', 'Carlson', 'Pinto', 'Barreiro', 'Selimovic', 'Mahmutovic', 'Moris', 'Chanot'] },
    'Malta': { firstNames: ['Luke', 'Matthew', 'Jurgen', 'Joseph', 'Jean', 'Steve', 'Ryan', 'Jake', 'Cain', 'Bjorn', 'Dunstan', 'Kurt'], lastNames: ['Borg', 'Camilleri', 'Vella', 'Zammit', 'Mifsud', 'Azzopardi', 'Grech', 'Fenech', 'Mbong', 'Teuma', 'Pisani', 'Kristensen'] },
    'Moldova': { firstNames: ['Ion', 'Dumitru', 'Vadim', 'Victor', 'Artur', 'Sergiu', 'Mihail', 'Nichita', 'Oleg', 'Radu', 'Alexandru', 'Catalin'], lastNames: ['Rata', 'Posmac', 'Cojocaru', 'Ionita', 'Caimacov', 'Damascan', 'Reabciuk', 'Armas', 'Motpan', 'Revenco', 'Platica', 'Nicolaescu'] },
    'Monaco': { firstNames: ['Lucas', 'Enzo', 'Hugo', 'Theo', 'Maxime', 'Jules', 'Antoine', 'Romain', 'Nicolas', 'Raphael', 'Leo', 'Bastien'], lastNames: ['Rossi', 'Grimaldi', 'Marquet', 'Fabrice', 'Leroux', 'Fontana', 'Ricci', 'Costa', 'Blanc', 'Moretti', 'Boyer', 'Laurent'] },
    'Montenegro': { firstNames: ['Stefan', 'Marko', 'Nikola', 'Milos', 'Vladimir', 'Dusan', 'Luka', 'Petar', 'Aleksandar', 'Igor', 'Andrija', 'Uros'], lastNames: ['Jovetic', 'Savic', 'Marusic', 'Vukcevic', 'Radunovic', 'Jankovic', 'Beciraj', 'Mijatovic', 'Scekic', 'Vesovic', 'Tomasovic', 'Ivanovic'] },
    'Netherlands': { firstNames: ['Daan', 'Sem', 'Luuk', 'Jesse', 'Mats', 'Noah', 'Teun', 'Sven', 'Thijs', 'Jorrit', 'Xavi', 'Quinten'], lastNames: ['De Jong', 'Van Dijk', 'Bakker', 'Visser', 'Smit', 'Meijer', 'De Vries', 'Van den Berg', 'Koopmeiners', 'Simons', 'Reijnders', 'Gakpo'] },
    'North Macedonia': { firstNames: ['Stefan', 'Enis', 'Ezgjan', 'Aleksandar', 'Darko', 'Boban', 'Ilija', 'Jovan', 'Kristijan', 'Milan', 'Tihomir', 'Visar'], lastNames: ['Bardhi', 'Elmas', 'Alioski', 'Ristovski', 'Velkovski', 'Ademi', 'Trajkovski', 'Miovski', 'Musliu', 'Dimitrievski', 'Atanasov', 'Churlinov'] },
    'Norway': { firstNames: ['Erling', 'Martin', 'Sander', 'Kristoffer', 'Morten', 'Julian', 'Fredrik', 'Ola', 'Patrick', 'Leo', 'Marcus', 'Andreas'], lastNames: ['Haaland', 'Odegaard', 'Berge', 'Ajer', 'Solbakken', 'Ryerson', 'Nyland', 'Normann', 'Sorloth', 'Thorsby', 'Pedersen', 'Berg'] },
    'Poland': { firstNames: ['Robert', 'Piotr', 'Jakub', 'Kamil', 'Bartosz', 'Mateusz', 'Pawel', 'Jan', 'Karol', 'Michal', 'Sebastian', 'Przemyslaw'], lastNames: ['Lewandowski', 'Zielinski', 'Szczesny', 'Kiwior', 'Cash', 'Glik', 'Milik', 'Zalewski', 'Bednarek', 'Moder', 'Szymanski', 'Frankowski'] },
    'Portugal': { firstNames: ['Cristiano', 'Bruno', 'Bernardo', 'Joao', 'Diogo', 'Rafael', 'Goncalo', 'Ruben', 'Nuno', 'Pedro', 'Vitinha', 'Andre'], lastNames: ['Silva', 'Santos', 'Fernandes', 'Pereira', 'Costa', 'Carvalho', 'Dias', 'Cancelo', 'Leao', 'Ramos', 'Mendes', 'Neves'] },
    'Romania': { firstNames: ['Denis', 'Florin', 'Nicolae', 'Ianis', 'Razvan', 'Alexandru', 'Andrei', 'Valentin', 'Darius', 'Marius', 'George', 'Cristian'], lastNames: ['Marin', 'Dragusin', 'Hagi', 'Stanciu', 'Coman', 'Man', 'Mihaila', 'Ratiu', 'Burca', 'Nita', 'Alibec', 'Olaru'] },
    'Russia': { firstNames: ['Aleksandr', 'Daniil', 'Fedor', 'Roman', 'Anton', 'Artem', 'Dmitri', 'Igor', 'Kirill', 'Maksim', 'Nikita', 'Sergei'], lastNames: ['Golovin', 'Miranchuk', 'Dzyuba', 'Safonov', 'Kuzyaev', 'Barinov', 'Zobnin', 'Diveev', 'Karavaev', 'Mostovoy', 'Smolov', 'Cheryshev'] },
    'San Marino': { firstNames: ['Matteo', 'Luca', 'Filippo', 'Nicola', 'Andrea', 'Marco', 'Fabio', 'Enrico', 'Giacomo', 'Davide', 'Simone', 'Alessio'], lastNames: ['Battistini', 'Benedettini', 'Cevoli', 'Golinucci', 'Vitaioli', 'Mularoni', 'DAddario', 'Fabbri', 'Berardi', 'Rinaldi', 'Conti', 'Rossi'] },
    'Serbia': { firstNames: ['Dusan', 'Luka', 'Sergej', 'Aleksandar', 'Filip', 'Nemanja', 'Nikola', 'Marko', 'Andrija', 'Strahinja', 'Sasa', 'Uros'], lastNames: ['Vlahovic', 'Mitrovic', 'Milinkovic', 'Tadic', 'Jovic', 'Gudelj', 'Kostic', 'Pavlovic', 'Milenkovic', 'Rajkovic', 'Maksimovic', 'Lukic'] },
    'Slovakia': { firstNames: ['Milan', 'Stanislav', 'Lukas', 'Tomas', 'Juraj', 'Robert', 'Ondrej', 'David', 'Patrik', 'Denis', 'Adam', 'Martin'], lastNames: ['Skriniar', 'Dubravka', 'Lobotka', 'Hancko', 'Duda', 'Suslov', 'Haraslin', 'Bozenik', 'Kucka', 'Gyomber', 'Pekarik', 'Mak'] },
    'Slovenia': { firstNames: ['Jan', 'Benjamin', 'Andraz', 'Miha', 'Josip', 'Petar', 'Jaka', 'Zan', 'Tim', 'Sandi', 'Domen', 'Nejc'], lastNames: ['Oblak', 'Sesko', 'Sporar', 'Bijol', 'Verbic', 'Zajc', 'Stojanovic', 'Balkovec', 'Karnicnik', 'Lovric', 'Mlakar', 'Drkusic'] },
    'Sweden': { firstNames: ['Alexander', 'Dejan', 'Emil', 'Viktor', 'Robin', 'Ludwig', 'Mattias', 'Jesper', 'Isak', 'Hugo', 'Filip', 'Gustav'], lastNames: ['Isak', 'Kulusevski', 'Forsberg', 'Lindelof', 'Claesson', 'Augustinsson', 'Quaison', 'Svanberg', 'Elanga', 'Gyokeres', 'Olsson', 'Larsson'] },
    'Switzerland': { firstNames: ['Granit', 'Xherdan', 'Manuel', 'Remo', 'Breel', 'Ruben', 'Denis', 'Noah', 'Silvan', 'Fabian', 'Nico', 'Gregor'], lastNames: ['Xhaka', 'Shaqiri', 'Akanji', 'Freuler', 'Embolo', 'Vargas', 'Zakaria', 'Okafor', 'Widmer', 'Schar', 'Sommer', 'Rodriguez'] },
    'Turkey': { firstNames: ['Hakan', 'Cengiz', 'Arda', 'Kerem', 'Orkun', 'Yusuf', 'Merih', 'Kaan', 'Baris', 'Ugurcan', 'Enes', 'Irfan'], lastNames: ['Calhanoglu', 'Under', 'Guler', 'Akturkoglu', 'Kokcu', 'Yazici', 'Demiral', 'Ayhan', 'Yilmaz', 'Cakir', 'Unal', 'Kahveci'] },
    'Ukraine': { firstNames: ['Andriy', 'Oleksandr', 'Mykola', 'Viktor', 'Taras', 'Roman', 'Artem', 'Ruslan', 'Yukhym', 'Vitaliy', 'Heorhiy', 'Bohdan'], lastNames: ['Shevchenko', 'Zinchenko', 'Mudryk', 'Dovbyk', 'Tsygankov', 'Malinovskyi', 'Stepanenko', 'Matviyenko', 'Sudakov', 'Trubin', 'Yarmolenko', 'Mykolenko'] },
    'Vatican City': { firstNames: ['Angelo', 'Pietro', 'Luca', 'Matteo', 'Giovanni', 'Marco', 'Paolo', 'Francesco', 'Davide', 'Simone', 'Tommaso', 'Andrea'], lastNames: ['Benedetti', 'Rossi', 'Conti', 'Ricci', 'Moretti', 'Ferrari', 'Romano', 'Mariani', 'Gentili', 'De Luca', 'Santoro', 'Fontana'] }
};

function getPlayerNamePool(countryName = '') {
    return IMPROVED_EUROPE_PLAYER_NAME_POOLS[countryName] || PLAYER_NAME_POOLS_BY_COUNTRY[countryName] || {
        firstNames: PLAYER_FIRST_NAMES,
        lastNames: PLAYER_LAST_NAMES
    };
}


function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPositionPool() {
    return ['GK', 'DEF', 'DEF', 'DEF', 'MID', 'MID', 'MID', 'ATT', 'ATT', 'ATT'];
}

function getRatingRangeByLevel(level) {
    if (level === 1) return [65, 90];
    if (level === 2) return [45, 75];
    if (level === 3) return [25, 55];
    return [10, 35];
}

function calculateMarketValue(age, rating) {
    const ageFactor = Math.max(0.6, Math.min(1.0, (35 - age) / 30 + 0.4));
    const ratingFactor = Math.pow(Math.max(1, rating), 2.0);
    const value = 10000 + ratingFactor * 45 * ageFactor;
    return Math.round(value);
}

function calculateInitialCashBalance(players, level = 1) {
    const totalPlayerValue = (players || []).reduce((sum, player) => sum + (player.marketValue || 0), 0);
    const averagePlayerValue = totalPlayerValue / Math.max(1, (players || []).length);
    const buyingPower = averagePlayerValue * 4;
    const levelSafetyCash = 50000 + (level - 1) * 20000;
    return Math.round(buyingPower + levelSafetyCash);
}

function createPlayer(level, position, ratingOverride = null, ageOverride = null, countryName = '') {
    const [min, max] = getRatingRangeByLevel(level);
    let rating = ratingOverride ?? randomInRange(min, max);

    if (Math.random() < 0.05) {
        rating = Math.min(100, rating + randomInRange(1, 10));
    }

    const age = ageOverride ?? randomInRange(16, 30);
    const { firstNames, lastNames } = getPlayerNamePool(countryName);

    return {
        id: `p-${playerIdCounter++}`,
        name: `${firstNames[randomInRange(0, firstNames.length - 1)]} ${lastNames[randomInRange(0, lastNames.length - 1)]}`,
        position,
        age,
        rating,
        role: 'bench',
        playChance: 10,
        countryName,
        seasonMatchRatings: [],
        seasonGoals: 0,
        seasonAssists: 0,
        marketValue: calculateMarketValue(age, rating),
        history: []
    };
}

function pickTopByPosition(players, position, amount) {
    return players
        .filter(p => p.position === position)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, amount);
}

function calculateTeamRating(players) {
    const starters = players.filter(p => p.role === 'starter');
    if (starters.length === 0) return 0;
    const total = starters.reduce((sum, p) => sum + p.rating, 0);
    return Number((total / starters.length).toFixed(1));
}

function buildSquadForLevel(level, countryName = '') {
    const squadSize = randomInRange(18, 30);
    const players = [];

    players.push(createPlayer(level, 'GK', null, null, countryName));
    for (let i = 0; i < 3; i++) players.push(createPlayer(level, 'DEF', null, null, countryName));
    for (let i = 0; i < 3; i++) players.push(createPlayer(level, 'MID', null, null, countryName));
    for (let i = 0; i < 3; i++) players.push(createPlayer(level, 'ATT', null, null, countryName));

    const pool = getPositionPool();
    while (players.length < squadSize) {
        players.push(createPlayer(level, pool[randomInRange(0, pool.length - 1)], null, null, countryName));
    }

    const starters = [
        ...pickTopByPosition(players, 'GK', 1),
        ...pickTopByPosition(players, 'DEF', 3),
        ...pickTopByPosition(players, 'MID', 3),
        ...pickTopByPosition(players, 'ATT', 3)
    ];

    if (starters.length < 11) {
        const extra = [...players]
            .filter(p => !starters.includes(p))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 11 - starters.length);
        starters.push(...extra);
    }

    starters.forEach(player => {
        player.role = 'starter';
        player.playChance = 70;
    });

    POSITION_KEYS.forEach(position => {
        const reserve = players
            .filter(p => p.position === position && p.role !== 'starter')
            .sort((a, b) => b.rating - a.rating);

        if (reserve.length === 0) return;

        const hasBenchForPosition = reserve.length > 1;
        reserve[0].role = 'upcoming';
        reserve[0].playChance = hasBenchForPosition ? 20 : 30;

        reserve.slice(1).forEach(player => {
            player.role = 'bench';
            player.playChance = 10;
        });
    });

    return {
        players,
        teamRating: calculateTeamRating(players)
    };
}

function createReplacementPlayer(level, position, previousRating, countryName = '') {
    return createPlayer(level, position, Math.max(1, previousRating - 10), 16, countryName);
}

function attachSquadToTeam(team, level) {
    let players = team.players;
    let teamRating = team.teamRating;
    let cashBalance = team.cashBalance;

    if (typeof cashBalance !== 'number' && typeof team.netWorth === 'number') {
        cashBalance = team.netWorth;
    }

    if (!players || typeof teamRating !== 'number') {
        const squad = buildSquadForLevel(level, team.countryName);
        players = squad.players;
        teamRating = squad.teamRating;
    }

    if (typeof cashBalance !== 'number') {
        cashBalance = calculateInitialCashBalance(players, level);
    }

    players = players.map(player => ({
        ...player,
        careerHistory: player.careerHistory || [{ season: currentSeasonYear, teamId: team.id, teamName: team.name }],
        transferHistory: player.transferHistory || []
    }));

    return {
        ...team,
        players,
        teamRating,
        cashBalance
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { buildSquadForLevel, attachSquadToTeam, calculateMarketValue, createReplacementPlayer };
}

if (typeof window !== 'undefined') {
    window.buildSquadForLevel = buildSquadForLevel;
    window.attachSquadToTeam = attachSquadToTeam;
    window.calculateMarketValue = calculateMarketValue;
    window.createReplacementPlayer = createReplacementPlayer;
}
