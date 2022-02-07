export function wiredUp() {
    console.log("Whole site javascript wired up");
}
export function fontSizeSmall() {
    const fontSizeSmallButton = document.getElementById("font-size-small-button");
    fontSizeSmallButton.addEventListener("click", (e) => {
        const siteBody = document.getElementsByTagName("body")[0];
        siteBody.style.fontSize = "10px";
    });
}
export function fontSizeMedium() {
    const fontSizeMediumButton = document.getElementById("font-size-medium-button");
    fontSizeMediumButton.addEventListener("click", (e) => {
        const siteBody = document.getElementsByTagName("body")[0];
        siteBody.style.fontSize = "16px";
    });
}
export function fontSizeLarge() {
    const fontSizeLargeButton = document.getElementById("font-size-large-button");
    fontSizeLargeButton.addEventListener("click", (e) => {
        const siteBody = document.getElementsByTagName("body")[0];
        siteBody.style.fontSize = "24px";
    });
}
