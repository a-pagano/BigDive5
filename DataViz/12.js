d3.csv('athletes_sochi.csv', function(err, data){
    
    console.log(data)
    
   var caclulateMaxAge = function(d, i){
                                         return d.age
                                         }
    
    var byCountries = d3.nest()
                        .key(function(d, i){
                            return d.country
                        })
                        .rollup(function(d, i){
                            return {
                                athletes: d,
                                tot_number: d.value.length,
                                max_age: d3.max(d, caclulateMaxAge)
                            }
                        })
    /*Rollup replaces the array by the original array, the length of the country, and the max age of the country*/
    
//                        .sortKeys(d3.ascending)
//                        .key(function(d, i){
//                            return d.gender
//                        })
                        .sortKeys(d3.ascending)
                        .entries(data)
    /*This function allows to separate the array into object according to countries in alphabetical order containing all athletes */
    
    console.log(byCountries)

})
