function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Developer", "Entepreneur", "Leader", "Engineer", "Problem Solver"];
const el = document.getElementById("typewriter");

let sleepTime = 100;
let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];
    
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i +1);
      await sleep(sleepTime);
    }
    await sleep(sleepTime * 12);
    for (let i = curWord.length; i> 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length -1) {
      curPhraseIndex = 0;
    }
    else {
      curPhraseIndex++;
    }
  }
}

writeLoop()



var blink_speed = 100; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('myBlinkingDiv');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);