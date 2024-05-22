let width = 600;
let ySpacing = 60;
let xSpacing = width / 8;
let r = 25;

// Colors
let colorYellow = [255, 126, 71];
let colorPurple = [168, 85, 247];

// Neural Network Data
let minWeight = 0;
let maxWeight = 1;
let minBias = 0;
let maxBias = 1;
let data = {};

function setup() {
	createCanvas(width, 600);
}

function draw() {
	background(255);
	drawOutput(data.hidden2, data.hidden2, data.output, data.bias2, 7);
	drawHidden(data.hidden1, data.weight2, data.hidden2, data.bias2, 5, 2);
	drawHidden(data.inputs, data.weight1, data.hidden1, data.bias1, 3, 1);
	drawInput(data);
}

function drawInput(data) {
	//  draw input text in above the input layer
	textAlign(CENTER, CENTER);
	noStroke();
	fill(0);
	text("Input Layer", xSpacing, ySpacing - 30);
	index = 0;

	for (index = 0; index <= 8; index++) {
		if (index == 4) {
			// draw 3 vertical dot
			fill(0);
			ellipse(xSpacing, ySpacing - 10 + index * ySpacing, 3, 3);
			ellipse(xSpacing, ySpacing + index * ySpacing, 3, 3);
			ellipse(xSpacing, ySpacing + 10 + index * ySpacing, 3, 3);
		} else {
			noStroke(100);
			fill(255);
			ellipse(xSpacing, ySpacing + index * ySpacing, r, r);
			stroke(100);
			fill(
				colorYellow[0],
				colorYellow[1],
				colorYellow[2]
				// data.inputs[index] * 255
			);
			ellipse(xSpacing, ySpacing + index * ySpacing, r, r);
			// add text
			// noStroke();
			// fill(0);
			// textAlign(CENTER, CENTER);
			// text(data.inputs[index], xSpacing, ySpacing + index * ySpacing);
		}
	}
}

