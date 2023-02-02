'use strict';

Gra.stanInicjalizacja = () => {
	Gra.start();

	Gra.tblGwiazdy = [];
	for (Gra.i = 0; Gra.i < Gra.ileGwiazd; ++Gra.i) {
		Gra.g = new Gwiazda();
		Gra.g.s = Gra.losuj(10, 40);
		Gra.g.w = Gra.losuj(10, 40);
		Gra.g.x = Gra.losuj(Gra.g.s, Gra.plotno.width - Gra.g.s);
		Gra.g.y = Gra.losuj(Gra.g.w, (Gra.plotno.height - Gra.g.w)/2);
		Gra.g.kolorDef = "#FFF";
		Gra.g.kolor = Gra.g.kolorDef;
		Gra.g.px = Gra.losuj(-1, 1);
		Gra.g.py = Gra.losuj(-1, 1);
		Gra.g.gatunek = 0;
		Gra.g.visible = true;
		Gra.g.kwarantanna = Gra.losuj(150, 1000);
		Gra.g.kwarantanna2 = Gra.g.kwarantanna;
		Gra.g.grafika = `G_gwiazda`;
		Gra.g.grafikaDef = Gra.g.grafika;



		Gra.tblGwiazdy.push({
			gwiazda: Gra.g
		});
	}

	/*
	Gra.gracz1 = new Gracz();
	Gra.gracz1.s = 35;
	Gra.gracz1.w = 35;
	Gra.gracz1.x = Gra.plotno.width / 4 - Gra.gracz1.s / 2;
	Gra.gracz1.y = Gra.plotno.height - Gra.gracz1.w;
	Gra.gracz1.p = 9;
	Gra.gracz1.pkt = 0;
	Gra.gracz1.kolor = "#08F";
	Gra.gracz1.gatunek = 1;
	Gra.gracz1.punktacja = 0;
	Gra.gracz1.grafika = `G_gracz_1`;
	Gra.gracz1.grafikaWrog = `G_gwiazda_1`;

	Gra.gracz2 = new Gracz();
	Gra.gracz2.s = 35;
	Gra.gracz2.w = 35;
	Gra.gracz2.x = 3 * Gra.plotno.width / 4 - Gra.gracz1.s / 2;
	Gra.gracz2.y = Gra.plotno.height - Gra.gracz1.w;
	Gra.gracz2.p = 9;
	Gra.gracz2.kolor = "#FF7500";
	Gra.gracz2.pkt = 0;
	Gra.gracz2.gatunek = 2;
	Gra.gracz2.punktacja = 0;
	Gra.gracz2.grafika = `G_gracz_2`;
	Gra.gracz2.grafikaWrog = `G_gwiazda_2`;
	*/

	Gra.tblGracze = [];
	for (Gra.i = 1; Gra.i <= 2; ++Gra.i) {
		Gra.gracz = new Gracz();
		Gra.gracz.s = 35;
		Gra.gracz.w = 35;
		Gra.gracz.y = Gra.plotno.height - Gra.gracz.w;
		Gra.gracz.p = 9;
		Gra.gracz.pkt = 0;
		Gra.gracz.gatunek = Gra.i;
		Gra.gracz.punktacja = 0;
		Gra.gracz.grafika = `G_gracz_${Gra.i}`;
		Gra.gracz.grafikaWrog = `G_gwiazda_${Gra.i}`;

		Gra.tblGracze.push({
			gracz: Gra.gracz
		});
	}

	Gra.tblGracze[0].gracz.x = Gra.plotno.width / 4 - Gra.gracz.s / 2;
	Gra.tblGracze[0].gracz.kolor = "#08F";
	Gra.tblGracze[1].gracz.x = 3 * Gra.plotno.width / 4 - Gra.gracz.s / 2;
	Gra.tblGracze[1].gracz.kolor = "#FF7500";

	Gra.stanGraj();
}