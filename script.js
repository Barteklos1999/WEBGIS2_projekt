require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/layers/FeatureLayer",
  "esri/layers/GeoJSONLayer",
  "esri/symbols/PictureMarkerSymbol",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Expand",
  "esri/widgets/LayerList",
  "esri/widgets/DistanceMeasurement2D",
  "esri/widgets/Search",
  "esri/widgets/Legend"
 ], function (esriConfig,Map, MapView,Graphic,GraphicsLayer,FeatureLayer,GeoJSONLayer,PictureMarkerSymbol,BasemapGallery,Expand,LayerList,DistanceMeasurement2D,Search,Legend) {

   esriConfig.apiKey = "AAPK5a733ca8a48e4b5c85f6d31f19f51e46x9zvu7qa6n76RldI-Ao2dSzPQbNWnQyzfvUBhTuxg2tPwu8AuLbEsBbKtTHIY5kB";
   const map = new Map({
     basemap: "arcgis-modern-antique" ,
   });


   let link1 = document.getElementById("link1")
   let link2 = document.getElementById("link2")
   let link3 = document.getElementById("link3")
   let link4 = document.getElementById("link4")

   const view = new MapView({
     map: map,
     center: [12.482778, 41.893056],
     zoom: 4, 
     container: "map",
     
   });

   


   link1.addEventListener("click",function(event){
    view.center= [ -8.994444, 37.025 ],
    view.zoom = 10
   });

   link2.addEventListener("click",function(event){
    view.center= [ 30.116667, 31.333333 ],
    view.zoom = 10
   });

   link3.addEventListener("click",function(event){
    view.center= [ 12.613333, 55.702778 ],
    view.zoom = 10
   });

   link4.addEventListener("click",function(event){
    view.center= [-6.25534,36.29299],
    view.zoom = 10
   });

   // Warstwa
   const battles = new FeatureLayer({
    url: "https://services9.arcgis.com/XzFo5ArWiIwKyBgo/arcgis/rest/services/Bitwy_Nelsona/FeatureServer",
    title: "Bitwy"
  });
  battles.popupTemplate = {
    title: 'Bitwa',
    content: "Miejsce bitwy: {Miejsce} <br> Opis: {Opis}"
  }

  map.add(battles)





  

  const bmWg = new BasemapGallery({
    view: view
  });

  const expandWg = new Expand({
    view:view,
    content:bmWg
  });

  const legend = new Legend({
    view: view,
  });


  const expandLg = new Expand({
    view:view,
    content:legend
  });

  const listLayer = new LayerList({
    view:view,
  });


  const measure = new DistanceMeasurement2D({
    view: view,
  });
  


  const searchWidget = new Search({
    view: view
  });

  view.ui.add(expandWg, {
    position: "top-right"
  });


  view.ui.add(listLayer, {
    position: "top-right"
  });

  view.ui.add(measure, "top-right");

  view.ui.add(searchWidget, {
    position: "top-left",
    index: 2
  });


  view.ui.add(expandLg, {
    position: "bottom-right"
  });
    


  


});

 