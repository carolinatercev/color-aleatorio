//con esto recupero el boton 
const btnColor=document.getElementById("btnColor");
console.log(btnColor);

//estas son otras formas de llamar al mismo boton :
// const color=document.querySelector("#color")
// recupero color como e sta en el html.
const color=document.getElementById("color");
console.log(color);

function coloresHexadecimales() {
    let valores="0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + valores[Math.floor(Math.random() * valores.length)];
    }
    return color;
  }

  console.log(coloresHexadecimales());

  //EVENT LISTENER
  // addEventListener tiene muchos evento, no solo el click .
btnColor.addEventListener("click",() =>{ 
    let colorAleatorio= coloresHexadecimales ();
    console.log(colorAleatorio);
console.log(document);
document.body.style.backgroundColor=colorAleatorio;
color.textContent=colorAleatorio;
});
