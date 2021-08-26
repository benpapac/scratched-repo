//IS HE SANE?
console.log("It's aLIIIIIIVE");

//CONSTANTS
const rowArray = ['one', 'two', 'three'];
const colArray = ['A', 'B', 'C', 'D', 'E'];

const squareA = document.querySelector('[data-row= one] [data-column= A]');

const Pawn = document.createElement('a');
Pawn.classList.add('pawn');

//STATE Variables

//CREATE PAWNS, assign them colors.

let bluePawnA = squareA.appendChild(Pawn);
bluePawnA.dataset.add('data-color= blue');
bluePawnA.id = 'blue-pawn-a';

//Movements

function oldRowIndex(oldSquare) {
	let oldRow = oldSquare.parentElement;
	let oldRowIndex = rowArray.indexOf(oldRow.dataset.row);
	return oldRowIndex;
}

function oldColumnIndex(oldSquare) {
	let oldColumn = bluePawnA.parentElement;
	let oldColumnIndex = colArray.indexOf(oldColumn.dataset.column);
	return oldColumnIndex;
}

//MoveRows

function oneUpOrRight(thisIndex, thisArray) {
	let newIndex = thisIndex + 1;
	let newChoice = thisArray[newIndex];
	return newChoice;
}

function twoUpOrRight(thisIndex, thisArray) {
	let newIndex = thisIndex + 2;
	let newChoice = thisArray[newIndex];
	return newChoice;
}

function oneDownOrLeft(thisIndex, thisArray) {
	let newIndex = thisIndex - 1;
	let newChoice = thisArray[newIndex];
	return newChoice;
}
function twoDownOrLeft(thisIndex, thisArray) {
	let newIndex = thisIndex - 2;
	let newChoice = thisArray[newIndex];
	return newChoice;
}

//Higher Order Movements
function pawnForwardOnce(thisPawn) {
	let oldSquare = thisPawn.parentElement;

	let newRow = oneUpOrRight(oldRowIndex(oldSquare), rowArray);
	let newColumn = oldSquare.dataset.column;

	let newSquare = document.querySelector(
		`[data-row= ${newRow}] [data-column= ${newColumn}]`
	);
	return (thisPawn = newSquare.appendChild(Pawn));
}

function pawnForwardTwice(thisPawn) {
	let oldSquare = thisPawn.parentElement;

	let newRow = twoUpOrRight(oldRowIndex(oldSquare), rowArray);
	let newColumn = oldSquare.dataset.column;

	let newSquare = document.querySelector(
		`[data-row= ${newRow}] [data-column= ${newColumn}]`
	);
	return (thisPawn = newSquare.appendChild(Pawn));
}

function pawnBackOnce(thisPawn) {
	let oldSquare = thisPawn.parentElement;

	let newRow = oneDownOrLeft(oldRowIndex(oldSquare), rowArray);
	let newColumn = oldSquare.dataset.column;

	let newSquare = document.querySelector(
		`[data-row= ${newRow}] [data-column= ${newColumn}]`
	);
	return (thisPawn = newSquare.appendChild(Pawn));
}

function pawnBackTwice(thisPawn) {
	let oldSquare = bluePawnA.parentElement;

	let newRow = twoDownOrLeft(oldRowIndex(oldSquare), rowArray);
	let newColumn = oldSquare.dataset.column;

	let newSquare = document.querySelector(
		`[data-row= ${newRow}] [data-column= ${newColumn}]`
	);
	return (thisPawn = newSquare.appendChild(Pawn));
}

function pawnRightOnce(thisPawn) {
	let oldSquare = thisPawn.parentElement;

	let newRow = oldSquare.parentElement.dataset.row;
	let newColumn = oneUpOrRight(oldColumnIndex(oldSquare), colArray);

	let newSquare = document.querySelector(
		`[data-row= ${newRow}] [data-column= ${newColumn}]`
	);
	return (thisPawn = newSquare.appendChild(Pawn));
}

function pawnRightTwice(thisPawn) {
	let oldSquare = bluePawnA.parentElement;

	let newRow = oldSquare.parentElement.dataset.row;
	let newColumn = twoUpOrRight(oldColumnIndex(oldSquare), colArray);

	let newSquare = document.querySelector(
		`[data-row= ${newRow}] [data-column= ${newColumn}]`
	);
	return (thisPawn = newSquare.appendChild(Pawn));
}

function pawnLeftOnce(thisPawn) {
	let oldSquare = thisPawn.parentElement;

	let newRow = oldSquare.parentElement.dataset.row;
	let newColumn = oneDownOrLeft(oldRowIndex(oldSquare), colArray);
	console.log(oldRowIndex(oldSquare));

	let newSquare = document.querySelector(
		`[data-row= ${newRow}] [data-column= ${newColumn}]`
	);
	return (thisPawn = newSquare.appendChild(Pawn));
}

function pawnLeftTwice(thisPawn) {
	let oldSquare = bluePawnA.parentElement;

	let newRow = oldSquare.parentElement.dataset.row;
	let newColumn = twoDownOrLeft(oldColumnIndex(oldSquare), colArray);

	let newSquare = document.querySelector(
		`[data-row= ${newRow}] [data-column= ${newColumn}]`
	);
	return (thisPawn = newSquare.appendChild(Pawn));
}

blueForwardTwice();
blueRightOnce();
blueBackOnce();
blueForwardOnce();

// blueForwardOnce();
blueRightTwice();
// blueBackTwice();
// blueLeftOnce();
// blueLeftTwice();

//Movement Cards
