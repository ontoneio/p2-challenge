const clients = require('./clients');

var city = process.argv[2]

if (!city) {
    console.log('No argument to search by city');
} else {
    console.log(`Finding cities with name "${city}"...`);
    getCity(clients, city)
}   

function getCity(data, val) {

    var value = val
    var re = new RegExp(value, 'gi')
    var results = []

    for (var ind = 0; ind < data.length; ind++) {

        var Id = data[ind].id
        var Rep = data[ind].rep_name
        var Company = data[ind].company
        var City = data[ind].city
        var State = data[ind].state


        if(re.test(City) === true) {
            results.push({Id, Rep, Company, City, State})
        }
    }
    console.log(results);
}