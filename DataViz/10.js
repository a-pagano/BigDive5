d3.csv('athletes_sochi.csv', parseMyData, myFunction)

function parseMyData(d,i){
    d.age = +d.age
    /*This line converts strings to numbers*/
    d.height = +d.height
    return d
}

function myFunction(err, data){
    
        console.log(data)

        data.sort(function(a, b){
            return d3.ascending(a.age, b.age)
        })

        var minAge = d3.min(data, function(d,i){
            return d.age    
        })

        var maxAge = d3.max(data, function(d,i){
            return d.age    
        })

        var mapW = d3.scale.linear()
            .domain([minAge, maxAge])
            .range([0,600])

        d3.select('svg')
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('height', 3)
            .attr('y', function(d, i){
                return i * 4
            })
            .attr('width', function(d, i){
                return mapW(d.age)
            })

}