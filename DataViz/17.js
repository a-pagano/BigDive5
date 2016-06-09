d3.csv('athletes_sochi.csv', function(err, data){
    
    var calculateMaxAge = function(arr){
        return d3.max(arr, function(d, i){
            return d.age
        })
    }
    
    var byCountries = d3.nest()
                        .key(function(d, i){
                            return d.country
                            })
                        .rollup(function(d, i){
                            return {
                                total: d.length,
                                maxAge: calculateMaxAge(d)
                            }
                        })
                        .entries(data)
    console.log(byCountries)
                        
    d3.select('svg')
        .selectAll('rect')
        .data(byCountries)
        .enter()
        .append('rect')
        .attr('width', 9)
        .attr('x', function(d, i){
            return i * 10
        })
        .attr('y', function(d, i){
            return 400 - d.values.total
        })
        .attr('height', function(d, i){
            return d.values.total
        })
        
    d3.select('body')
        .append('button')
        .text('sort it')
        .on('click', function(){
        
        byCountries.sort(function(a, b){
            return d3.descending(a.values.total, b.values.total)
            })
        updateChart()
    })
    
        
    d3.select('body')
        .append('button')
        .text('sort by max')
        .on('click', function(){
        
        byCountries.sort(function(a, b){
            return d3.descending(a.values.maxAge, b.values.maxAge)
            })
        
        updateChart()
        
        })
    
    function updateChart(){
        
        d3.select('svg')
            .selectAll('rect')
            .data(byCountries)
            .transition()
            .duration(1000)
            .attr('height', function(d, i){
                return d.values.total
            })
            .attr('y', function(d, i){
                return 400 - d.values.total
            })
        
    }
        
})