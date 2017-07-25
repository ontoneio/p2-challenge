const funk = require('../functions');
const expect = require('chai').expect;




describe("Phase 2 part-1 functions", 
() => {

    describe("month()", () => {
        it("Returns month name of given date object", 
        () => {
            let testDate1 = new Date('January 1, 1987')
            let testDate2 = new Date(2005, 5, 14)
            let testDate3 = new Date('2017 04 24')

            var monthResult1 = funk.month(testDate1)
            var monthResult2 = funk.month(testDate2)
            var monthResult3 = funk.month(testDate3)

            expect(monthResult1).to.be.string('JANUARY')
            expect(monthResult2).to.be.string('MAY')
            expect(monthResult3).to.be.string('APRIL')
            
        })
            // console.log(monthResult1, monthResult2, monthResult3);
    })

    describe("reverseSentence()", () => {
        it("Reverses the given string of characters", 
        () => {
            var result = funk.reverseSentence("The sun comes up.")
            expect(result).to.have.string("up. comes sun The")
        })
            // console.log(result);
    })

    describe("propNames()", () => {
        it("Lists all properties of an object in alphabetical order", 
        () => {
            var testObj = { C: 3, D: 4, B: 2, A: 1 }

            var resultNames = funk.propNames(testObj)
            
            expect(resultNames).to.be.an('object').that.has.all.keys('A','B','C','D')
        })
            // console.log(resultNames);
    })

    describe("filterBetween()", () => {
        it("returns a new array with only the elements after min alphabetically and before max.",
         () => {
            var filResults = funk.filterBetween()
            expect()
        })
    })
} )