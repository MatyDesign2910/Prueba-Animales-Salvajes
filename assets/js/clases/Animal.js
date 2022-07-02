class Animal {
  constructor(nombre, img, comentarios, edad, sonido) {
    let Nombre = nombre;
    let Img = img;
    let Comentarios = comentarios;
    let Edad = edad;
    let Sonido = sonido;

    this.getNombre = () => Nombre;
    this.getImg = () => Img;
    this.getComentarios = () => Comentarios;
    this.getEdad = () => Edad;
    this.getSonido = () => Sonido;

    this.setComentarios = (comentarios) => (Comentarios = comentarios);
  }

  get Nombre() {
    return this.getNombre();
  }
  get Img() {
    return this.getImg();
  }
  get Comentarios() {
    return this.getComentarios();
  }
  get Edad() {
    return this.getEdad();
  }
  get Sonido() {
    return this.getSonido();
  }

  set Comentarios(comentarios) {
    return this.getComentarios(comentarios);
  }
}

export default Animal;
