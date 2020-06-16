const assert = require("assert");
const Paint = require("../paint");
const Room = require("../room");
const Painter = require("../painter");

describe("Painter", function() {
    let painter

    beforeEach(function() {
        painter = new Painter()
    });

    describe("Properties", function() {
        it("should start with an empty paint stock", function() {
            const actual = painter.paintStock.length;
            assert.strictEqual(actual, 0)
        });
    });

    describe("Methods", function() {
        it("should be able to add can to stock", function() {
            const paint = new Paint(10);
            painter.addPaint(paint);
            const actual = painter.paintStock.length;
            assert.strictEqual(actual, 1);
        });
    });
    
});