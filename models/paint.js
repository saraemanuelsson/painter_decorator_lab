const Paint = function(litres) {
    this.litres = litres;
};

Paint.prototype.checkEmpty = function() {
    if (this.litres = 0) {
        return true
    } else {
        return false
    };
};

Paint.prototype.emptyCan = function() {
    this.litres = 0
};

Paint.prototype.decreaseLitres = function(litres) {
    return this.litres -= litres
};

module.exports = Paint