function drawHidden(
	fromHidden,
	weight,
	hidden,
	bias,
	indexColumn,
	hiddenIndex
) {
	// draw text
	textAlign(CENTER, CENTER);
	noStroke();
	fill(0);
	text(`Hidden Layer ${hiddenIndex}`, xSpacing * indexColumn, ySpacing - 30);
	len = 0;
	index = 0;

	// set length of hidden layer
	if (hiddenIndex == 2) {
		len = 2;
	} else {
		len = 6;
	}

	// make weigth 3x6
	if (hiddenIndex == 2) {
		lastIndex = weight[0].length - 1;
		weight = [
			[
				data.weight2[0][1],
				data.weight2[0][2],
				data.weight2[0][3],
				data.weight2[0][lastIndex - 2],
				data.weight2[0][lastIndex - 1],
				data.weight2[0][lastIndex],
			],
			[
				data.weight2[1][1],
				data.weight2[1][2],
				data.weight2[1][3],
				data.weight2[1][lastIndex - 2],
				data.weight2[1][lastIndex - 1],
				data.weight2[1][lastIndex],
			],
			[
				data.weight2[2][1],
				data.weight2[2][2],
				data.weight2[2][3],
				data.weight2[2][lastIndex - 2],
				data.weight2[2][lastIndex - 1],
				data.weight2[2][lastIndex],
			],
		];
	} else {
		// make weigth 6x8
		lastIndex = weight[0].length - 1;
		weight = [
			[
				data.weight1[0][0],
				data.weight1[0][1],
				data.weight1[0][2],
				data.weight1[0][3],
				data.weight1[0][4],
				data.weight1[0][lastIndex - 3],
				data.weight1[0][lastIndex - 2],
				data.weight1[0][lastIndex - 1],
				data.weight1[0][lastIndex],
			],
			[
				data.weight1[1][0],
				data.weight1[1][1],
				data.weight1[1][2],
				data.weight1[1][3],
				data.weight1[1][4],
				data.weight1[1][lastIndex - 3],
				data.weight1[1][lastIndex - 2],
				data.weight1[1][lastIndex - 1],
				data.weight1[1][lastIndex],
			],
			[
				data.weight1[2][0],
				data.weight1[2][1],
				data.weight1[2][2],
				data.weight1[2][3],
				data.weight1[2][4],
				data.weight1[2][lastIndex - 3],
				data.weight1[2][lastIndex - 2],
				data.weight1[2][lastIndex - 1],
				data.weight1[2][lastIndex],
			],
			[
				data.weight1[3][0],
				data.weight1[3][1],
				data.weight1[3][2],
				data.weight1[3][3],
				data.weight1[3][4],
				data.weight1[3][lastIndex - 3],
				data.weight1[3][lastIndex - 2],
				data.weight1[3][lastIndex - 1],
				data.weight1[3][lastIndex],
			],
			[
				data.weight1[4][0],
				data.weight1[4][1],
				data.weight1[4][2],
				data.weight1[4][3],
				data.weight1[4][4],
				data.weight1[4][lastIndex - 3],
				data.weight1[4][lastIndex - 2],
				data.weight1[4][lastIndex - 1],
				data.weight1[4][lastIndex],
			],
			[
				data.weight1[5][0],
				data.weight1[5][1],
				data.weight1[5][2],
				data.weight1[5][3],
				data.weight1[5][4],
				data.weight1[5][lastIndex - 3],
				data.weight1[5][lastIndex - 2],
				data.weight1[5][lastIndex - 1],
				data.weight1[5][lastIndex],
			],
		];
	}
	bias = [];

	// draw weights lines

	skipLine_from = 0;
	skipLine_to = 0;
	for (let i = 0; i < weight.length; i++) {
		skipLine_to = 0;
		for (let j = 0; j < weight[0].length; j++) {
			if (hiddenIndex == 2) {
				if (j >= 3) {
					stroke(100);
					drawBezierLine(
						xSpacing * (indexColumn - 2),
						ySpacing + j * ySpacing + ySpacing,
						xSpacing * indexColumn,
						ySpacing + i * ySpacing,
						weight[i][j]
					);
				} else {
					stroke(100);
					drawBezierLine(
						xSpacing * (indexColumn - 2),
						ySpacing + j * ySpacing,
						xSpacing * indexColumn,
						ySpacing + i * ySpacing,
						weight[i][j]
					);
				}
			}
			if (hiddenIndex == 1) {
				if (j >= 4) {
					skipLine_to = 0;
				}
				if (i >= 3) {
					skipLine_from = 0;
				}
				stroke(100);
				drawBezierLine(
					xSpacing * (indexColumn - 2),
					ySpacing + j * ySpacing + skipLine_to,
					xSpacing * indexColumn,
					ySpacing + i * ySpacing + skipLine_from,
					weight[i][j]
				);
			}
		}
	}

	index = 0;
	// draw hidden layer
	for (index = 0; index <= len; index++) {
		if (index == 3 && hiddenIndex == 1) {
			// draw 3 vertical dot
			fill(0);
			ellipse(indexColumn * xSpacing, ySpacing - 10 + index * ySpacing, 3, 3);
			ellipse(indexColumn * xSpacing, ySpacing + index * ySpacing, 3, 3);
			ellipse(indexColumn * xSpacing, ySpacing + 10 + index * ySpacing, 3, 3);
		} else {
			noStroke(100);
			fill(255);
			ellipse(indexColumn * xSpacing, ySpacing + index * ySpacing, r, r);
			stroke(100);
			fill(colorYellow[0], colorYellow[1], colorYellow[2], hidden[index] * 255);
			ellipse(indexColumn * xSpacing, ySpacing + index * ySpacing, r, r);
			// add text
			// noStroke();
			// fill(0);
			// textAlign(CENTER, CENTER);
			// text(hidden[i], xSpacing * indexColumn, ySpacing + i * ySpacing);
		}
	}
}

function drawOutput(fromHidden, weight, hidden, bias, indexColumn) {
	// draw text
	textAlign(CENTER, CENTER);
	noStroke();
	fill(0);
	text("Output Layer", xSpacing * indexColumn, ySpacing - 30);
	// draw weights lines
	for (let i = 0; i < hidden.length; i++) {
		for (let j = 0; j < fromHidden.length; j++) {
			drawBezierLine(
				xSpacing * (indexColumn - 2),
				ySpacing + j * ySpacing,
				xSpacing * indexColumn,
				ySpacing + i * ySpacing,
				weight[i][j]
			);
		}
	}

	// draw hidden layer
	for (let i = 0; i < hidden.length; i++) {
		for (let j = 0; j < fromHidden.length; j++) {
			noStroke(100);
			fill(255);
			ellipse(indexColumn * xSpacing, ySpacing + i * ySpacing, r, r);
			stroke(100);
			fill(colorYellow[0], colorYellow[1], colorYellow[2], hidden[i] * 255);
			ellipse(indexColumn * xSpacing, ySpacing + i * ySpacing, r, r);
			// add text
			noStroke();
			fill(0);
			textAlign(CENTER, CENTER);
			text(hidden[i], xSpacing * indexColumn, ySpacing + i * ySpacing);
		}
	}
}

function drawBezierLine(fromX, fromY, toX, toY, weightValue) {
	noFill();
	stroke((1 - (weightValue - minWeight) / (maxWeight - minWeight)) * 200);
	let midX = (fromX + toX) / 2;
	let p2 = createVector(midX, fromY);
	let p3 = createVector(midX, toY);
	bezier(fromX, fromY, p2.x, p2.y, p3.x, p3.y, toX, toY);
}
