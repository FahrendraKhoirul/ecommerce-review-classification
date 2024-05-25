<template>
	<div id="vue-canvas"></div>
</template>

<script>
import P5 from "p5";
export default {
	name: "VueCanvas",
	mounted() {
		this.$nextTick(() => {
			this.initializeP5();
		});
	},
	props: {
		customData: {
			type: Object,
			default: () => ({
				inputs: [0, 0, 0, 0, 0, 0, 0, 0],
				weight1: [
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
				],
				hidden1: [0, 0, 0, 0, 0, 0],
				bias1: [0],
				weight2: [
					[0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0],
				],
				hidden2: [0, 0, 0],
				bias2: [0],
				output: [0],
			}),
		},
	},
	watch: {
		customData: {
			immediate: true,
			handler(newData) {
				this.initializeP5(newData);
			},
		},
	},
	data() {
		return {
			p5Instance: null,
		};
	},
	methods: {
		initializeP5(data = this.customData) {
			if (this.p5Instance) {
				this.p5Instance.remove(); // Remove the existing P5 instance
			}
			const script = function (p5) {
				var width = 600;
				var ySpacing = 60;
				var xSpacing = width / 8;
				var r = 30;

				// Colors
				let colorYellow = [255, 126, 71];
				let colorPurple = [168, 85, 247];

				// Neural Network Data
				let minWeight = 0;
				let maxWeight = 1;

				let lastIndex_w1_row = data.weight1.length - 1;
				let lastIndex_w1_col = data.weight1[0].length - 1;
				let lastIndex_w2_row = data.weight2.length - 1;
				let lastIndex_w2_col = data.weight2[0].length - 1;
				let weight_hl1 = [
					[
						data.weight1[0][0],
						data.weight1[0][1],
						data.weight1[0][2],
						data.weight1[0][3],
						data.weight1[0][lastIndex_w1_col - 3],
						data.weight1[0][lastIndex_w1_col - 2],
						data.weight1[0][lastIndex_w1_col - 1],
						data.weight1[0][lastIndex_w1_col],
					],
					[
						data.weight1[1][0],
						data.weight1[1][1],
						data.weight1[1][2],
						data.weight1[1][3],
						data.weight1[1][lastIndex_w1_col - 3],
						data.weight1[1][lastIndex_w1_col - 2],
						data.weight1[1][lastIndex_w1_col - 1],
						data.weight1[1][lastIndex_w1_col],
					],
					[
						data.weight1[2][0],
						data.weight1[2][1],
						data.weight1[2][2],
						data.weight1[2][3],
						data.weight1[2][lastIndex_w1_col - 3],
						data.weight1[2][lastIndex_w1_col - 2],
						data.weight1[2][lastIndex_w1_col - 1],
						data.weight1[2][lastIndex_w1_col],
					],
					[
						data.weight1[lastIndex_w1_row - 2][0],
						data.weight1[lastIndex_w1_row - 2][1],
						data.weight1[lastIndex_w1_row - 2][2],
						data.weight1[lastIndex_w1_row - 2][3],
						data.weight1[lastIndex_w1_row - 2][lastIndex_w1_col - 3],
						data.weight1[lastIndex_w1_row - 2][lastIndex_w1_col - 2],
						data.weight1[lastIndex_w1_row - 2][lastIndex_w1_col - 1],
						data.weight1[lastIndex_w1_row - 2][lastIndex_w1_col],
					],
					[
						data.weight1[lastIndex_w1_row - 1][0],
						data.weight1[lastIndex_w1_row - 1][1],
						data.weight1[lastIndex_w1_row - 1][2],
						data.weight1[lastIndex_w1_row - 1][3],
						data.weight1[lastIndex_w1_row - 1][lastIndex_w1_col - 3],
						data.weight1[lastIndex_w1_row - 1][lastIndex_w1_col - 2],
						data.weight1[lastIndex_w1_row - 1][lastIndex_w1_col - 1],
						data.weight1[lastIndex_w1_row - 1][lastIndex_w1_col],
					],
					[
						data.weight1[lastIndex_w1_row][0],
						data.weight1[lastIndex_w1_row][1],
						data.weight1[lastIndex_w1_row][2],
						data.weight1[lastIndex_w1_row][3],
						data.weight1[lastIndex_w1_row][lastIndex_w1_col - 3],
						data.weight1[lastIndex_w1_row][lastIndex_w1_col - 2],
						data.weight1[lastIndex_w1_row][lastIndex_w1_col - 1],
						data.weight1[lastIndex_w1_row][lastIndex_w1_col],
					],
				];

				let weight_hl2 = [
					[
						data.weight2[0][0],
						data.weight2[0][1],
						data.weight2[0][2],
						data.weight2[0][lastIndex_w2_col - 2],
						data.weight2[0][lastIndex_w2_col - 1],
						data.weight2[0][lastIndex_w2_col],
					],
					[
						data.weight2[1][0],
						data.weight2[1][1],
						data.weight2[1][2],
						data.weight2[1][lastIndex_w2_col - 2],
						data.weight2[1][lastIndex_w2_col - 1],
						data.weight2[1][lastIndex_w2_col],
					],
					[
						data.weight2[2][0],
						data.weight2[2][1],
						data.weight2[2][2],
						data.weight2[2][lastIndex_w2_col - 2],
						data.weight2[2][lastIndex_w2_col - 1],
						data.weight2[2][lastIndex_w2_col],
					],
				];

				p5.setup = (_) => {
					p5.createCanvas(document.getElementById("vue-canvas").offsetWidth, 600);
					p5.noLoop();
				};

				p5.draw = () => {
					p5.background(255);
					drawOutput(data.hidden2, data.hidden2, data.output, data.bias2, 7);
					drawHidden(data.hidden2, data.bias2, 5, 2);
					drawHidden(data.hidden1, data.bias1, 3, 1);
					drawInput(data);
				};

				function drawInput(data) {
					//  draw input text in above the input laye
					console.log("drawInput function is called");
					p5.textAlign(p5.CENTER, p5.CENTER);
					p5.noStroke();
					p5.fill(0);
					p5.text("Input Layer", xSpacing, ySpacing - 30);
					var index = 0;

					let indexForAccessInputValue = 0;
					for (index = 0; index <= 8; index++) {
						if (index == 4) {
							// draw 3 vertical dot
							p5.fill(0);
							p5.ellipse(xSpacing, ySpacing - 10 + index * ySpacing, 3, 3);
							p5.ellipse(xSpacing, ySpacing + index * ySpacing, 3, 3);
							p5.ellipse(xSpacing, ySpacing + 10 + index * ySpacing, 3, 3);
						} else {
							p5.noStroke(100);
							p5.fill(255);
							p5.ellipse(xSpacing, ySpacing + index * ySpacing, r, r);
							p5.stroke(100);
							p5.fill(
								colorYellow[0],
								colorYellow[1],
								colorYellow[2],
								data.inputs[index] * 255
							);
							p5.ellipse(xSpacing, ySpacing + index * ySpacing, r, r);
							// add text
							p5.noStroke();
							p5.fill(0);
							p5.textAlign(p5.CENTER, p5.CENTER);
							let val = roundToDecimal(data.inputs[indexForAccessInputValue], 2);
							p5.text(val, xSpacing, ySpacing + index * ySpacing);
							indexForAccessInputValue++;
						}
					}
				}

				function drawHidden(hidden, bias, indexColumn, hiddenIndex) {
					// draw text
					console.log("drawHidden function is called");
					p5.textAlign(p5.CENTER, p5.CENTER);
					p5.noStroke();
					p5.fill(0);
					p5.text(
						`Hidden Layer ${hiddenIndex}`,
						xSpacing * indexColumn,
						ySpacing - 30
					);
					var len = 0;
					var index = 0;

					// set length of hidden layer
					if (hiddenIndex == 2) {
						len = 2;
					} else {
						len = 6;
					}
					bias = [];

					var weight = [];
					if (hiddenIndex == 1) {
						weight = weight_hl1;
					} else {
						weight = weight_hl2;
					}

					// draw weights lines
					var skipLine_from = 0;
					var skipLine_to = 0;
					for (let i = 0; i < weight.length; i++) {
						skipLine_to = 0;
						for (let j = 0; j < weight[0].length; j++) {
							if (hiddenIndex == 2) {
								if (j >= 3) {
									p5.stroke(100);
									drawBezierLine(
										xSpacing * (indexColumn - 2),
										ySpacing + j * ySpacing + ySpacing,
										xSpacing * indexColumn,
										ySpacing + i * ySpacing,
										weight[i][j]
									);
								} else {
									p5.stroke(100);
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
									skipLine_to = ySpacing;
								}
								if (i >= 3) {
									skipLine_from = ySpacing;
								}
								p5.stroke(100);
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
					let indexForAccessWeightValue = 0;
					// draw hidden layer
					for (index = 0; index <= len; index++) {
						if (index == 3 && hiddenIndex == 1) {
							// draw 3 vertical dot
							p5.fill(0);
							p5.ellipse(
								indexColumn * xSpacing,
								ySpacing - 10 + index * ySpacing,
								3,
								3
							);
							p5.ellipse(indexColumn * xSpacing, ySpacing + index * ySpacing, 3, 3);
							p5.ellipse(
								indexColumn * xSpacing,
								ySpacing + 10 + index * ySpacing,
								3,
								3
							);
						} else {
							p5.noStroke(100);
							p5.fill(255);
							p5.ellipse(indexColumn * xSpacing, ySpacing + index * ySpacing, r, r);
							p5.stroke(100);
							p5.fill(
								colorYellow[0],
								colorYellow[1],
								colorYellow[2],
								hidden[indexForAccessWeightValue] * 255
							);
							p5.ellipse(indexColumn * xSpacing, ySpacing + index * ySpacing, r, r);
							// add text
							p5.noStroke();
							p5.fill(0);
							p5.textAlign(p5.CENTER, p5.CENTER);
							let val = roundToDecimal(hidden[indexForAccessWeightValue], 2);
							p5.text(val, xSpacing * indexColumn, ySpacing + index * ySpacing);
							indexForAccessWeightValue++;
						}
					}
				}

				function roundToDecimal(number, decimals) {
					const factor = 10 ** decimals;
					return Math.round(number * factor) / factor;
				}

				function drawOutput(fromHidden, weight, hidden, bias, indexColumn) {
					// draw text
					console.log("drawOutput function is called");
					p5.textAlign(p5.CENTER, p5.CENTER);
					p5.noStroke();
					p5.fill(0);
					p5.text("Output Layer", xSpacing * indexColumn, ySpacing - 30);
					// draw weights lines
					for (let i = 0; i < hidden.length; i++) {
						for (let j = 0; j < fromHidden.length; j++) {
							drawBezierLine(
								xSpacing * (indexColumn - 2),
								ySpacing + j * ySpacing,
								xSpacing * indexColumn,
								ySpacing + i * ySpacing,
								j == hidden[0] ? 1 : 0
							);
						}
					}

					// draw hidden layer
					for (let i = 0; i < hidden.length; i++) {
						for (let j = 0; j < fromHidden.length; j++) {
							p5.noStroke(100);
							p5.fill(255);
							p5.ellipse(indexColumn * xSpacing, ySpacing + i * ySpacing, r, r);
							p5.stroke(100);
							p5.fill(colorYellow[0], colorYellow[1], colorYellow[2], hidden[i] * 255);
							p5.ellipse(indexColumn * xSpacing, ySpacing + i * ySpacing, r, r);
							// add text
							p5.noStroke();
							p5.fill(0);
							p5.textAlign(p5.CENTER, p5.CENTER);
							p5.text(hidden[i], xSpacing * indexColumn, ySpacing + i * ySpacing);
						}
					}
				}

				function drawBezierLine(fromX, fromY, toX, toY, weightValue) {
					p5.noFill();
					p5.stroke((1 - (weightValue - minWeight) / (maxWeight - minWeight)) * 200);
					let midX = (fromX + toX) / 2;
					let p2 = p5.createVector(midX, fromY);
					let p3 = p5.createVector(midX, toY);
					p5.bezier(fromX, fromY, p2.x, p2.y, p3.x, p3.y, toX, toY);
				}
			};

			// NOTE: Use p5 as an instance mode
			// new P5(script, document.getElementById("vue-canvas"));
			const vueCanvasElement = document.getElementById("vue-canvas");
			if (vueCanvasElement) {
				this.p5Instance = new P5(script, vueCanvasElement);
			}
		},
	},
};
</script>
