var moment = require('moment');

module.exports = {

        month(date){
            var monthNames = ["JANUARY", "FEBRUARY",
        "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST",
        "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
            var time = moment().month(date)
            var time = time - 1

            if (monthNames[time] !== undefined) {
                return monthNames[time]
            }           
                     
        },
        
        reverseSentence(str) {
            var splitRev = str.split(" ").reverse()
            return revSen = splitRev.join(" ") 
        },

        propNames(obj) {
            var pNames = obj.getOwnPropertyNames().sort()
            return pNames        
        },

        filterBetween(arr, min, max) {
            arr.push(min, max);
            arr.sort()
            copy = arr.slice(arr.indexOf(min) + 1 , arr.indexOf(max))
            return copy
        }
}