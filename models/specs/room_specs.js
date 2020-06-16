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
    })
})
