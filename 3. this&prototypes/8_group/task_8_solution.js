const NOUNS = [,
    "house that Jack built.",
    "malt",
    "rat",
    "cat",
    "dog",
    "cow with the crumpled horn",
    "maiden all forlorn",
    "man all tattered and torn",
    "priest all shaven and shorn",
    "rooster that crowed in the morn",
    "farmer sowing his corn",
    "horse and the hound and the horn"
];

const VERBS = [,
    "lay in",
    "ate",
    "killed",
    "worried",
    "tossed",
    "milked",
    "kissed",
    "married",
    "woke",
    "kept",
    "belonged to"
];

export class House {
    static verse(n) {
        let verse = [`This is the ${NOUNS[n]}`];
        for (let i = n-1; i > 0; i--)
            verse.push(`that ${VERBS[i]} the ${NOUNS[i]}`);
        return verse;
    }

    static verses(start, end) {
        let rhyme = [];
        for (let i = start; i <= end; i++)
            rhyme.push(...this.verse(i), "");
        rhyme.pop();
        return rhyme;
    }
}
