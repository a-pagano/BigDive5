var dataset = [1, 4, 2]
var colors = ['lightgray', 'darkgray', 'black']

d3.select('svg')
    .append('line')
    .attr('x1', 10)
    .attr('y1', 400)
    .attr('x2', 10)
    .attr('y2', 400)
    .style('stroke', 'black')
    .transition()
    .duration(1000)
    .attr({
        x1: 10,
        y1: 0
    })
            
d3.select('svg')
    .append('line')
    .attr('x1', 10)
    .attr('y1', 400)
    .attr('x2', 10)
    .attr('y2', 400)
    .style('stroke', 'black')
    .transition()
    .duration(1000)
    .attr({
        x2: 400,
        y2: 400
    })


d3.select('svg')
    .attr('width', 500)
    .attr('height', 600)
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('width', 100)
    .attr('height', 0)
    .attr('y', 400)
    /*Anonymous function to dynamically change the value of y*/
    .transition()
    .ease('elastic')
    .duration(4000)
    .delay(function(d, i){
        return 1000 * i
    })
    .attr('fill', function(d,i){
        return colors[i]
    })
    .attr('y', function(d, i){
        return 400 - (d * 45)
    })
    .attr('height', function(d, i){
        return d * 45
    })
    .attr('x', function(d, i){
        return 20+(i*110)
    })
    /*d is the value of the element of the array and i is the index*/