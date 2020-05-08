// Ace Combat
const readlineSync = require('readline-sync');
// Have selection of aircraft

// Enemy Aircraft
const enemyAircraft = [
  'Сухой Су-35,' /* health: 10 HP,role: Multi-Role,range: 2,796 mi,maxSpeed: 1,726 MPH" */,
  'Сухой Су-30,' /* health: "10 HP",role: "Multi-Role",range: "1,864 mi",maxSpeed: "1,317 MPH" */,
  'Туполев Ту-95,' /* health: "10 HP",role: "Multi-Role",range: "888 mi",maxSpeed: "1,491 MPH" */,
  'Сухой Су-34,' /* health: "10 HP",role: "Multi-Role",range: "2,485 mi",maxSpeed: "1,367 MPH" */,
];

// Friendly Aircraft
const friendlyAircraft = [
  'F-16 Fighting Falcon,' /*  health: 10 HP, role: Multi-Role, range: 2,662 mi, maxSpeed: 1,500 MPH", */,
  'F-15 Eagle,' /* health: 10 HP, role: Multi-Role, range: 2,992 mi, maxSpeed: 1,875 MPH, */,
  'F-14 Tomcat,' /* health: 10 HP, role: Multi-Role, range: 1,841 mi, maxSpeed: 1,1544 MPH */,
  'Saab JAS 39 Gripen,' /* health: 10 HP, role: Multi-Role, range: 2,019 mi, maxSpeed: 1,1534 MPH */,
];

// Player Health
const playerHealth = 10;

// Player Health Drop
function takeDamage() {
  playerHealth - 2;
}
// Combat Loop
let inCombat = true;

// GameOver
function gameOver() {
  if (playerHealth <= 0) {
    console.log(`********************************\n"Success is not final, failure is not fatal: it is the courage to continue that counts."
    — Winston Churchill\n********************************`);
  } else {
    takeDamage();
  }
}

// Welcome Pilot
console.log('********************************');
console.log(
  'INITIATING SYSTEM...\nLOADING DATABASE...\nGETTING CREDENTIALS...\n1.02.123.123 LOADED...\nSYSTEMBOOT...'
);

console.log('********************************');
readlineSync.keyIn('Press any key to continue...');
console.clear();

console.log('********************************');
let pilotName = readlineSync.question(
  'What is your name pilot?\n********************************\n'
);
console.clear();
console.log(
  `********************************\nWelcome to the USS Abraham Lincoln ${pilotName}!\nSELECT YOUR AIRCRAFT!`
);

// User selects aircraft
let index = readlineSync.keyInSelect(
  friendlyAircraft,
  '********************************\n'
);

console.log(`Ok, ${friendlyAircraft[index]} A exellent choice!`);
readlineSync.keyIn('Press any key to continue...');
console.clear();

// Scenario
console.log(
  `********************************\nAlright ${pilotName}, My name is Mirage lets get you prepped for some training on the ${friendlyAircraft[index]}\nWait whats that sound?\n********************************`
);
readlineSync.keyIn('Press any key to continue...');
console.clear();

console.log(
  '********************************\nALARM SYSTEM:\n...WARNING...\n...WARNING...\n...WARNING...\n...WARNING...\nENEMY AIRCRAFT DETECTED!!!\n********************************'
);
readlineSync.keyIn('Press any key to continue...');
console.clear();

console.log(
  "********************************\nINTERCOM:\nWARNING BOMBERS WITH ESCORTS DETECTED ABOVE! ALPHA AND HOTEL BASES HAVE BEEN HIT.\nALL AVAILABLE PILOTS SCRAMBLE\nTHIS IS NOT A DRILL,\nWE REPEAT THIS IS NOT A DRILL!\nMirage: Seems we need to skip the pleasantries and scramble!\nDon't worry you have Blake, Messer, and myself. Get suited up and meet at the hangar!\n********************************"
);
readlineSync.keyIn('Press any key to continue...');
console.clear();
// Player readys for take off
console.log(
  `********************************\nYou suit up and prepare for anything.\nYou run to the hangar and find your own ${friendlyAircraft[index]}.\nMechanic: It's ready to go! Hurry and prep for takeoff!\nYou hop in and start system checks and prep starting the engine.\n********************************\n`
);
readlineSync.keyIn('Press any key to start the system check...');
console.clear();

