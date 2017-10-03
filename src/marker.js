const mapbox = require('mapbox-gl'); 

const iconURLS = {
    hotels: "http://i.imgur.com/WbMOfMl.png", 
    restaurants: "http://i.imgur.com/D9574Cu.png",
    activities: "http://i.imgur.com/cqR6pUI.png"
}

// const findActivityImage = type => {
//     if(iconURLS.hasOwnProperty(type)) {
//         type = iconUrls[type];
//     }
//     return 
// }

const buildMarker = function(type, coords) {
    if(iconURLS.hasOwnProperty(type)) {
        type = iconURLS[type];
    }
    console.log(type); 
    const marker = document.createElement("div");
    marker.style.width = "32px";
    marker.style.height = "39px";
    marker.style.backgroundImage = `url(${type})`;

    return new mapbox.Marker(marker).setLngLat(coords);
}





module.exports = buildMarker; 