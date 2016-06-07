var dataset = [2, 3, 4, 5, 6, 7, 3, 4, 9, 6, 3, 2, 1, 6, 7, 4, 3, 9, 8, 7, 6, 5]

d3.select('svg')
    .attr('width', 500)
    .attr('height', 600)
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('width', 0)
    .attr('height', 10)
    /*Anonymous function to dynamically change the value of y*/
    .attr('y', function(d, i){
        console.log(d,i)
        return i*11
    })
    .transition()
    .ease('elastic')
    .duration(3000)
    .delay(function(d, i){
        return 200 * i
    })
    .attr('width', function(d, i){
        return d * 25
    })
    /*d is the value of the element of the array and i is the index*/