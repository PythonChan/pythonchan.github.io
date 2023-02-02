'use strict';

Gra.stanGraj = () => {
    Gra.id = requestAnimationFrame(Gra.stanGraj);
  
    // ********************
    // CZYSZCZENIE
    Gra.czysc();
  
    // ********************
    // LOGIKA
  
    Gra.rozmiar = Gra.tblGwiazdy.length;
    for (Gra.i = 0; Gra.i < Gra.rozmiar; ++Gra.i) {
        Gra.tblGwiazdy[Gra.i].gwiazda.krawedz(Gra.plotno)
  
        if (Gra.tblGwiazdy[Gra.i].gwiazda.stabilizacja) {
            Gra.tblGwiazdy[Gra.i].gwiazda.x += Gra.losuj(-2, 2);
            Gra.tblGwiazdy[Gra.i].gwiazda.y += Gra.losuj(-2, 2);
        }
        else {
            Gra.tblGwiazdy[Gra.i].gwiazda.x += Gra.tblGwiazdy[Gra.i].gwiazda.px;
            Gra.tblGwiazdy[Gra.i].gwiazda.y += Gra.tblGwiazdy[Gra.i].gwiazda.py;
        }
  
        kol(Gra.tblGracze[0].gracz, Gra.tblGwiazdy[Gra.i].gwiazda);
        kol(Gra.tblGracze[1].gracz, Gra.tblGwiazdy[Gra.i].gwiazda);
        
        if(Gra.tblGwiazdy[Gra.i].gwiazda.visible)
        {
            if(Gra.tblGwiazdy[Gra.i].gwiazda.gatunek == 1 || Gra.tblGwiazdy[Gra.i].gwiazda.gatunek == 2)
            {
                if(--Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna <=0 ) {
                    Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna = Gra.losuj(150, 200);
                    Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna2 = Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna;
                    Gra.tblGwiazdy[Gra.i].gwiazda.gatunek = 0;
                    Gra.tblGwiazdy[Gra.i].gwiazda.stabilizacja = false;
                    Gra.tblGwiazdy[Gra.i].gwiazda.grafika = Gra.tblGwiazdy[Gra.i].gwiazda.grafikaDef;
                }
            }
        }
    }

  
    if (Gra.map.has(87))
        Gra.tblGracze[0].gracz.y -= Gra.tblGracze[0].gracz.p;
    if (Gra.map.has(38))
        Gra.tblGracze[1].gracz.y -= Gra.tblGracze[1].gracz.p;
    if (Gra.map.has(83))
        Gra.tblGracze[0].gracz.y += Gra.tblGracze[0].gracz.p;
    if (Gra.map.has(40))
        Gra.tblGracze[1].gracz.y += Gra.tblGracze[1].gracz.p;
    if (Gra.map.has(68))
        Gra.tblGracze[0].gracz.x += Gra.tblGracze[0].gracz.p;
    if (Gra.map.has(39))
        Gra.tblGracze[1].gracz.x += Gra.tblGracze[1].gracz.p;
    if (Gra.map.has(65))
        Gra.tblGracze[0].gracz.x -= Gra.tblGracze[0].gracz.p;
    if (Gra.map.has(37))
        Gra.tblGracze[1].gracz.x -= Gra.tblGracze[1].gracz.p;
  
  
  
    // ********************
    // KOLIZJE
    Gra.tblGracze[0].gracz.krawedz(Gra.plotno);
    Gra.tblGracze[1].gracz.krawedz(Gra.plotno);
  
    // ********************
    // RYSOWANIE
    Gra.rozmiar = Gra.tblGwiazdy.length;
    for (Gra.i = 0; Gra.i < Gra.rozmiar; ++Gra.i) {
        if (Gra.tblGwiazdy[Gra.i].gwiazda.visible) {
            Gra.tblGwiazdy[Gra.i].gwiazda.rysuj();
            if (Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna > Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna2*2/3) {
                var kolorek = "#FF0000";
            }
            else if (Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna > Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna2/3) {
                var kolorek = "#FFFF00";
            }
            else if (Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna >= 0) {
                var kolorek = "#008000";
            }
            if (Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna != Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna2)
            {
                Gra.postawPunkt(Gra.tblGwiazdy[Gra.i].gwiazda.x,
                    Gra.tblGwiazdy[Gra.i].gwiazda.y - 10,
                    kolorek,
                    Gra.tblGwiazdy[Gra.i].gwiazda.s * Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna / Gra.tblGwiazdy[Gra.i].gwiazda.kwarantanna2,
                    5);
            }
        }
        Gra.wyswietlTekst(`${Gra.tblGracze[0].gracz.punktacja}`, Gra.tblGracze[0].gracz.x, Gra.g.s + 15, "bold 30pt courier", Gra.tblGracze[0].gracz.kolor, false)
        Gra.wyswietlTekst(`${Gra.tblGracze[1].gracz.punktacja}`, Gra.tblGracze[1].gracz.x, Gra.g.s + 15, "bold 30pt courier", Gra.tblGracze[1].gracz.kolor, false)
    }
    
    if ((Gra.epoka -= 1) < 1) {
        cancelAnimationFrame(Gra.id);
        Gra.stanKoniec();
    }   
    
    Gra.tblGracze[0].gracz.rysuj();
    Gra.tblGracze[1].gracz.rysuj();
  
    //console.log(Gra.map);
    //Gra.wyswietlTekst(`${Gra.tblGwiazdy.length}`, 10, 50, "bold 40pt courier", "#FFF", false)
    Gra.wyswietlTekst(`${Math.round(Gra.epoka)}`, 0, 50, "bold 40pt courier", "#FFF", true)
  };