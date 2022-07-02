import Animal from "./Animal.js";

class Leon extends Animal {
  static contadorLeon = 0;
  constructor(nombre, img, comentarios, edad, sonido) {
    super(nombre, img, comentarios, edad, sonido);
  }

  Rugir() {
    console.log(`El ${this.Nombre} hace este sonido ${this.Sonido}`);
    let audio = document.createElement("audio");
    audio.setAttribute("src", `assets/sounds/${this.Sonido}`);
    audio.play();
  }
}

class Lobo extends Animal {
  static contadorLobo = 0;
  constructor(nombre, img, comentarios, edad, sonido) {
    super(nombre, img, comentarios, edad, sonido);
  }

  Aullar() {
    console.log(`El ${this.Nombre} hace este sonido ${this.Sonido}`);
    let audio = document.createElement("audio");
    audio.setAttribute("src", `assets/sounds/${this.Sonido}`);
    audio.play();
  }
}

class Oso extends Animal {
  static contadorOso = 0;
  constructor(nombre, img, comentarios, edad, sonido) {
    super(nombre, img, comentarios, edad, sonido);
  }

  Grunir() {
    console.log(`El ${this.Nombre} hace este sonido ${this.Sonido}`);
    let audio = document.createElement("audio");
    audio.setAttribute("src", `assets/sounds/${this.Sonido}`);
    audio.play();
  }
}

class Serpiente extends Animal {
  static contadorSerpiente = 0;
  constructor(nombre, img, comentarios, edad, sonido) {
    super(nombre, img, comentarios, edad, sonido);
  }

  Sisear() {
    console.log(`El ${this.Nombre} hace este sonido ${this.Sonido}`);
    let audio = document.createElement("audio");
    audio.setAttribute("src", `assets/sounds/${this.Sonido}`);
    audio.play();
  }
}

class Aguila extends Animal {
  static contadorAguila = 0;
  constructor(nombre, img, comentarios, edad, sonido) {
    super(nombre, img, comentarios, edad, sonido);
  }

  Chillar() {
    console.log(`El ${this.Nombre} hace este sonido ${this.Sonido}`);
    let audio = document.createElement("audio");
    audio.setAttribute("src", `assets/sounds/${this.Sonido}`);
    audio.play();
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
