'use strict';

Gra.start();
  
function kol(gracz, obiekt) {
	if (
		(gracz.x + gracz.s > obiekt.x)
		&& (gracz.x < obiekt.x + obiekt.s)
		&& (gracz.y + gracz.w > obiekt.y)
		&& (gracz.y < obiekt.y + obiekt.w)
	) {
	 		if(obiekt.gatunek == 0) {
				obiekt.kolor = gracz.kolor;
				obiekt.gatunek = gracz.gatunek;

				if(gracz.gatunek == 1 || gracz.gatunek == 2) {
					++gracz.punktacja;
					obiekt.grafika = gracz.grafikaWrog;
					obiekt.stabilizacja = true;
				}
			} else

			if(gracz.gatunek == 1 && obiekt.gatunek == 2) {
				obiekt.gatunek = 1;
				obiekt.kolor = gracz.kolor;
				--gracz.punktacja;
				return true;
			} else

			if(gracz.gatunek == 2 && obiekt.gatunek == 1) {
				obiekt.gatunek = 2;
				obiekt.kolor = gracz.kolor;
				--gracz.punktacja;
				return true;
			}
  }
}

function wczytajGrafike(plikID)
{
	for(let src in plikID)
	{
		Gra.zasobyGrafika[src] = new Image();
		Gra.zasobyGrafika[src].onload = () => {
			Gra.iloscObiektowGraficznych--;
		}
		Gra.zasobyGrafika[src].src = plikID[src];
	}
}


Gra.zasobyGrafika = [];
Gra.plikiGraficzne = {
	G_gracz_1 : `assets/grafika/G_gracz_1.png`,
	G_gracz_2 : `assets/grafika/G_gracz_2.png`,
	G_gwiazda : `assets/grafika/G_gwiazda.png`,
	G_gwiazda_1 : `assets/grafika/G_gwiazda_1.png`,
	G_gwiazda_2 : `assets/grafika/G_gwiazda_2.png`
};
Gra.iloscObiektowGraficznych = Object.keys(Gra.plikiGraficzne).length;

wczytajGrafike(Gra.plikiGraficzne);

Gra.stanPreloader();
