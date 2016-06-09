var circle = d3.select('svg')
    .append('circle')
    .attr('r', 10)
    .attr('cx', 100)
    .attr('cy', 100)

circle.on('click', function(){
    
    circle.transition()
        .duration(2000)
        .attr('r', 100)
})
//other events: 'mouseleave', 'mouseenter'
//to do the same with the whole svg canvas: d3.select('svg').on('click',...