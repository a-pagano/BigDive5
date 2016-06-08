d3.csv('athletes_sochi.csv', parseData, myFunction)

function parseData(d,i){
    d.age = +d.age
    /*This line converts strings to numbers*/
    d.height = +d.height
    if(d.age>0 && d.height) return d
    /*This removes outliers that have no age or height*/
}

function myFunction(err, data){
    
    console.log(data)
    
    var minAge = d3.min(data, function(d,i){
            return d.age    
        })

    var maxAge = d3.max(data, function(d,i){
            return d.age    
        })
    
    var minHeight = d3.min(data, function(d,i){
            return d.height   
        })

    var maxHeight = d3.max(data, function(d,i){
            return d.height   
        })

    var mapX = d3.scale.linear()
            .domain([minAge, maxAge])
            .range([0, 400])
    
    var mapY = d3.scale.linear()
            .domain([minHeight, maxHeight])
            .range([0, 400])
    
    d3.select('svg')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('r', 3)
        .attr('cx', function(d, i){
        return mapX(d.age)
    })
        .attr('cy', function(d, i){
        return mapY(d.height)
    })
        
}