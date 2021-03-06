const lofidrums = new Howl(
  {
    "src": [
      "./drumkits/lofi/lofi.webm",
      "./drumkits/lofi/lofi.mp3"
    ],
    "sprite": {
      "closedhat": [
        0,
        214.28571428571428
      ],
      "kick": [
        1999.9999999999998,
        375.0113378684807
      ],
      "openhat": [
        4000,
        697.6870748299317
      ],
      "crash": [
        6000,
        4250
      ],
      "sample1": [
        12000,
        10666.666666666664
      ],
      "sample2": [
        24000,
        11162.789115646263
      ],
      "snare1": [
        37000,
        799.9999999999972
      ],
      "snare2": [
        39000,
        406.2585034013608
      ]
    }
  }
);

const trapdrums = new Howl(
  {
    "src": [
      "./drumkits/trap/trap.webm",
      "./drumkits/trap/trap.mp3"
    ],
    "sprite": {
      "closedhat": [
        0,
        418.3446712018141
      ],
      "crash": [
        2000,
        796.7800453514737
      ],
      "kick": [
        4000,
        500
      ],
      "openhat": [
        6000,
        514.8979591836733
      ],
      "sample1": [
        8000,
        27428.57142857143
      ],
      "sample2": [
        37000,
        6000
      ],
      "snare1": [
        44000,
        352.94784580499083
      ],
      "snare2": [
        46000,
        399.9999999999986
      ]
    }
  }
);

const loadSamplesButton = document.querySelector('.load-samples-button');
const drumpads = document.querySelector('.drumpads');

function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty(--vh, `${vh}px`);
};

function getDrumkitValue() {
  event.preventDefault();
  drumOptions = document.getElementById('dropdown-list');
  drumChoice = drumOptions.options[drumOptions.selectedIndex].value;
  console.log(drumChoice)
};

function playDrum(event) {
  if (event.target.classList.contains('pad')) {
    event.preventDefault();
    let sound = event.target.dataset.sound;
    if (drumChoice === 'lofidrums') {
      lofidrums.play(sound);
      console.log(sound);
    }
    else (trapdrums.play(sound));
  }
};

setViewportHeight();
window.addEventListener('resize', () => {
  setTimeout(setViewportHeight, 100)
});
loadSamplesButton.addEventListener('click', getDrumkitValue);
loadSamplesButton.addEventListener('touchstart', getDrumkitValue);
drumpads.addEventListener('mousedown', playDrum);
drumpads.addEventListener('touchstart', playDrum);
