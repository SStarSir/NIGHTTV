const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const TitleElement = document.getElementById('title')

textElement.style.color = "white";

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [

  {
    id: 1,
    title: 'NIGHT TV',
    text: 'NIGHT TV',
    
    options: [
      {
        text: 'Start Game',
        
        nextText: 2
      }
      
    ]
  },







  {
    id: 2,
    title: 'PROLOGUE',
    text: 'Another night, another round. You are on the way for the umpteenth walk, trying to get tired enough to be able to sleep a wink tonight.Your mind wanders and rethinks the job interview you had yesterday. You did your best but, according to them, the only other candidate was stronger. Certainly your face marked by insomnia did not help.',
    options: [
      {
        text: 'Next',
        
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Suddenly it starts raining. You decide to take a shortcut and pass by a secondary road. Your attention is captured by a TV shop that you have never seen. Despite the late hour, it is still open and the light of the televisions in the window and the neon sign attract you like a moth. The rain gets more intense, so you decide to go inside.',
    options: [
      {
        text: 'Next',
        
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'The shop is small but full of televisions of all brands and models. The clerk seems to be busy repairing a TV, and he doesnt seem to mind you too much.Although you are unemployed, luckily you have put aside a small nest egg for emergencies.',
    options: [
      {
        text: 'Buy a telly',
        nextText: 5
      },
      {
        text: 'Leave',
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: 'You leave the shop satisfied with your new color TV under your arm. The dopamine peak quickly vanishes and you find yourself in the pouring rain with a bulky and heavy box to carry.',
    options: [
      {
        text: 'Look for the bus shelter',
        nextText: 7
      },

      {
        text: 'Walk home',
        nextText: 9
      },
    ]
  },
  {
    id: 6,
    text: 'You leave with a sigh and go home in the rain. Another sleepless night and another wasted opportunity to change your life.',
    options: [
      {
        text: 'Try again',
        nextText: -1
      },

    ]
  },
  {
    id: 7,
    text: 'You find some cover from the rain under the bus shelter. You adjust the jacket collar and, sitting on your new purchase, you start waiting for the next bus.',
    options: [
      {
        text: 'Wait for the bus',
        nextText: 8
      },
     




    ]
  },
  {
    id: 8,
    text: 'How much time has passed? You dont have a watch, but judging from the timetable, the bus should run every 50 minutes at this time of night. It seems like an eternity spent in the cold. There is no living soul around..',
    options: [
      {
        text: 'Wait patiently',
        nextText: 10
      },
      {
        text: 'Light up a cigarette',
        nextText: 11
      }
    ]
  },
  {
    id: 9,
    text: 'You have walked just a few corners when you come across a group of street thugs. They beat you and you fall unconscious. When you regain consciousness, you find yourself soaked, bleeding and without a TV.',
    options: [
      {
        text: 'Back to square one',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    title: 'wait patiently',
    text: 'You decide to wait patiently, sooner or later the bus will arrive. Every light in the distance has aroused a little hope, which turns off when it turns out to be yet another car.',
    options: [
      {
        text: 'Wait a bit longer',
        nextText: 8
      }
    ]
  },
  {
    id: 11,
    title: 'light up a cigarette',
    text: 'As soon as you light your cigarette, just long enough to do a couple of puffs and the headlights of the bus appear on the horizon. Typical. You throw your bus-summoning cigarette into a puddle and signal the driver to stop.',
    options: [
      {
        text: 'Get on the bus',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text: 'You completed the prologue. Stay tuned for the next chapters',
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  }
]

startGame()
