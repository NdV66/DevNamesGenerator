const {VERBS, SUBJECTS} = require('./data/words');

function generateCommonSentence() {
    return `${prepareNameElement(SUBJECTS)}${prepareNameElement(VERBS)}Commit`;
}

function getRandomElement(data) {
    const maximum = data.length - 1;
    const minimum = 0;
    const position = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return data[position];
}

function toCamelCase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function prepareNameElement(data) {
    let name = getRandomElement(data);
    name = toCamelCase(name);
    return name;
}

const Generator = {
    generateCommonSentence,
};

module.exports = Generator;
