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

module.exports = { casesTask1, casesTask2 };