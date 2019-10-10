let width = 500;
let height = 500;
let columnGap = 100;
let rowGap = 100;
var columns = 0;
var rows = 0;

var grid = [];
var vx = [];
var vy = [];

class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class square {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.a
		this.b
	}
}

function setup() {
	createCanvas(width+100, height);
	frameRate(8);
	textSize(16);
	columns = width/columnGap;
	rows = height/rowGap;
		
	for (i=0; i<15;i++) {
		vx.push("");
		vy.push("");
	}
	
	for (i=0; i<columns; i++) {
		grid.push([]);
	}
	
	for (i=0; i<columns; i++) {
		for (j=0; j<rows; j++) {
			grid[i].push("");
		}
	}

}

function draw() {
	background(220);
	fill(255);
	
	noStroke();
	for (i=0; i<grid.length; i++) {
		for (j=0; j<grid[i].length; j++) {
			if (grid[i][j] == "filled") {
				fill(100);
			}				
			rect(i*columnGap, j*rowGap, columnGap, rowGap);
			fill(255);
		}
	}
	
	fill(255,0,0);
	fill(255);

	stroke(150);
	for (i=0; i<=columns; i++) {
		line(columnGap*i, 0, columnGap*i, height);
	}
	for (i=0; i<=rows; i++) {
		line(0, rowGap*i, width, rowGap*i);
	}
	
	fill(0);
	text("Number = "+checkNumber(),510,20);
}

function checkNumber() {
	var columnNumY = 0;
	var rowNumY = 0;
	for (i=0;i<15;i++) {
		if (i<3) {
			columnNumY = 0;
			rowNumY = i;
		} else if (i<6) {
			columnNumY = 1;
			rowNumY = i-3;
		} else if (i<9) {
			columnNumY = 2;
			rowNumY = i-6;
		} else if (i<12) {
			columnNumY = 3;
			rowNumY = i-9;
		} else if (i<15) {
			columnNumY = 4;
			rowNumY = i-12;
		}
		if ((grid[columnNumY][rowNumY] == "filled")&&(grid[columnNumY][rowNumY+1] == "filled")&&(grid[columnNumY][rowNumY+2] == "filled")) {
			vy[i] = "filled";
			console.log("yfilled");
		}
	}
	
	var columnNumX = 0;
	var rowNumX = 0;
	for (i=0;i<15;i++) {
		if (i<3) {
			rowNumX = 0;
			columnNumX = i;
		} else if (i<6) {
			rowNumX = 1;
			columnNumX = i-3;
		} else if (i<9) {
			rowNumX = 2;
			columnNumX = i-6;
		} else if (i<12) {
			rowNumX = 3;
			columnNumX = i-9;
		} else if (i<15) {
			rowNumX = 4;
			columnNumX = i-12;
		}
		if ((grid[columnNumX][rowNumX] == "filled")&&(grid[columnNumX+1][rowNumX] == "filled")&&(grid[columnNumX+2][rowNumX] == "filled")) {
			vx[i] = "filled";
			console.log("xfilled");
		}
	}

	//check for numbers combinations
	var found1 = false;
	var found2 = false;
	var found3 = false;
	var found4 = false;
	var found5 = false;
	var found6 = false;
	var found7 = false;
	var found8 = false;
	var found9 = false;

	for (i=0;i<10;i++) {
		if ((vy[i*3] == "filled")&&(vy[i*3+2] == "filled")) {
			console.log(1);
			found1 = true;
		}
		
		if ((vy[i*3+6] == "filled")&&(vy[i*3+2] == "filled")&&(vx[i] == "filled")&&(vx[i+6] == "filled")&&(vx[i+12] == "filled")) {
			console.log(2);
			found2 = true;
		}
		
		if ((vx[i] == "filled")&&(vx[i+6] == "filled")&&(vx[i+12] == "filled")&&(vy[i*3+7])) {
			console.log(3);
			found3 = true;
		}
		
		if ((vy[i*3+8] == "filled")&&(vy[i*3] == "filled")&&(vx[i+6] == "filled")&&(vy[i*3+7] == "filled")) {
			console.log(4);
			found4 = true;
		}
		
		if ((vy[i*3+8] == "filled")&&(vy[i*3] == "filled")&&(vx[i] == "filled")&&(vx[i+6] == "filled")&&(vx[i+12] == "filled")) {
			console.log(5);
			found5 = true;
		}
		
		if ((vy[i*3+8] == "filled")&&(vy[i*3] == "filled")&&(vy[i*3+2] == "filled")&&(vx[i] == "filled")&&(vx[i+6] == "filled")&&(vx[i+12] == "filled")) {
			console.log(6);
			found6 = true;
		}
		
		if ((vy[i*3+6] == "filled")&&(vy[i*3+8] == "filled")&&(vx[i] == "filled")) {
			console.log(7);
			found7 = true;
		}
		
		if ((vx[i] == "filled")&&(vx[i+6] == "filled")&&(vx[i+12] == "filled")&&(vy[i*3] == "filled")&&(vy[i*3+2]=="filled")&&(vy[i*3+6]=="filled")&&(vy[i*3+8]=="filled")) {
			console.log(8);
			found8 = true;
		}
		
		if ((vy[i*3+8] == "filled")&&(vy[i*3] == "filled")&&(vx[i] == "filled")&&(vx[i+6] == "filled")&&(vx[i+12] == "filled")&&(vy[i*3+6]=="filled")) {
			console.log(9);
			found9 = true;
		}
	}
	
	var numberFound = 0;
	if (found8) {
		numberFound = 8;
	} else if (found6) {
		numberFound = 6;
	} else if (found9) {
		numberFound = 9;
	} else if (found2) {
		numberFound = 2;
	} else if (found3) {
		numberFound = 3;
	} else if (found5) {
		numberFound = 5;
	} else if (found4) {
		numberFound = 4;
	} else if (found7) {
		numberFound = 7;
	} else if (found1) {
		numberFound = 1;
	}
	
	return numberFound
}

var locked = false;
function mousePressed() {
	locked = true
	console.log(mouseX/columnGap);
	mx = parseInt(mouseX/columnGap);
	my = parseInt(mouseY/columnGap);
	grid[mx][my] = "filled";
}

function mouseDragged() {
	if (locked) {
		console.log(mouseX/columnGap);
		mx = parseInt(mouseX/columnGap);
		my = parseInt(mouseY/columnGap);
		grid[mx][my] = "filled";
	}
}

function mouseReleased() {
	locked = false;
}
