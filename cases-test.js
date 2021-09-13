const casesTask1 = [
    { sentence: 'Hey fellow warriors', expected: 'Hey wollef sroirraw' },
    { sentence: 'This is a test', expected: 'This is a test' },
    { sentence: 'This is another test', expected: 'This is rehtona test' },
];

const casesTask2 = [
    { num: 10, expected: [8, 2] },
    { num: 46, expected: [34, 8, 3, 1] },
    { num: 100, expected: [89, 8, 3] },
];

const casesTask3 = [
    { num: 0, expected: 'Zero' },
    { num: 23, expected: 'Twenty three' },
    { num: 120, expected: 'One hundred and twenty' },
    { num: 215, expected: 'Two hundred and fifteen' },
    { num: 361, expected: 'Three hundred and sixty one' },
    { num: 403, expected: 'Four hundred and three' },
    { num: 528, expected: 'Five hundred and twenty eight' },
    { num: 1000, expected: 'One thousand' },
];

module.exports = { casesTask1, casesTask2, casesTask3 };