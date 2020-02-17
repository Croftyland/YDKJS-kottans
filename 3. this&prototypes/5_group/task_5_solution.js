const Isogram = function(word){
    this.word = word;
};

Isogram.prototype.isIsogram = function(){
    return ! this.word.toLowerCase().match(/([A-Za-z\u0080-\u00FF]).*\1/)
};

module.exports = Isogram;
