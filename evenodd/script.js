const inputnumber = document.querySelector("#inputnumber");

const checknumber = document.querySelector("#checknumber");

function getEvenOdd(value) {
  // if(value )

  return value % 2 == 0 ? "even" : "odd";
}

inputnumber.addEventListener("keyup", () => {
  checknumber.textContent = getEvenOdd(event.target.value);
});
