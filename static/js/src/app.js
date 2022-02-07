console.log("Javascript wired up correctly. Compiled from Typescript");
// This file should consist only of imports from components
import { wiredUp } from "../components/whole-site/wholesite.js";
import { fontSizeSmall } from "../components/whole-site/wholesite.js";
import { fontSizeMedium } from "../components/whole-site/wholesite.js";
import { fontSizeLarge } from "../components/whole-site/wholesite.js";
wiredUp();
fontSizeSmall();
fontSizeMedium();
fontSizeLarge();
