import DiySet from "../diy-set.js";
import { expect } from "chai";

describe("DiySet", () => {
    
    it("should start the size with 0", () => {
        const set = new DiySet()
        expect(set.size).to.equal(0)
    })

    describe("add", () => {
        it("should increase size when a unique element is added", () => {
            const set = new DiySet()
            set.add("dog")
            expect(set.size).to.equal(1)
            set.add("cat")
            expect(set.size).to.equal(2)
        })

        it("should not increase in size when adding an element that already exists", () => {
            const set = new DiySet()
            expect(set.size).to.equal(0)
            set.add("dog")
            expect(set.size).to.equal(1)
            set.add("dog")
            expect(set.size).to.equal(1)
        })
    })

    describe("has", () => {
        it("should return false when provided value is not added yet", () => {
            const set = new DiySet()
            const result1 = set.has("cat")
            expect(result1).to.equal(false)
            set.add("dog")
            const result2 = set.has("cat")
            expect(result2).to.equal(false)
        })

        it("should return true when provided value is already added", () => {
            const set = new DiySet()
            set.add("dog")
            set.add("cat")
            const result = set.has("dog")
            expect(result).to.equal(true)
        })
    })

})