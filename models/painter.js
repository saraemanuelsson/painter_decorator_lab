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
    for (const paint of this.paintStock) {
        litresOfPaint += paint.litres
    };
    return litresOfPaint;
}; 

Painter.prototype.checkEnoughPaint = function(area) {
    if (this.calculatePaintInStock() >= area) {
        return true;
    } else {
        return false;
    };
};

Painter.prototype.removeEmpty = function() {
    not_empty_cans = [];
    for (const paint of this.paintStock) {
        if (paint.litres != 0) {
            not_empty_cans.push(paint)
        };
    };
    this.paintStock = not_empty_cans;
};

Painter.prototype.goThroughPaint = function(paint_needed) {
    for (const paint of this.paintStock) {
        if (paint_needed != 0) {
            if (paint_needed > paint.litres) {
                paint_needed -= paint.litres;
                paint.emptyCan();
            } else {
                paint.decreaseLitres(paint_needed);
            };
        };
    };
    this.removeEmpty();
};

Painter.prototype.paintRoom = function(room) {
    if (this.checkEnoughPaint() === true ) {
        room.painted = true;

    }
}



module.exports = Painter