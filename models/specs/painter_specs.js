const assert = require("assert");
const Paint = require("../paint");
const Room = require("../room");
const Painter = require("../painter");

describe("Painter", function() {
    let painter
    let paint = new Paint(10);
    const morePaint = new Paint(38);
    const room = new Room(42);

    beforeEach(function() {
        painter = new Painter()
        painter.addPaint(paint);
        painter.addPaint(morePaint);
    });

    describe("Properties", function() {
        it("should start with an empty paint stock", function() {
            const newPainter = new Painter()
            const actual = newPainter.numberOfPaintStock();
            assert.strictEqual(actual, 0)
        });
    });

    describe("Methods", function() {

        it("should be able to add can to stock", function() {
            painter.addPaint(paint);
            const actual = painter.numberOfPaintStock();
            assert.strictEqual(actual, 3);
        });

        it("should be able to calculate total number of litres", function() {
            const actual = painter.calculatePaintInStock()
            assert.strictEqual(actual, 48);
        });

        it("should be able to check if there's enough paint for a room", function(){
            const actual = painter.checkEnoughPaint(room.area);
            assert.strictEqual(actual, true);
        });

        it("should remove empty paint cans", function() {
            paint.litres = 0
            painter.removeEmpty();
            const actual = painter.numberOfPaintStock();
            assert.strictEqual(actual, 1);
        });

        // it("should go through paint", function() {
        //     painter.goThroughPaint(20);
        //     const actualTotalPaint = painter.calculatePaintInStock();
        //     const actualStock = painter.numberOfPaintStock();
        //     assert.strictEqual(actualTotalPaint, 28);
        //     assert.strictEqual(actualStock, 1);
        // });

        // it("should be able to paint room", function() {
        //     painter.paintRoom(room);
        //     const actualRoom = room.painted;
        //     const actualPainterStock = painter.numberOfPaintStock();
        //     const actualPainterTotal = painter.calculatePaintInStock();
        //     assert.strictEqual(actualRoom, true);
        //     assert.strictEqual(actualPainter, 1);
        //     assert.strictEqual(actualPainterTotal, 6);
        //     // test if litres have gone down in remaining can
        // });
    });
    
});