const whiteKeys = document.querySelectorAll('.white-key');
const blackKeys = document.querySelectorAll('.black-key');

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const thirteen = document.getElementById("thirteen");
const fourteen = document.getElementById("fourteen");
const fifteen = document.getElementById("fifteen");
const sixteen = document.getElementById("sixteen");
const seventeen = document.getElementById("seventeen");
const eighteen = document.getElementById("eighteen");
const nineteen = document.getElementById("nineteen");
const twenty = document.getElementById("twenty");
const twentyone = document.getElementById("twentyone");

const black1 = document.getElementById("black-1");
const black2 = document.getElementById("black-2");
const black4 = document.getElementById("black-4");
const black5 = document.getElementById("black-5");
const black6 = document.getElementById("black-6");
const black8 = document.getElementById("black-8");
const black9 = document.getElementById("black-9");
const black11 = document.getElementById("black-11");
const black12 = document.getElementById("black-12");
const black13 = document.getElementById("black-13");
const black15 = document.getElementById("black-15");
const black16 = document.getElementById("black-16");
const black18 = document.getElementById("black-18");
const black19 = document.getElementById("black-19");
const black20 = document.getElementById("black-20");

blackKeys.forEach((black,index) => {
    black.addEventListener('click', () => {
        let sound = new Audio(`./sounds/black-keys/${index}.mp3`);
        playSound(sound);
    });
});

whiteKeys.forEach((white,index) => {
    white.addEventListener('click', () => {
        let sound = new Audio(`./sounds/white-keys/${index}.mp3`);
        playSound(sound);
    })
})

function playSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

addEventListener("keydown", (e) => {
    if (e.key === "a") {
      one.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/0.mp3"));
    }
  
    if (e.key === "s") {
      two.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/1.mp3"));
    }
    if (e.key === "d") {
      three.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/2.mp3"));
    }
    if (e.key === "f") {
      four.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/3.mp3"));
    }
    if (e.key === "g") {
      five.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/4.mp3"));
    }
    if (e.key === "h") {
      six.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/5.mp3"));
    }
    if (e.key === "j") {
      seven.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/6.mp3"));
    }
    if (e.key === "k") {
      eight.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/7.mp3"));
    }
    if (e.key === "l") {
      nine.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/8.mp3"));
    }
  
    if (e.key === "č") {
      ten.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/9.mp3"));
    }
    if (e.key === "ć") {
      eleven.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/10.mp3"));
    }
    if (e.key === "y") {
      twelve.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/11.mp3"));
    }
    if (e.key === "x") {
      thirteen.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/12.mp3"));
    }
    if (e.key === "c") {
      fourteen.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/13.mp3"));
    }
    if (e.key === "v") {
      fifteen.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/14.mp3"));
    }
    if (e.key === "b") {
      sixteen.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/15.mp3"));
    }
    if (e.key === "n") {
      seventeen.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/16.mp3"));
    }
    if (e.key === "m") {
      eighteen.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/17.mp3"));
    }
    if (e.key === ",") {
      nineteen.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/18.mp3"));
    }
    if (e.key === ".") {
      twenty.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/19.mp3"));
    }
    if (e.key === "-") {
      twentyone.classList.add("white-active");
      playSound(new Audio("./sounds/white-keys/20.mp3"));
    }
});

addEventListener("keyup", (e) => {
    if (e.key === "a") {
      one.classList.remove("white-active");
    }
    if (e.key === "s") {
      two.classList.remove("white-active");
    }
    if (e.key === "d") {
      three.classList.remove("white-active");
    }
    if (e.key === "f") {
      four.classList.remove("white-active");
    }
    if (e.key === "g") {
      five.classList.remove("white-active");
    }
    if (e.key === "h") {
      six.classList.remove("white-active");
    }
    if (e.key === "j") {
      seven.classList.remove("white-active");
    }
    if (e.key === "k") {
      eight.classList.remove("white-active");
    }
    if (e.key === "l") {
      nine.classList.remove("white-active");
    }
    if (e.key === "č") {
      ten.classList.remove("white-active");
    }
    if (e.key === "ć") {
      eleven.classList.remove("white-active");
    }
    if (e.key === "y") {
      twelve.classList.remove("white-active");
    }
    if (e.key === "x") {
      thirteen.classList.remove("white-active");
    }
    if (e.key === "c") {
      fourteen.classList.remove("white-active");
    }
    if (e.key === "v") {
      fifteen.classList.remove("white-active");
    }
    if (e.key === "b") {
      sixteen.classList.remove("white-active");
    }
    if (e.key === "n") {
      seventeen.classList.remove("white-active");
    }
    if (e.key === "m") {
      eighteen.classList.remove("white-active");
    }
    if (e.key === ",") {
      nineteen.classList.remove("white-active");
    }
    if (e.key === ".") {
      twenty.classList.remove("white-active");
    }
    if (e.key === "-") {
      twentyone.classList.remove("white-active");
    }
});

addEventListener("keydown", (e) => {
    if (e.key === "1") {
      black1.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/0.mp3"));
    }
  
    if (e.key === "2") {
      black2.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/1.mp3"));
    }
    if (e.key === "3") {
      black4.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/2.mp3"));
    }
    if (e.key === "4") {
      black5.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/3.mp3"));
    }
    if (e.key === "5") {
      black6.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/4.mp3"));
    }
    if (e.key === "6") {
      black8.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/5.mp3"));
    }
    if (e.key === "7") {
      black9.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/6.mp3"));
    }
    if (e.key === "8") {
      black11.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/7.mp3"));
    }
    if (e.key === "q") {
      black12.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/8.mp3"));
    }
  
    if (e.key === "w") {
      black13.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/9.mp3"));
    }
    if (e.key === "e") {
      black15.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/10.mp3"));
    }
    if (e.key === "r") {
      black16.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/11.mp3"));
    }
    if (e.key === "t") {
      black18.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/12.mp3"));
    }
    if (e.key === "z") {
      black19.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/13.mp3"));
    }
    if (e.key === "u") {
      black20.classList.add("black-active");
      playSound(new Audio("./sounds/black-keys/14.mp3"));
    }
});

addEventListener("keyup", (e) => {
    if (e.key === "1") {
      black1.classList.remove("black-active");
    }
  
    if (e.key === "2") {
      black2.classList.remove("black-active");
    }
    if (e.key === "3") {
      black4.classList.remove("black-active");
    }
    if (e.key === "4") {
      black5.classList.remove("black-active");
    }
    if (e.key === "5") {
      black6.classList.remove("black-active");
    }
    if (e.key === "6") {
      black8.classList.remove("black-active");
    }
    if (e.key === "7") {
      black9.classList.remove("black-active");
    }
    if (e.key === "8") {
      black11.classList.remove("black-active");
    }
    if (e.key === "q") {
      black12.classList.remove("black-active");
    }
  
    if (e.key === "w") {
      black13.classList.remove("black-active");
    }
    if (e.key === "e") {
      black15.classList.remove("black-active");
    }
    if (e.key === "r") {
      black16.classList.remove("black-active");
    }
    if (e.key === "t") {
      black18.classList.remove("black-active");
    }
    if (e.key === "z") {
      black19.classList.remove("black-active");
    }
    if (e.key === "u") {
      black20.classList.remove("black-active");
    }
});




