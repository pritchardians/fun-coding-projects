console.log("Javascript wired up correctly. Compiled from Typescript");
// This file should consist only of imports from components, and anything that must run on loadup
import { wiredUp } from "../components/whole-site/wholesite.js";
import { changefontSize } from "../components/range/range.js";
// import { setFontSize } from "../components/whole-site/wholesite";
wiredUp();
changefontSize();
// This function sets the font size to the last one chosen my the user on any page that loads
// Without it, flipping between pages loses the preferred font size
window.onload = function setFontSize() {
    const fontSizeFromStore = localStorage.getItem("fontSize");
    console.log(`Font size: ${fontSizeFromStore}`);
    const fontSizeSliderLabel = document.getElementById("font-size-slider-label");
    const body = document.getElementsByTagName("body")[0];
    if (fontSizeFromStore === null) {
        fontSizeSliderLabel.innerText = "16";
    }
    else {
        fontSizeSliderLabel.innerText = fontSizeFromStore + "px";
        body.style.fontSize = fontSizeFromStore;
    }
};
