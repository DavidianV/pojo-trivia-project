/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

//** climate-data array [{key(id):num, key(city):string, key(country):string, key(monthlyAvg):{BUNCHA objects}]
//?--------------------------------------------------------------
/* 01. `listAllCitiesWithCountries`
What are all of the cities included in the data set?

Write a function, `listAllCitiesWithCountries` that returns an array of all of
the cities in the data set, formatted in "city, country" format.

For example, it should return:
[ "Amsterdam, Netherlands", "Athens, Greece", ...plus 103 more cities ]
*/
//?--------------------------------------------------------------

// **Jakes Example 1
// const listAllCitiesWithCountries = (arr) => arr.map(obj => obj.city + ', ' + obj.country);
// **Jakes Example 2
// const listAllCitiesWithCountries = arr => {
//   const newArr = [];
//   arr.forEach(obj => newArr.push(obj['city] + ', ' + obj['country']));
//   return newArr;
// }

// Your code here
const listAllCitiesWithCountries = (climateData) => {
    const cityCountry = climateData.map(location => location.city + ', ' + location.country );
    return cityCountry;
}
//[City, Country]
//?--------------------------------------------------------------
/* 02. `listAllUsCities`
What are all of the United States cities included in the data set?

Write a function, `listAllUsCities` that returns an array of all of
the United States cities in the data set, formatted in "city, country" format.

For example, it should return:
[ 'Atlanta GA, United States', 'Austin TX, United States', ...plus more cities ]
*/

//?--------------------------------------------------------------

// **Jakes Example 1
// const listAllUsCities = arr => {
//   const usCities = arr.filter((obj) => obj.country === 'United States');
//   return usCities.map(obj => obj.city + ', ' + obj.country);
//OR return listAllCitiesWithCountries(usCities);
// };


const listAllUsCities = (climateData) => {
    const cityCountry = listAllCitiesWithCountries(climateData);
    return cityCountry.filter(location => location.includes('United States')); 
}
//cityCountry.filter countries === 'Unites States'
// Your code here


//?--------------------------------------------------------------

/* 03. `findDuplicates` What cities are included more than once in the data?

Write a function, `findDuplicates` that finds all duplicate cities. Return an
object including every city name, pointing to an array of IDs for that city.

For example, if `Athens` showed up only once with an id of 2, and 'Mexico City'
was duplicated in id 3, 7, and 9, the returned object should look like:
{ 'Athens: [ 2 ], 'Mexico City': [ 3, 7, 9 ] }
*/
//?--------------------------------------------------------------
// final return is {} with City Name : ['Id' key]
// if City is already in our return object, push 'Id' to its corresponding array of ID's
// add City : Id

// **Jakes Example
// const findDuplicates = (arr) => {
//   const trackerObj = {};
//   arr.forEach(obj => {
//     const city = obj.city;
//     if (trckerObj[city] === undefined) {
//       trackerObj[city] = [id]; 
//     } else {
//          trackerObj[city].push(id);
//       }
//   });  
//   return trackerObj;
// };


const findDuplicates = function(climateData) {
    const cityIds = {};
    climateData.forEach(obj => {
        id = obj.id;
        city = obj.city;
        if (cityIds[city] === undefined) {
            cityIds[city] = [id];
        } else {
            cityIds[city].push(id);
        }
    });
    return cityIds;
};


// Your code here


//?--------------------------------------------------------------

/* 04. `returnDuplicate` Which city object should be corrected in
the data set?

Write a function, `returnDuplicate` that finds the ONE duplicated city,
and returns the data (object) of the last instance of that city.

For example, if `Paris` showed up twice with an id of 2 and 5, the function
should and return the object with the id of 5.

HINT: Use documentation to research the `find()` method in JavaScript. You may,
but do not have to, use this method to solve this problem.
*/
//?--------------------------------------------------------------
const returnDuplicate = function() {};
// Your code here
//?--------------------------------------------------------------

/* 05. `correctDuplicate` Correct the city name of the duplicated city.

Write a function, `correctDuplicate` that finds the ONE duplicated city,
and changes the name of the city to the name provided as a second argument.

For example, if `Paris` showed up twice with an id of 2 and 5, calling
correctDuplicate(climateData, "Nice"), should change the city for the object
with id of 5 to 'Nice' and then return that object with the corrected city name.

HINT: Can you use functions you have already written to help solve this problem?
*/
//?--------------------------------------------------------------
const correctDuplicate = function() {};
// Your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ listAllCitiesWithCountries, listAllUsCities, findDuplicates,
    returnDuplicate, correctDuplicate ];