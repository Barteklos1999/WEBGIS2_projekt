require([
    "esri/config",
     "esri/Map",
     "esri/views/MapView"
   ], function (esriConfig,Map, MapView) {

     esriConfig.apiKey = "AAPK5a733ca8a48e4b5c85f6d31f19f51e46x9zvu7qa6n76RldI-Ao2dSzPQbNWnQyzfvUBhTuxg2tPwu8AuLbEsBbKtTHIY5kB";
     const map = new Map({
       basemap: "arcgis-topographic" // Basemap layer
     });

     const view = new MapView({
       map: map,
       center: [-118.805, 34.027],
       zoom: 13, // scale: 72223.819286
       container: "mapDiv",
       constraints: {
         snapToZoom: false
       }
     });

   });
 