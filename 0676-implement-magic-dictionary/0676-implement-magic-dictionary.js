class MagicDictionary {
    constructor() {
        this.words = new Set();
    }

    buildDict(dictionary) {
        this.words = new Set(dictionary);
    }

    search(searchWord) {
        for (const word of this.words) {
            if (word.length !== searchWord.length) continue;
            let diff = 0;
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== searchWord[i]) diff++;
                if (diff > 1) break;
            }
            if (diff === 1) return true;
        }
        return false;
    }
}