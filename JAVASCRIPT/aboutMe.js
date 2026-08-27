const medaFilePaths = [
    "ASSETS/Other/medaPortrait_v1.png",
    "ASSETS/Other/medaPortrait_v2.png",
    "ASSETS/Other/medaPortrait_v3.png"
];

const allBackgroundClasses = [
    "edgyMainScreen",
    "normalMainScreen",
    "limeMainScreen",
    "plumMainScreen",
    "liLacMainScreen",
    "mahoganyMainScreen",
    "edgyMainScreen"
]

function OpenScreen(screenIndex, medaIndex) {
    //  refs
    const allScreens = document.getElementsByClassName("SCREEN");
    const mainScreen = document.getElementById("MAIN_SCREEN");
    const meda = document.getElementById("MEDAIMG");

    const currentIndex = mainScreen.getAttribute("currentScreen");
    const closeIndex = parseInt(currentIndex, 10);

    // change to correct screen
    allScreens[closeIndex].classList.add("HIDETHIS")
    allScreens[screenIndex].classList.remove("HIDETHIS");
    mainScreen.setAttribute("currentScreen", screenIndex);

    // changing main screen bg theres gotta be a better way to do this bruh
    let classToRemove = mainScreen.classList[1];
    mainScreen.classList.remove(classToRemove);
    mainScreen.classList.add(allBackgroundClasses[screenIndex]);

    meda.setAttribute("src", medaFilePaths[medaIndex]);   
}

function ToggleSectionList() {
    document.getElementById("AboutMeSectionList").classList.toggle("HIDETHIS");
}