console.log(
  '********************************\nOPERATING SYSTEM: ONLINE\nCONTROL SURFACES: ONLINE\nCOMMUNICATIONS: ONLINE\nENGINE: ONLINE\nWEAPONS: ONLINE\n********************************\n'
);
readlineSync.keyIn(
  'Press any key to take off and rendezvous with your squadron...'
);
console.clear();
// Define scenario/island/map
// display small island/map details
// Player enters map
// display mission objective
console.log(
  "********************************\nColonel Ernest Johnson : We don't know how many there are.\nMattel and Phenix squadron are already taking losses.\nMirage get your squadron and back up Mattel and Phenix!\nDEFEND THIS CARRRIER AT ALL COSTS!\n********************************\n"
);
console.log(
  `********************************\nMirage: Copy that Colenel!\nAlright ${pilotName} on me!\nSQUADRON! FULL AFTERBURNER!\n********************************\n`
);
readlineSync.keyIn('Press any key to ENGAGE FULL AFTERBURNER!');
console.clear();

// Start of combat
console.log('                     __|__');
console.log('            __|__ *---o0o---*');
console.log('   __|__ *---o0o---*');
console.log('*---o0o---*');
console.log(
  `********************************\nYOUR SQUADRON ARRIVES AT THE DESTINATION\nIt's a mess, Missiles and cannon fire are flying everywhere and planes are falling out of the sky.\nALARM: WARNING MISSLE LOCK\nMirage: ${pilotName} YOU GOT A BOGEY! EVADE!\n`
);

inCombat = true;
while (inCombat) {
  console.log('********************************');
  console.log('SELECT MANUVER');
  let options = ['ROLL RIGHT', 'ROLL LEFT', 'LOOP'];
  let userInput = readlineSync.keyInSelect(
    options,
    'CHOOSE A EVASIVE MANUVER!',
    console.log('********************************\n')
  );
  console.clear();
  switch (userInput) {
    case 0:
      console.log(
        `********************************\nYOU PERFORM A RIGHT ROLL.\nBULLETS FLY PAST THE COCKPIT\nMirage : HE'S GAINING ON YOU ${pilotName} EVADE! TRY SOMETHING ELSE!\n********************************\n`
      );
      break;
    case 1:
      console.log(
        `********************************\nYOU PERFORM A LEFT ROLL.\nALARM:MISSLE WARNING,MISSLE WARNING,MISSLE WARNING\nMirage : MISSLE AIRBORN ${pilotName} EVADE! TRY SOMETHING ELSE!\n********************************\n`
      );
      break;
    case 2:
      inCombat = false;
      console.log(
        `********************************\nYOU PERFORM A PERFECT LOOP. THE ENEMY ${enemyAircraft[0]} FLYS PAST YOU AND ARE NOW BEHIND IT!\nMirage : ALRIGHT! NOW STAY ON HIM AND FIRE AT WILL!\n********************************\n`
      );
      break;
    default:
      console.clear();
      console.log('SOMETHING BEEPS');
  }
}
console.log(
  `********************************\nTHE G FORCES RATTLE YOUR BRAIN BUT YOU MANAGE TO PULL IT OFF\nTHE ${enemyAircraft[0]} NOTICES YOU ARE NOW BEHIND HIM AND BEGINS EVASIVE MANUVERS\nMirage : KEEP ON HIM!\n********************************\n`
);

inCombat = true;
while (inCombat) {
  console.log('********************************');
  console.log('SELECT WEAPONS');
  options = ['FIRE VULCAN CANNON', 'FIRE MISSILE', 'STAY ON HIS TAIL'];
  userInput = readlineSync.keyInSelect(options, 'CHOOSE WEAPON SOLUTION!');
  console.log('********************************\n');
  console.clear();
  switch (userInput) {
    case 0:
      console.log(
        `********************************\nYOU YOU FIRE YOUR GUNS BUT THE ENEMY EVADES\nYOU ARE STILL BEHIND HIM\nTRY SOMETHING ELSE!\n********************************\n`
      );
      break;
    case 1:
      gameOver = false;
      console.log(
        `********************************\nYOU HAVE MISSLE LOCK\nFOX ONE!\nTHE MISSILE FLIES OUT AND HITS THE ${enemyAircraft[0]} SHREDDING IT'S WING RIGHT OFF.\nSPASH ONE!\n********************************\n`
      );
      break;
    case 2:
      console.log(
        `********************************\nYOU KEEP ON HIM AND MATCH EVERY SINGLE MANUVER HE THROWS AT YOU.\nMirage : YOU ARE STILL ON HIS TAIL. LIGHT HIM UP!\n********************************\n`
      );
      break;
    default:
      console.clear();
      console.log('SOMETHING BEEPS');
  }
}
console.log(
  `********************************\nBlake : THE ROOKIE LEARNS QUICK...\nMirage : CUT THE CHATTER. KEEP YOU EYES OPEN.\n********************************\n`
);
console.log(
  `********************************\nColonel Ernest Johnson : BOMBERS SPOTTED HEADING 192, MIRAGE CONFIRM\nMirage : CONFIRMED\nColonel Ernest Johnson : ENGAGE, WEAPONS FREE\nMirage : YOU HEARD HIM! MOVE!\n********************************\n`
);
readlineSync.keyIn('Press any key to continue...');
console.clear();

