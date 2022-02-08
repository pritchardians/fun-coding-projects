console.log("Javascript wired up correctly. Compiled from Typescript");
// This file should consist only of imports from components, and anything that must run on loadup
import { wiredUp } from "../components/whole-site/wholesite.js";
import { changefontSize } from "../components/range/range.js";
// import { setFontSize } from "../components/whole-site/wholesite";
wiredUp();
changefontSize();
window.onload = function setFontSize() {
    const fontSizeFromStore = localStorage.getItem("fontSize") + "px";
    const body = document.getElementsByTagName("body")[0];
    body.style.fontSize = fontSizeFromStore;
};
