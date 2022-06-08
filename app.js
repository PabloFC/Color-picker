const inputColor = document.querySelector("#inputColor");
const boton = document.querySelector("#boton");
const parrafo = document.querySelector("#parrafo");
const box = document.querySelector(".emptyBox");

// He dejado los comentarios para ver como lo he ido debuggeando

// console.log(inputColor.value);
// console.log(boton);
// console.log(parrafo.textContent);
// console.log(box);

boton.addEventListener("click", () => {
  //   console.log("funciona al presionar");

  parrafo.textContent = "Color: " + inputColor.value;
  box.style.backgroundColor = inputColor.value;
});
