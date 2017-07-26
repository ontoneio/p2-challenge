const clients = require('./clients');

var companyName = process.argv[2]

if (!companyName) {
    console.log('No argument to search by company');
} else {
    console.log(`Finding companies containing "${companyName}" in name...`)
    getCompany(clients, companyName)
    // console.log(clients);
}


function getCompany(data, val) {
    var value = val
    var re = new RegExp(value, 'gi')
    var results = []

    for (var ind = 0; ind < data.length; ind++) {

        var Id = data[ind].id
        var Company = data[ind].company
        var Phone = data[ind].phone


        if(re.test(Company) === true) {
            results.push({Id,Company,Phone})
        }
    }

    console.log(results);  

}


