'use strict';

Gra.stanPreloader = () => {
    Gra.id = requestAnimationFrame(Gra.stanPreloader);
    Gra.czysc();
    
    Gra.wyswietlTekst(`Wczytuję pliki graficzne... ${Gra.iloscObiektowGraficznych}`, 0, Gra.plotno.height/2+50, "bold 20pt courier", "#FFF", true);

    if(Gra.iloscObiektowGraficznych <= 0)
    {
        cancelAnimationFrame(Gra.id);
        Gra.stanInicjalizacja();
    }
}