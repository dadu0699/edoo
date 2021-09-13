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


function numberToWord(num) {
    if (num > 1000)
        return 'Only numbers under 1000 are allowed';

    if (num == 1000) return 'One thousand';
    if (num == 0) return 'Zero';

    const unitsInWords = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 11: 'eleven',
        12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        0: ''
    }

    const tensInWords = {
        1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty',
        6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'
    }

    const strNum = num.toString().split('').reverse();
    const hundreds = strNum.length === 3 ? `${unitsInWords[strNum[2]]} hundred and` : '';

    let tens = '';
    let itsTen = false;
    if (strNum.length >= 2) {
        const tw = parseInt(`${strNum[1]}${strNum[0]}`)
        if (tw >= 20 || tw == 10) {
            tens = tensInWords[strNum[1]]
        } else {
            tens = unitsInWords[tw]
            itsTen = true;
        }
    }

    const units = itsTen ? '' : `${unitsInWords[strNum[0]]}`;

    output = `${hundreds} ${tens} ${units}`.trim()
    output = output.charAt(0).toUpperCase() + output.slice(1);
    return output;
}


module.exports = { spin_words, zechendorf, numberToWord };