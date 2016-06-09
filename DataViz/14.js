d3.csv('athletes_sochi.csv', function(err, data){
    
    var byCountriesandGender = d3.nest()
                        .key(function(d, i){
                            return d.country
                        })
                        .key(function(d, i){
                            return d.gender
                        })
//                        .rollup(function(leaves){
//                            if(leaves[1]){
//                                return { original: leaves, 
//                                        tot_males: leaves.length,
//                                        tot_females: leaves.length}
//                            }else{
//                                return { original: leaves,
//                                        tot_males: leaves.length}
//                                }
//                            })
// doesnt work TODO: fix it
                        .entries(data)
    
    console.log(byCountriesandGender)
    
     byCountriesandGender.sort(function(a, b){
            return d3.descending(a.values.length, b.values.length)
        })
    
    var groups = d3.select('svg')
                    .selectAll('svg')
                    .data(byCountriesandGender)
                    .enter()
                    .append('g')
                    .attr('transform', function(d, i){
                        return 'translate(' + i*20 + ', 0)' 
                    })
    

    //male rect
    groups.append('rect')
        .attr('width', 19)
        .attr('height', function(d, i){
            return d.values[0].values.length
        })
        .attr('y', function(d, y){
            return 400-d.values[0].values.length
        })
        .style('fill', 'blue')
    
    //female rect
    groups.append('rect')
        .attr('width', 19)
        .attr('height', function(d, i){
            if(d.values[1]){
                return d.values[1].values.length
            }else{
                return 0
            }
        })
        .attr('y', function(d, y){
            if(d.values[1]){
                return 400-d.values[1].values.length
            }else{
                return 400
            }
        })
        .style('fill', 'yellow')
})