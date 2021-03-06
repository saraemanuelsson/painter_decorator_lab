const assert = require("assert");
const Room = require("../room");

describe("Room", function() {
    let room

    beforeEach(function() {
        room = new Room(42)
    });

    describe("Properties", function() {
        it("should have an area", function() {
            const actual = room.area;
            assert.strictEqual(actual, 42);
        });

        it("should start unpainted", function() {
            const actual = room.painted;
            assert.strictEqual(actual, false);
        });
    });

    describe("Methods", function() {
        it("should be able to get painted", function() {
            room.paint()
            const actual = room.painted;
            assert.strictEqual(actual, true);
        });
    });
});
