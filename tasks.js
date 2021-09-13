function spin_words(sentence) {
    const words = sentence.split(' ').map(w => {
        return w.length >= 5
            ? w.split('').reverse().join('')
            : w;
    });

    return words.join(' ');
}

module.exports = { spin_words };