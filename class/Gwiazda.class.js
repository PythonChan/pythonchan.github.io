class Gwiazda {
	rysuj() {
		Gra.okno.drawImage(Gra.zasobyGrafika[`${this.grafika}`], 0, 0, 40, 40, `${this.x}`, `${this.y}`, `${this.s}`, `${this.w}`);
	}
	krawedz(plotno) {
		if (this.y < 0) {
			this.py = -this.py;
			this.y = 0;
		}
		if (this.y > Gra.plotno.height - this.w) {
			this.py = -this.py;
			this.y = Gra.plotno.height - this.w;
		}
		if (this.x < 0) {
			this.px = -this.px;
			this.x = 0;
		}
		if (this.x + this.s > Gra.plotno.width) {
			this.px = -this.px;
			this.x = Gra.plotno.width - this.s;
		}
	}
	/*kolizja(gracz1, gracz2) {
		var gr1 = (
			(gracz1.x < this.x - gracz1.s)
			|| (gracz1.x > this.x + this.s)
			|| (gracz1.y < this.y - gracz1.w)
			|| (gracz1.y > this.y + this.w)
		);
		var gr2 = (
			(gracz2.x < this.x - gracz2.s)
			|| (gracz2.x > this.x + this.s)
			|| (gracz2.y < this.y - gracz2.w)
			|| (gracz2.y > this.y + this.w)
		);
		if (gr1 && gr2)
			this.kolor = this.kolorDef;
		else this.kolor = this.kolorKol;
	}*/
}
