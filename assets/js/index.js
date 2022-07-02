import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Animales.js";
import Animales from "./Consulta.js";

let listadoAnimales = [];
const { animales } = await Animales.getData();

document.getElementById("btnRegistrar").addEventListener("click", () => {
  let nombre = document.getElementById("animal");
  let edad = document.getElementById("edad");
  let previewElement = document.getElementById("preview");
  let imagenSrcBg = previewElement.style.backgroundImage;
  let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);
  let comentarios = document.getElementById("comentarios");
  let soundAnimal = animales.find(
    (animal) => animal.name === nombre.value
  ).sonido;
  console.log(soundAnimal);

  let nuevoAnimal;

  if (nombre.value == "Leon") {
    nuevoAnimal = new Leon(
      nombre.value,
      imgSrc,
      comentarios.value,
      edad.value,
      soundAnimal
    );
  } else if (nombre.value == "Lobo") {
    nuevoAnimal = new Lobo(
      nombre.value,
      imgSrc,
      comentarios.value,
      edad.value,
      soundAnimal
    );
  } else if (nombre.value == "Oso") {
    nuevoAnimal = new Oso(
      nombre.value,
      imgSrc,
      comentarios.value,
      edad.value,
      soundAnimal
    );
  } else if (nombre.value == "Serpiente") {
    nuevoAnimal = new Serpiente(
      nombre.value,
      imgSrc,
      comentarios.value,
      edad.value,
      soundAnimal
    );
  } else if (nombre.value == "Aguila") {
    nuevoAnimal = new Aguila(
      nombre.value,
      imgSrc,
      comentarios.value,
      edad.value,
      soundAnimal
    );
  }

  if (edad.value && nombre.value && comentarios.value && imagenSrcBg) {
    listadoAnimales.push(nuevoAnimal);
    nombre.selectedIndex = 0;
    edad.selectedIndex = 0;
    previewElement.style.backgroundImage = "assets/imgs/lion.svg";
    imagenSrcBg = previewElement.style.backgroundColor = "transparent";
    comentarios.value = "";
    soundAnimal = "";
    reloadTable();
  } else {
    alert("Faltan datos por llenar");
  }
});

const reloadTable = () => {
  const animalesTemplate = document.getElementById("Participantes");
  animalesTemplate.innerHTML = "";
  const dataModal = document.getElementById("modal-body");
  dataModal.innerHTML = "";
  listadoAnimales.forEach((p, i) => {
    animalesTemplate.innerHTML += `
        <div class="px-3 pb-2 participante" data-animal="${p.getNombre()}">
            <div class="card" bg-dark" style="border:none">
                <img src="${p.getImg()}" onclick="activarModal()" role="button" class="card-img-top" />
                <button class="btn btn-secondary" style="border:none" onclick="activarSonido('${i}')">
                  <img src="assets/imgs/audio.svg" width="30" />
                <button>
                <audio id="audio" src="${p.getSonido()}" style="border:none"></audio>
            </div>
        </div>
        `;
    window.activarModal = () => {
      $("#exampleModal").modal("show");
      dataModal.innerHTML = `
          <div class="card bg-dark" style="border:none">
            <img src="${p.getImg()}" class="card-img-top" />
            <div class="card-body text-white text-center">
                <h4>${p.getNombre()}</h4>
                <hr class="w-50 mx-auto">
                <p>${p.getEdad()}</p>
                <hr class="w-50 mx-auto">
                <h5>Comentarios</h5>
                <p>${p.getComentarios()}</p>
            </div>
          </div>
          `;
    };
  });
};

window.activarSonido = async (i) => {
  const participante = listadoAnimales[i];
  if (participante.getNombre() == "Leon") {
    await participante.Rugir();
  } else if (participante.getNombre() == "Lobo") {
    await participante.Aullar();
  } else if (participante.getNombre() == "Oso") {
    await participante.Grunir();
  } else if (participante.getNombre() == "Serpiente") {
    await participante.Sisear();
  } else if (participante.getNombre() == "Aguila") {
    await participante.Chillar();
  }
  reloadTable();
};
