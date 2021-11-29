//init userNumber
let userNumber = 16;
//create resizeButton attached to resizeButton HTML element
const resizeButton = document.getElementById('resizeButton');
//create gameGrid attached to gameGrid HTML element
const gameGrid = document.getElementById('gameGrid');
//check if button is being pressed
const logButton = function () {
	console.log(`you pressed the button, your number is ${userNumber}`);
};

//add blocks to gameGrid
const addBlocks = function () {
	const gameArea = document.getElementById(`gameGrid`);
	const gameBlock = document.createElement('div');
	gameBlock.classList.add('block');
	gameArea.appendChild(gameBlock);
	gameBlock.addEventListener('mouseover', function () {
		gameBlock.classList.add('hovered');
	});
};
//set grid rows and columns to match added blocks from userNumber
const changeGrid = function () {
	gameGrid.style.setProperty(
		'grid-template-rows',
		`repeat(${userNumber}, 1fr)`
	);
	gameGrid.style.setProperty(
		'grid-template-columns',
		`repeat(${userNumber}, 1fr)`
	);
};
//reset blocks before spawning new ones
const resetBlocks = function () {
	while (gameGrid.firstChild) {
		gameGrid.removeChild(gameGrid.firstChild);
	}
};
//reset button - click to change blocks
resizeButton.addEventListener('click', function () {
	userNumber = document.getElementById('userNumber').value;
	resetBlocks();
	changeGrid();
	for (let i = 0; i < userNumber ** 2; i++) {
		addBlocks();
	}
});

//init app
for (let i = 0; i < userNumber ** 2; i++) {
	addBlocks();
}
