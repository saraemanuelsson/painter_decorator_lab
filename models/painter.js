const Painter = function() {
    this.paintStock = []
};

Painter.prototype.addPaint = function(paint) {
    this.paintStock.push(paint);
};

module.exports = Painter