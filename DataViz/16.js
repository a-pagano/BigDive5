var data = d3.range(10)

d3.select('svg')
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', function(d, i){
    return d
    })
    .attr('cx', function(d, i){
    return i*20
    })
    .attr('cy', 50)
    .on('mouseenter', function(d, i){
        d3.select(this)
//        to select the circle clicked
            .style('fill', 'red')
        
    })
    .on('mouseleave', function(d, i){
        d3.select(this)
            .style('fill', 'black')
    })
//second 'on' callback to get back to black circle when mouse leaves circle
        