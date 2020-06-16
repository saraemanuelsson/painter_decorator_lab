const assert = require("assert");
const Paint = require("../paint");

describe("Paint", function() {
    let paint

    beforeEach(function() {
        paint = new Paint(5)
    });

    describe("Properties", function() {
        it("should have litres of paint", function() {
            const actual = paint.litres;
            assert.strictEqual(actual, 5)
        });
    });

    describe("Methods", function(){
        it("should check if empty", function() {
            const actual = paint.checkEmpty();
            assert.strictEqual(actual, false);
        });

        it("should be able to empty itself", function() {
            paint.emptyCan()
            const actual = paint.litres
            assert.strictEqual(actual, 0)
        });
    });
});