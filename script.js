// const gameArea = document.querySelector('.game');
// const gameBlock = document.createElement('div');

// gameArea.appendChild(gameBlock);

const addBlocks = function () {
	const gameArea = document.querySelector('.game');
	const gameBlock = document.createElement('div');
	gameBlock.classList.add('block');
	gameArea.appendChild(gameBlock);
	gameBlock.addEventListener('mouseover', function () {
		gameBlock.classList.add('hovered');
	});
};

for (let i = 0; i < 16 ** 2; i++) {
	addBlocks();
}
