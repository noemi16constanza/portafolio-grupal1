// Seleccionamos las imágenes y las cajas de texto
const images = document.querySelectorAll('.portfolio a img');
const textBoxes = document.querySelectorAll('.text-box');

// Datos que se mostrarán en las cajas de texto al hacer clic en las imágenes
const info = [
    {
        text1: "Proyecto 1: Descripción del primer proyecto.",
        text2: "Más detalles sobre el Proyecto 1."
    },
    {
        text1: "Proyecto 2: Descripción del segundo proyecto.",
        text2: "Más detalles sobre el Proyecto 2."
    },
    {
        text1: "Proyecto 3: Descripción del tercer proyecto.",
        text2: "Más detalles sobre el Proyecto 3."
    },
    {
        text1: "Proyecto 4: Descripción del cuarto proyecto.",
        text2: "Más detalles sobre el Proyecto 4."
    }
];

// Añadimos un evento de clic a cada imagen
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        // Cambia el contenido de las cajas de texto según la imagen seleccionada
        textBoxes[0].innerHTML = `<p>${info[index].text1}</p>`;
        textBoxes[1].innerHTML = `<p>${info[index].text2}</p>`;
    });
});