$(function(){

  var projectArray = [
    { image: "http://payload334.cargocollective.com/1/4/139376/8996854/WDRInside_1000.jpg",
      description: "The 2015 World Development Report discusses insights on how people make decisions and provides a framework to help development practitioners apply them to policies.",
      filters: ["branding", "illustration", "print"]
    },
    { image: "http://payload250.cargocollective.com/1/4/139376/7317153/WTGframes1_o.jpg",
      description: "The Way to Go illuminates different forms of transportation and the infrastructure that supports them. Published by Penguin Press.",
      filters: ["illustration", "print"]
    }

    ];

  function projectfilter(filterParam){
    var filteredProjects = [];
    for (var i = projectArray.length - 1; i >= 0; i--) {
      for (var x = projectArray[i].filters.length - 1; x >= 0; x--) {
        if(projectArray[i].filters[x] === filterParam){
          filteredProjects.push(projectArray[i]);
        }
        
      }
    }
    return filteredProjects;
  }

  var filteredArrays = filprojectfilter("branding");

  








});