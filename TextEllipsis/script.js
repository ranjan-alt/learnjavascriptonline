const inputText = document.querySelector("#text-input");
const outputText = document.querySelector("#text-output");

function getDecription(text) {
  if (text.length < 10) {
    return text;
  }

  return text.substring(0, 10).concat("...");
}

inputText.addEventListener("keyup", () => {
  outputText.textContent = getDecription(event.target.value);
});
