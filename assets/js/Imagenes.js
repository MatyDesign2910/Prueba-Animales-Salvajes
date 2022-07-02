import Animales from "./Consulta.js";

const animal = document.getElementById("animal");
const preview = document.getElementById("preview");
const { animales } = await Animales.getData();

animal.addEventListener("change", (e) => {
    const findImage = animales.find((animal) => animal.name === e.target.value).imagen;
    preview.style.backgroundImage = `url(assets/imgs/${findImage})`;
});