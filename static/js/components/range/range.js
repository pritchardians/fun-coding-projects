export function changefontSize() {
    const body = document.getElementsByTagName("body")[0];
    const fontSizeSlider = document.getElementById("font-size-slider");
    const fontSizeSliderLabel = document.getElementById("font-size-slider-label");
    fontSizeSlider.addEventListener("input", (e) => {
        const fontSizeNumber = e.target.value;
        const fontSize = fontSizeNumber.toString() + "px";
        fontSizeSliderLabel.innerText = fontSizeNumber;
        localStorage.setItem("fontSize", fontSizeNumber);
        body.style.fontSize = fontSize;
    });
}
