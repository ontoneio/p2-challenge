const funk = require('../functions');
const expect = require('chai').expect;




describe("Phase 2 part-1 functions", 
function() {

    describe("month()", function() {
        it("Returns month name of given date object", 
        function() {

            let testDate1 = new Date(1987, 1, 1)
            let testDate2 = new Date(2017, 04, 24)

            var monthResult1 = funk.month(testDate1)
            var monthResult2 = funk.month(testDate2)

            expect(monthResult1).to.be.string('JANUARY')
            expect(monthResult2).to.be.string('APRIL')
            
        })
    })

    describe("reverseSentence()", function() {
        it("Reverses the given string of characters", 
        function() {
            var resultPass1 = funk.reverseSentence("The sun comes up.")
            var resultPass2 = funk.reverseSentence("Take names and chew bubblegum")

            expect(resultPass1).to.have.string("up. comes sun The")
            expect(resultPass2).to.have.string("bubblegum chew and names Take")
        })
    })

    describe("propNames()", function() {
        it("Lists all properties of an object in alphabetical order", 
        function() {
            var testObj1 = { 'C': 3, 'D': 4, 'B': 2, 'A': 1 }
            var testObj2 = { 'Z': 3, 'X': 4, 'Y': 2, 'T': 1 }
            var testObj3 = { 'E-bay': 3, 'Yahoo': 4, 'Google': 2, 'Amazon': 1 }

            var resultNames1 = funk.propNames(testObj1)
            var resultNames2 = funk.propNames(testObj2)
            var resultNames3 = funk.propNames(testObj3)
            
            expect(resultNames1).to.be.an('array').to.have.members(['A', 'B', 'C', 'D'])
            expect(resultNames2).to.be.an('array').to.have.members(['T', 'X', 'Y', 'Z'])
            expect(resultNames3).to.be.an('array').to.have.members(['Amazon', 'E-bay', 'Google', 'Yahoo'])
        })
    })

    describe("filterBetween()", function() {
        it("returns a new array with only the elements after min alphabetically and before max.",
         function() {

            var animals = ['pig', 'rat', 'cat', 'dog', 'mice', 'ant', 'zebra', 'goat', 'whale']
            var animals1 = ['pig', 'rat', 'cat', 'dog', 'mice', 'ant', 'zebra', 'goat', 'whale']

            var filResults1 = funk.filterBetween(animals, 'demon', 'pug')
            var filResults2 = funk.filterBetween(animals1, 'lice', 'xantus')

            expect(filResults1).to.include.ordered.members(['dog', 'goat', 'mice', 'pig'])
            expect(filResults2).to.include.ordered.members(['mice', 'pig', 'rat', 'whale'])
        })
    })
} )