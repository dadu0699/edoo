function spin_words(sentence) {
    const words = sentence.split(' ').map(w => {
        return w.length >= 5
            ? w.split('').reverse().join('')
            : w;
    });

    return words.join(' ');
}

function zechendorf(num) {
    if (num == 0) return [];
    if (num < 0) return null;

    let i = 2;
    let fibonacci = [];
    let auxFib = [0, 1];

    while (true) {
        auxFib[i] = auxFib[i - 1] + auxFib[i - 2];
        if (auxFib[i] >= num) break;

        fibonacci.push(auxFib[i]);
        i++;
    }

    let fibNum;
    let representation = [];

    while (fibonacci.length > 0) {
        fibNum = fibonacci.pop();
        if (num >= fibNum) {
            representation.push(fibNum);
            num -= fibNum
        }
    }

    return representation;
}


module.exports = { spin_words, zechendorf };