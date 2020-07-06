
class Word {
    constructor(wordString) {
        this.wordString = wordString;
    }

    getWord() {
        return this.wordString;
    }

    getFileContentAsText(filePath) {
        let request = new XMLHttpRequest();
        request.open("GET", filePath, false);
        request.send(null);
        let text = request.responseText;
        return text;
    }

    getFileContentAsArray() {
        let content = this.getFileContentAsText("dictionary.txt");
        return content.split("\n");
    }

    getWordAndPhonemes() {
        let arrayContent = this.getFileContentAsArray();
        for (let i = 0; i < arrayContent.length; i++) {
            if (arrayContent[i].slice(0, this.getWord().length) == this.getWord().toUpperCase()) return arrayContent[i];
        }
    }

    getPronunciation() {
        let wordAndPhonemes = this.getWordAndPhonemes().split(/\s/);
        let phonemes = new Array();
        for(let i = 1; i < wordAndPhonemes.length; i++) {
            if(wordAndPhonemes[i] != "") phonemes.push(wordAndPhonemes[i]);
        }
        return phonemes;
    }

    getSimilarWords() {

    }

    getIdentical() {

    }

    getSimilarWordsWithSubPhonemes() {

    }

    getSimilarWordsWithPhonemes() {

    }

    getSpelling() {

    }

    toString() {

    }
}

let myWord = new Word("donut");
console.log(myWord.getPronunciation());

