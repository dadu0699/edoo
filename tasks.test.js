const tasks = require('./tasks');
const { casesTask1 } = require('./cases-test');


describe('Task1 - Spin Words', () => {
    test('should return the sentence with the words of length greater than 5 reversed', () => {
        casesTask1.forEach(c => {
            const result = tasks.spin_words(c.sentence)
            expect(c.expected).toBe(result);
        });
    });
});