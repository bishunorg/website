String.prototype.toUnicode = function () {
    var result = "";
    for (var i = 0; i < this.length; i++) {
        // Assumption: all characters are < 0xffff
        result += "\\u" + ("000" + this[i].charCodeAt(0).toString(16)).substr(-4);
    }
    return result;
};
