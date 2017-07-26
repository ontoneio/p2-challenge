var moment = require('moment');

module.exports = {

        month(date){
            var monthNames = ["JANUARY", "FEBRUARY",
            "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST",
            "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
            var time = new Date(date).getMonth()
            var time1 = time > 0 ? time - 1: time + 0 ;

            if (monthNames[time1] !== undefined) {
                return monthNames[time1]
    }          
} ,
        
        reverseSentence(str) {
            var splitRev = str.split(" ").reverse()
            return revSen = splitRev.join(" ") 
        },

        propNames(obj) {
            var pNames = Object.getOwnPropertyNames(obj).sort()
            return pNames        
        },

        filterBetween(arr, min, max) {
            arr.push(min, max);
            arr.sort()
            copy = arr.slice(arr.indexOf(min) + 1 , arr.indexOf(max))
            return copy
        }
}