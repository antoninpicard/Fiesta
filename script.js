

let img, img2, img3, img4;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(12);

	img = loadImage('https://assets.codepen.io/249663/1356361767.png');
	img2 = loadImage('https://assets.codepen.io/249663/amate_Anejo.png');
	img3 = loadImage('https://assets.codepen.io/249663/LM-SAL20003_0-600x675.png');
	img4 = loadImage('https://assets.codepen.io/249663/senor_gif.png');

	background('hotpink');
}

const s = 250;	 

function draw() {  
	image(img, random(-100, width), random(-100, height), s, s); // Taco
	image(img2, random(-100, width), random(-100, height), s * 0.8, s * 1.2); // Tequila
	image(img3, random(-100, width), random(-100, height), s * 0.8, s * 0.8); // Salsa
	
	if (frameCount > 150) noLoop();
}

function mouseMoved() {	
	const cs = s * 1.2;
	image(img4, mouseX - (s * 0.5), mouseY - (s * 0.5), cs, cs * 0.8); // Cat
}