// text

let imgUrls = [
    "ASSETS/Other/AboutSiteStuff/intro1.png",
    "ASSETS/Other/AboutSiteStuff/intro2.png",
    "ASSETS/Other/AboutSiteStuff/intro3.png"
];

function proceed(value) {
    let secImg = document.getElementById("introImg");

    switch (value) {
        case 1: changeText(
                    "You arrive at a dark hall. You think you see a crack of light ahead of you. You aren't sure how exactly you got here, either. This place is dark, and it's almost like that's all there is to it. The light beckons you.",
                    "Go forwards.",
                    "Look behind you.",
                    "2",
                    "3"
                ); 
                secImg.setAttribute("src", imgUrls[0]);
                break;
        case 2: changeText(
                    "The light is much closer now. You can definitely fit through the crack. The air inside rushes out in soft winds, buzzing as if it were alive. It brushes against your face invitingly. You aren't sure where it will take you, but you know that nothing can harm you here. After all, \"you\" are beyond the real walls of this place.<br><br>Out of the corner of your eye, you can see the soft glow of the place you came from. Isn't it lovely to leave a place with a certainty that you can return?",
                    "Enter.",
                    "<span color=\"gray\">Prev</span>",
                    "4",
                    "1"
                ); 
                secImg.setAttribute("src", imgUrls[1]);
                break;
        case 3: changeText(
                    "It seems to be the Tower. You are somewhere between reality and fiction. The hidden floors are all burdened by the knowledge that they do not exist, regardless of how their inhabitants feel. You wonder how the Earth feels. <i>You</i> are real, I promise. That isn't always comforting to hear, but it makes a difference.<br><br>There isn't any point going in this direction. There's already a button for that.",
                    "Turn back around.",
                    "",
                    "1",
                    "1"
                ); 
                secImg.setAttribute("src", imgUrls[2]);
                break;
    }
}

// funcs
function DispelBarrier() {
    document.getElementById("BARRIER").classList.add("HIDETHIS");
    document.getElementById("SITESCREEN").classList.remove("HIDETHIS");
}

function changeText(dialogue, opt1, opt2, opt1Val, opt2Val) {
    document.getElementById("textContent").innerHTML = dialogue;
    document.getElementById("opt1").innerHTML = opt1;
    document.getElementById("opt2").innerHTML = opt2;

    if (opt1Val === "4") {
        document.getElementById("opt1").setAttribute("onclick", "DispelBarrier()");
        document.getElementById("opt2").setAttribute("onclick", "DispelBarrier()");
    } else {
        document.getElementById("opt1").setAttribute("onclick", "proceed(" + opt1Val + ")");
        document.getElementById("opt2").setAttribute("onclick", "proceed(" + opt2Val + ")");
    }
}

function ChangeScreen(value) {
    let currentIndex = document.getElementById("MAIN_SCREEN").getAttribute("currentIndex");
    let allScreens = document.getElementsByClassName("SCREEN");

    allScreens[currentIndex].classList.add("HIDETHIS");
    allScreens[value].classList.remove("HIDETHIS");

    document.getElementById("MAIN_SCREEN").setAttribute("currentIndex", value);
}