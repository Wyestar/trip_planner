console.log("src text");

const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = "pk.eyJ1IjoiamFtZXNvcmVpbGx5IiwiYSI6ImNqOGJzdjZvOTAxbGYyd3A1N2JpYTFtYnIifQ.jkdY0hNutPsMyN1K-6Hbpw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10"
});

//"url(http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glowing-purple-neon-icons-arrows/112905-glowing-purple-neon-icon-arrows-arrow4-down.png)"

const markerToPlace = buildMarker("activities", [-74.009, 40.705])
markerToPlace.addTo(map);

//style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.