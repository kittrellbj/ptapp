// get references
const ageInput = document.getElementById('ageInput');
const sexInput = document.getElementById('sexInput');
const agilityInput = document.getElementById('agilityInput');
const pushupsInput = document.getElementById('pushupsInput');
const runInput = document.getElementById('runInput');

const agilityScore = document.getElementById('agilityScore');
const agilityResult = document.getElementById('agilityResult');
const pushupsScore = document.getElementById('pushupsScore');
const pushupsResult = document.getElementById('pushupsResult');
const runScore = document.getElementById('runScore');
const runResult = document.getElementById('runResult');

const calculateBtn = document.getElementById('calculateBtn');

// load JSON data
let pushupsData, agilityData, runData;

fetch('pushups.json') 
  .then(res => res.json())
  .then(data => pushupsData = data);

fetch('agility.json') 
  .then(res => res.json())
  .then(data => agilityData = data);

fetch('run.json') 
  .then(res => res.json())
  .then(data => runData = data);

calculateBtn.addEventListener('click', () => {
  const age = parseInt(ageInput.value);
  const sex = sexInput.value;

  const agilityVal = parseFloat(agilityInput.value);
  const pushupsVal = parseInt(pushupsInput.value);
  const runVal = parseFloat(runInput.value);

  // get groups
  const agilityGroup = getAgilityRunGroup(age, sex);
  const runGroup = getAgilityRunGroup(age, sex);
  const pushupsGroup = getPushupsGroup(age, sex);

  // compute scores
  const agilityPct = getScoreFromTime(agilityData[agilityGroup], agilityVal);
  const runPct = getScoreFromTime(runData[runGroup], runVal);
  const pushupsPct = getScoreFromReps(pushupsData[pushupsGroup], pushupsVal);

  // show scores
  agilityScore.textContent = agilityPct !== null ? agilityPct.toFixed(1) : 'N/A';
  runScore.textContent = runPct !== null ? runPct.toFixed(1) : 'N/A';
  pushupsScore.textContent = pushupsPct !== null ? pushupsPct.toFixed(1) : 'N/A';

  // show icons
  agilityResult.innerHTML = getIcon(agilityPct);
  runResult.innerHTML = getIcon(runPct);
  pushupsResult.innerHTML = getIcon(pushupsPct);
});

// group logic for agility/run
function getAgilityRunGroup(age, sex) {
  if (age >= 20 && age <= 29) return `${sex} 20-29`;
  if (age >= 30 && age <= 39) return `${sex} 30-39`;
  return `${sex} 40-100`; 
}

// group logic for pushups
function getPushupsGroup(age, sex) {
  if (age >= 17 && age <= 21) return `${sex} 17-21`;
  if (age >= 22 && age <= 26) return `${sex} 22-26`;
  if (age >= 27 && age <= 31) return `${sex} 27-31`;
  if (age >= 32 && age <= 36) return `${sex} 32-36`;
  if (age >= 37 && age <= 41) return `${sex} 37-41`;
  if (age >= 42 && age <= 46) return `${sex} 42-46`;
  if (age >= 47 && age <= 51) return `${sex} 47-51`;
  return `${sex} 52-100`;
}

// finds best matching time from JSON
function getScoreFromTime(dataArr, userTime) {
  if (!dataArr || isNaN(userTime)) return null;
  let bestScore = null;
  // find the entry whose Time >= userTime or the closest match
  for (let item of dataArr) {
    if (item.Time >= userTime) {
      bestScore = item.Score;
      break;
    }
  }
  return bestScore !== null ? bestScore : dataArr[dataArr.length - 1].Score;
}

// finds best matching reps from JSON
function getScoreFromReps(dataArr, userReps) {
    if (!dataArr || isNaN(userReps)) return null;
    // assume dataArr is sorted descending by Reps
    for (let i = dataArr.length - 1; i >= 0; i--) {
      if (userReps >= dataArr[i].Reps) {
        return dataArr[i].Score;
      }
    }
    return dataArr[dataArr.length - 1].Score;
  }  

// icon logic
function getIcon(score) {
  if (score === null) return '--';
  if (score <= 49.9) return '<span style="color:red;">&#10060;</span>';
  if (score <= 69.9) return '<span style="color:orange;">&#10004;</span>';
  return '<span style="color:green;">&#10004;</span>';
}

// register service worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}