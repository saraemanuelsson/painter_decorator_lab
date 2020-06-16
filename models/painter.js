const Painter = function() {
    this.paintStock = []
};

Painter.prototype.numberOfPaintStock = function() {
    return this.paintStock.length;
};

Painter.prototype.addPaint = function(paint) {
    this.paintStock.push(paint);
};

module.exports = Painter