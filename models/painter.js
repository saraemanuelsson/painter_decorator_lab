const Painter = function() {
    this.paintStock = []
};

Painter.prototype.numberOfPaintStock = function() {
    return this.paintStock.length;
};

Painter.prototype.addPaint = function(paint) {
    this.paintStock.push(paint);
};

Painter.prototype.calculatePaintInStock = function() {
    let litresOfPaint = 0
    for (var paint of this.paintStock) {
        litresOfPaint += paint.litres
    };
    return litresOfPaint;
}; 

Painter.prototype.checkEnoughPaint = function(area) {
    if (this.calculatePaintInStock >= area) {
        return true
    } else {
        return false
    };
};



module.exports = Painter