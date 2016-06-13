
function generateNewData(){
    var data = d3.range(100).map(function(d, i){
    return {value:Math.random()}
    })
    return data
}

console.log(generateNewData())

var myLine = d3.svg.line()
                .x(function(d, i){
                    return i * 5
                })
                .y(function(d, i){
                    return d.value * 100
                })
                .interpolate('basis')

console.log(myLine)

d3.select('svg')
    .append('path')
    .attr('d', myLine(generateNewData()))
    .style('fill', 'none')
    .style('stroke', 'blue')
    .style('stroke-width', 3)

d3.select('body')
    .append('button')
    .text('Generate new')
    .on('click', function(){
        
    d3.select('path')
    .transition()
    .duration(1000)
    .attr('d', myLine(generateNewData()))
})
