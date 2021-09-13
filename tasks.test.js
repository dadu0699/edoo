const tasks = require('./tasks');
const { casesTask1, casesTask2 } = require('./cases-test');


describe('Task1 - Spin Words', () => {
    test('should return the sentence with the words of length greater than 5 reversed', () => {
        casesTask1.forEach(c => {
            const expected = c.expected;
            const result = tasks.spin_words(c.sentence)
            expect(expected).toBe(result);
        });
    });
});

describe('Task2 - Zechendorf’s Theorem', () => {
    test('should return an empty list for the number 0', () => {
        const expected = [];
        const result = tasks.zechendorf(0);
        expect(expected).toEqual(result);
    });

    test('should return null for a negative number', () => {
        const expected = null;
        const result = tasks.zechendorf(-10);
        expect(expected).toBe(result);
    });

    test('should return a list with the representation of Zeckendorf', () => {
        casesTask2.forEach(c => {
            const expected = c.expected;
            const result = tasks.zechendorf(c.num)
            expect(expected).toEqual(result);
        });
    });
});