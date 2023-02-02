'use strict';

// Obiekt Gra
var Gra = Gra || {
  plotno: document.createElement(`canvas`), // Uchwyt płótna

  map: new Map(),

  KeyDown (e) {
    Gra.map.set(e.which,true);
  },
  
  KeyUp (e) {
      Gra.map.delete(e.which);
  },

  start() {
    window.addEventListener('keydown', this.KeyDown);
    window.addEventListener('keyup', this.KeyUp);

    this.plotno.id = `gwiazdy`;
    this.plotno.width = window.innerWidth - 20;
    this.plotno.height = window.innerHeight - 20;
    this.plotno.style = `
      border: 0px solid #fff;
      position: absolute;
      left: calc(50% - ${this.plotno.width/2}px);
      top: calc(50% - ${this.plotno.height/2}px);
    `;
    document.body.prepend(this.plotno);
    this.okno = this.plotno.getContext(`2d`);

    //
    this.epoka = this.epokaBak;
  },

  czysc() {
    this.okno.clearRect(0, 0, this.plotno.width, this.plotno.height);
  },

  postawPunkt(x, y, kolor, szerokosc, wysokosc) {
    this.okno.fillStyle = kolor; // kolor wypełniania
    this.okno.beginPath(); // początek ścieżki
    this.okno.fillRect(x, y, szerokosc, wysokosc); // prostokąt
    this.okno.stroke(); // koniec ścieżki
  },

  wyswietlTekst(co, x, y, czcionka, kolor, srodkuj) {
    Gra.okno.font = czcionka;
    Gra.okno.fillStyle = kolor;
    Gra.okno.textBaseline = 'middle';
    if(srodkuj) {
      let szerokoscTekstu = Gra.okno.measureText(co).width;
      Gra.okno.fillText(co, Gra.plotno.width/2 - szerokoscTekstu/2, y);
      return true;
    }
    Gra.okno.fillText(co, x, y);
    return true;
  },

  losuj(min, max) {
    let liczba = 0;
  
    do {
      liczba = Math.floor(Math.random() * (max - min + 1) + min);
    } while(liczba === 0); // dopóki liczba == 0 to losuj ponownie
  
    return liczba;
  },

  // Gwiazdy
  ileGwiazd: 100,

  epoka: 2000,
  epokaBak: 2000
};
