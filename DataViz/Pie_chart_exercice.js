var svg = d3.select('svg');

var data = d3.csv('athletes_sochi.csv', function(err, data){
    
    var bySport = d3.nest()
            .key(function(d){
                return d.sport
            })
            .entries(data)
    
    console.log(bySport)
    
    var mypie = d3.layout.pie()
				.value(function(d){
					return d.values.length;
				})
                .sort(null)

    console.log(mypie(bySport));

    var mypiearc = d3.svg.arc()
                    .innerRadius(30)
                    .outerRadius(100);

    var colors = d3.scale.category20();

    svg.append('g')
        .attr('transform', 'translate(300,300)')
        .selectAll('path')
        .data( mypie(bySport) )
        .enter()
        .append('path')
        .attr('d', mypiearc)
        .style('fill', function(d, i){
            return colors(i)
        });
    
    
    
})

console.log(data)