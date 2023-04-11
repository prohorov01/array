const Arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
//Знайти суму та кількість позитивних елементів.
const positive = Arr.filter(function (number) {
  return number > 0;
});
function sunArray(positive) {
  let sum = 0;

  for (let i = 0; i < positive.length; i++) {
    sum += positive[i];
  }
  return sum;
}
console.log("Positive number", positive.length);
console.log("Sum", sunArray(positive));

//Знайти мінімальний елемент масиву та його порядковий номер.
const minimum = Math.min(...Arr);
console.log("minimum", minimum);
console.log("minimum", Arr.indexOf(minimum) + 1);

// Знайти максимальний елемент масиву та його порядковий номер.
const maximum = Math.max(...Arr);
console.log("maximum", maximum);
console.log("maximum", Arr.indexOf(maximum) + 1);

// Визначити кількість негативних елементів.
const negative = Arr.filter(function (number) {
  return number < 0;
});
console.log("negative number", negative.length);

// Знайти кількість непарних позитивних елементів.
const unpaired = Arr.filter(function (number) {
  return number > 0 && number % 2 !== 0;
});
console.log("unpaired number", unpaired.length);

// Знайти кількість парних позитивних елементів.
const paired = Arr.filter(function (number) {
  return number > 0 && number % 2 === 0;
});
console.log("paired number", paired.length);

// Знайти суму парних позитивних елементів.
function sunArray(paired) {
  let sum = 0;
  for (let i = 0; i < paired.length; i++) {
    sum += paired[i];
  }
  return sum;
}
console.log("sum paired", sunArray(paired));

// Знайти суму непарних позитивних елементів.
function sunArray(unpaired) {
  let sum = 0;
  for (let i = 0; i < unpaired.length; i++) {
    sum += unpaired[i];
  }
  return sum;
}
console.log("sum unpaired", sunArray(unpaired));

// Знайти добуток позитивних елементів.
function multArray(positive) {
  let mult = 1;
  for (let i = 0; i < positive.length; i++) {
    mult = mult * positive[i];
  }
  return mult;
}
console.log("multiplication", multArray(positive));

// Знайти найбільший серед елементів масиву, ост альні обнулити.
const powArray = Arr.map((number) => {
  if (number < maximum) {
    return 0;
  } else return maximum;
});
console.log("powArray", powArray);
