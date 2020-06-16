const assert = require("assert");
const Paint = require("../paint");
const Room = require("../room");
const Painter = require("../painter");

describe("Painter", function() {
    let painter
    const paint = new Paint(10);
    const room = new Room(42);

    beforeEach(function() {
        painter = new Painter()
    });

    describe("Properties", function() {
        it("should start with an empty paint stock", function() {
            const actual = painter.numberOfPaintStock();
            assert.strictEqual(actual, 0)
        });
    });

    describe("Methods", function() {
        it("should be able to add can to stock", function() {
            painter.addPaint(paint);
            const actual = painter.numberOfPaintStock();
            assert.strictEqual(actual, 1);
        });

        it("should be able to calculate total number of litres", function() {
            const morePaint = new Paint(5);
            painter.addPaint(paint);
            painter.addPaint(morePaint);
            const actual = painter.calculatePaintInStock()
            assert.strictEqual(actual, 15);
        });

        it("should be able to check if there's enough paint for a room", function(){
            const actual = painter.checkEnoughPaint(room.area);
            assert.strictEqual(actual, false);
        });
    });
    
});