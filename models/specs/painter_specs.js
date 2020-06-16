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
    
});