console.log(
  `********************************\nMirage : SQUAD PICK A TARGET AND TAKE IT OUT!\nA SQUADRON OF ${enemyAircraft[2]} APPEAR OUT OF THE CLOUDS PREPAIRING A BOMBING RUN.\nMirage : THERE ARE ONLY FOUR LEFT. DON'T LET THEM GET CLOSE TO THE CARRIER!\n********************************\n`
);
console.log(
  `********************************\nYOU START TO LINE UP ON THE TARGETS WHEN OUT OF THE BLUE A GROUP OF ${enemyAircraft[3]}'S BUZZ EVERYONE AND ENGAGE YOUR WINGMAN\nMirage : ${pilotName} DON'T WORRY ABOUT US TAKE OUT THOSE BOMBERS BEFORE IT'S TOO LATE!\n********************************\n`
);

gameOver = true;
while (gameOver) {
  console.log('********************************');
  console.log('SELECT WEAPONS');
  options = ['FIRE VULCAN CANNON', 'FIRE 4AAM'];
  userInput = readlineSync.keyInSelect(options, 'CHOOSE WEAPON SOLUTION!');
  console.log('********************************\n');
  console.clear();
  switch (userInput) {
    case 0:
      console.log(
        `********************************\nYOU YOU FIRE YOUR GUNS BUT IT DOESN'T DO ANY DAMAGE TO THE BOMBERS\nYOU ARE STILL BEHIND HIM\nMirage : THOSE THINGS ARE BUILT LIKE FLYING TANKS. TRY OUT THE 4AAM MULTI TARGET MISSILES!\n********************************\n`
      );
      break;
    case 1:
      gameOver = false;
      console.log(
        `********************************\nYOU HAVE MISSLE LOCK\nFOX THREE!\nTHE MISSILES FLY OUT AND HIT EACH ${enemyAircraft[2]} HITTING THE MUNITIONS AND SETTING THEM ABLAZE!\nSPASH FIVE!\n********************************\n`
      );
      break;
    default:
      console.clear();
      console.log('SOMETHING BEEPS');
  }
}
console.log(
  '********************************\nBlake : SPLASH THREE.\nMirage : SPLASH FOUR.\nMesser : SPLASH THREE.\n********************************\n'
);
console.log(
  `********************************\nMirage : Colenel ALL BOGEYS SPLASHED\nColonel Ernest Johnson : COPY THAT. IT SEEMS THERE ARE NO MORE ENEMY FORCES NEARBY ANYMORE\nMATTELS SQUADRON HAS ENOUGH FUEL TO STAY UP. THEY WILL COVER YOU.\nRETURN TO BASE FOR REFUEL AND RE ARM\n********************************\n`
);
readlineSync.keyIn('Press any key to continue...');
console.clear();

console.log(
  `********************************\nMirage : COPY, HEADING HOME. GOOD WORK ${pilotName}.\nBlake : WE GOT ROOKIE OF THE YEAR THIS TIME...\nMesser : ONE HELL OF A WAY TO START YOUR CAREER AS A PILOT ${pilotName}!\n********************************\n`
);

readlineSync.keyIn('Press any key to land...');
console.clear();

console.log(
  `********************************\nMirage : ON TARMAC...\nBlake : ON TARMAC...\nMesser : ON TARMAC...\n${pilotName} : ON TARMAC...\n********************************\n`
);

readlineSync.keyIn('Press any key to Re-Arm...');
console.clear();

console.log(
  `********************************\nSIMULATION COMPLETE\nDATA UPLOADING ---\nDATA UPLOADING -----------\nDATA UPLOADING -----------------\nDATA UPLOADING COMPLETE\nTHANK YOU FOR PLAYING\nPART TWO COMMING SOON...\nPATCHES IN DEVELOPMENT...\n********************************\n`
);

readlineSync.keyIn('Press any key to END SIMULATION');
console.clear();
