var data = d3.range(500).map(function(d, i){
    return {index:i, value:Math.random(), 
    other:Math.random()}
})
/* range is a helper method. A dict with randomnum as values and the value of range as keys is mapped to it*/

console.log(data)

var mapy = d3.scale.linear()
            .domain([0, 1])
            .range([0, 400])

var mapx = d3.scale.linear()
            .domain([0, 500])
            .range([0, 600])

var mapr = d3.scale.linear()
            .domain([0, 1])
            .range([0, 10])

var mapc = d3.scale.linear()
            .domain([0, 1])
            .range(['red', 'blue'])


//d3.select('body')
//    .selectAll('input')
//    /*it is also possible to selectAll html elements like input (not svg element like rect)*/
//    .data(data)
//    .enter()
//    .append('input')
//    .attr('type', 'checkbox')
//    .text(function(d, i){
//        return d
//    })
//    /*this will then create a list of html elements*/


d3.select('svg')
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', function(d, i){
        return mapr(0.0)
    })
    .attr('cx', function(d,i){
        return mapx(d.index)
    })
    .attr('cy', function(d,i){
        return mapy(d.value)
    })
    .style('fill', function(d, i){
        return mapc(d.value)
    })
    .transition()
    .duration(2000)
    .ease('exponential')
    .attr('cy', function(d, i){
        return mapy(0.5)
        })
    .attr('cx', function(d, i){
        return mapy(0.5)
        })
    .attr('r', function(d, i){
        return mapr(d.other)
        })
    .style('fill', function(d, i){
        return 'black'
        })


        
    
    
