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
                                tot_number: d.length,
                                max_age: d3.max(d, caclulateMaxAge)
                            }
                        })
    /*Rollup replaces the array by the original array, the length of the array country, and the max age of the country*/
                        .sortKeys(d3.ascending)
                        .entries(data)
    /*This function allows to separate the array into object according to countries in alphabetical order containing all athletes */
    
    console.log(byCountries)
    
    byCountries.sort(function(a, b){
            return d3.descending(a.values.tot_number, b.values.tot_number)
        })
    
    d3.select('svg')
        .selectAll('rect')
        .data(byCountries)
        .enter()
        .append('rect')
        .attr('x', function(d, i){
        return i * 3
        })
        .attr('y', function(d, y){
            return 400-d.values.tot_number
        })
        .attr('width', 2)
        .attr('height', 0)
        .attr('height', function(d, i){
            return d.values.tot_number
        })
    
//    d3.select('svg')
//        .selectAll('text')
//        .data(byCountries)
//        .enter()
//        .append('text')
//        .text(function(d, i){
//                return d.key
//            })
//        .attr('y', 410)
//        .attr('x', function(d, i){
//                return i * 150
//            })
    

})

