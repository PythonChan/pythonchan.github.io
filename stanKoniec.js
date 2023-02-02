'use strict';

Gra.stanKoniec = () => {
    Gra.id = requestAnimationFrame(Gra.stanKoniec);
  
      if(Gra.map.has(71)) {
  //		Gra.map.delete(71);
          cancelAnimationFrame(Gra.id);
          console.log(Gra.ileGwiazd);
          Gra.stanInicjalizacja();
      }
  
    // ********************
    // CZYSZCZENIE
      Gra.czysc();
  
      Gra.wyswietlTekst(`g - nowa gra`, 0, Gra.plotno.height/2-100, "bold 40pt courier", "#FFF", true)
      Gra.wyswietlTekst(`Game over`, 0, Gra.plotno.height/2, "bold 40pt courier", "#FFF", true)
      Gra.wyswietlTekst(`${Gra.tblGracze[0].gracz.punktacja}`, 0, Gra.plotno.height/2+50, "bold 40pt courier", "#FFF", true)
      Gra.wyswietlTekst(`${Gra.tblGracze[1].gracz.punktacja}`, 0, Gra.plotno.height/2+100, "bold 40pt courier", "#FFF", true)
      Gra.wyswietlTekst(`${((Gra.tblGracze[0].gracz.punktacja > Gra.tblGracze[1].gracz.punktacja) ? "g1":"g2")}`, 0, Gra.plotno.height/2+150, "bold 40pt courier", "#FFF", true)
  }