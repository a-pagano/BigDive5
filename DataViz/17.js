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
            return 420 / (byCountries.length-1) * i 
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
        updateChart(byCountries)
    })
    
        
    d3.select('body')
        .append('button')
        .text('sort by max')
        .on('click', function(){
        
        byCountries.sort(function(a, b){
            return d3.descending(a.values.maxAge, b.values.maxAge)
            })
        
        updateChart(byCountries)
        
        })
    
    d3.select('body')
        .append('button')
        .text('filter > 30')
        .on('click', function(){
        
        var filtered = byCountries.filter(function(d, i){
            return d.values.total > 30
            })
        
        updateChart(filtered)
//        since the filter creates a new collection, passing it to updateChart is needed
        
        })
    
    
    function updateChart(data){
        
        d3.select('svg')
            .selectAll('rect')
            .data(data)
            .transition()
            .duration(1000)
            .attr('width', function(d, i){
            return 420 / data.length
            })
            .attr('x', function(d, i){
            return 420 / (data.length-1) * i 
            })
            .attr('height', function(d, i){
                return d.values.total
            })
            .attr('y', function(d, i){
                return 400 - d.values.total
            })
        
        d3.select('svg')
            .selectAll('rect')
            .data(data)
            .exit()
            .transition()
            .duration(1000)
            .style('opacity', 0)
            .remove()
//        this block is to update the canvas by removing countries that have been filtered out
    }
        
})