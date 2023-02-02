class Gracz {
	rysuj() {
		Gra.okno.drawImage(Gra.zasobyGrafika[`${this.grafika}`], 0, 0, 40, 40, `${this.x}`, `${this.y}`, `${this.w}`, `${this.s}`);
	}
	krawedz(plotno) {
		if (this.x <= 0)
			this.x = 0;
		if (this.y <= 0)
			this.y = 0;
		if (this.x >= plotno.width - this.s)
			this.x = plotno.width - this.s;
		if (this.y >= plotno.height - this.w)
			this.y = plotno.height - this.w;
	}
}
