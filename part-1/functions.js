
module.exports = {

        month(date){
            var monthNames = ["JANUARY", "FEBRUARY",
        "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST",
        "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
            let time = new Date(date).getMonth()
            var month = ''
            monthNames == time ? return monthNames[time] : console.log(monthNames[time]); 
         
        },
        
        reverseSentence(str) {
            let splitRev = str.split(" ").reverse()
            return revSen = splitRev.join(" ")             
        },

        propNames(obj) {
            let pNames = Object.getOwnPropertyNames(obj).sort()
            return pNames        
        },

        filterBetween(min, max) {

        }
}