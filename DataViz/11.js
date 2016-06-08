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

    var mapXaxis = d3.scale.linear()
            .domain([0, 1])
            .range([0, 400])
    
    var axx = d3.svg.axis()
        .scale(mapXaxis)
        .orient('bottom')     
    
    var mapYaxis = d3.scale.linear()
            .domain([1, 0])
            .range([0, 400])
    
    var axy = d3.svg.axis()
        .scale(mapYaxis)
        .orient('left')        
    
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
            .range([50, 380])
    
    var mapY = d3.scale.linear()
            .domain([minHeight, maxHeight])
            .range([50, 380])
    
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
    
    d3.select('svg')
        .append('g')
        .call(axx)
        .attr('transform', 'translate(40, 410)')
    
    d3.select('svg')
        .append('g')
        .call(axy)
        .attr('transform', 'translate(40, 10)')
}