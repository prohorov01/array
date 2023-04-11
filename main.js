const oneArray = prompt("Введіть довжину  масивів");
const threeArray = [];
function newArray(oneArray) {
  for (let i = 0; i < 1; i++) {
    const oneNumArray = [];
    for (let j = 0; j < oneArray; j++) {
      const inputArray = prompt(`Введіть значенн внутрішніх масивів ${j}`);
      oneNumArray.push(inputArray);
    }
    threeArray.push(oneNumArray);
  }
  return threeArray;
}
console.log(newArray(oneArray));

const NumbersArray = [63, 9, 256, 108, 4, 13, 54];

const sortingArray = NumbersArray.sort((a, b) => a - b);
console.log(sortingArray);

sortingArray.splice(1, 3);
console.log(sortingArray);
