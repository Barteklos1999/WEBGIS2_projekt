require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/symbols/PictureMarkerSymbol",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/LayerList",
    "esri/widgets/Measurement",
    "esri/widgets/Search"
   ], function (esriConfig,Map, MapView,Graphic,GraphicsLayer,PictureMarkerSymbol,BasemapGallery,Expand,LayerList,Measurement,Search) {

     esriConfig.apiKey = "AAPK5a733ca8a48e4b5c85f6d31f19f51e46x9zvu7qa6n76RldI-Ao2dSzPQbNWnQyzfvUBhTuxg2tPwu8AuLbEsBbKtTHIY5kB";
     const map = new Map({
       basemap: "arcgis-modern-antique" 
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

     // Grafiki


     const graphicsLayer = new GraphicsLayer({
       title: "Bitwy"
     });
        map.add(graphicsLayer);


     const geom = {
      type: "point",
      longitude: -8.994444,
      latitude: 37.025
    };

    

    const symbol = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "img/battle.png",
      width: "64px",
      height: "64px"
    };
      
    
    

    const attr = {
        name: "Polska",
        code: "POL"
    };

    const popupTmpl = {
        title: "Tutaj odbyła się bitwa koło przylądka Św. Wincentego",
        content: "Miała miejsce w 1794r. Właśnie podczas tej bitwy po raz pierwszy Nelson zerwał ze sztywnymi regułami i wykazał się geniuszem strategicznym, lekceważąc przy tym rozkazy dowódców"
    };

    const graph = new Graphic({
        geometry: geom,
        symbol: symbol,
        attributes: attr,
        popupTemplate: popupTmpl
    });

    graphicsLayer.add(graph);


    const geom2 = {
      type: "point",
      longitude: 30.116667,
      latitude:  31.333333
    };

    

    const symbol2 = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "img/battle.png",
      width: "64px",
      height: "64px"
    };
      
    
    

    const attr2 = {
        name: "Polska",
        code: "POL"
    };

    const popupTmpl2 = {
        title: "Tutaj odbyła się bitwa pod Abukirem",
        content: "Miała miejsce w 1798r. Dzięki temu zwycięstu nad Francją Nelson uzyskał tytuł Barona Nilu "
    };

    const graph2 = new Graphic({
        geometry: geom2,
        symbol: symbol2,
        attributes: attr2,
        popupTemplate: popupTmpl2
    });

    graphicsLayer.add(graph2);

    const geom3 = {
      type: "point",
      longitude: 12.613333, 
      latitude:  55.702778 
    };

    

    const symbol3 = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "img/battle.png",
      width: "64px",
      height: "64px"
    };
      
    
    

    const attr3 = {
        name: "Polska",
        code: "POL"
    };

    const popupTmpl3 = {
        title: "Tutaj odbyła się bitwa pod Kopenhagą",
        content: "Miała miejsce w 1801r. Kolejny wielki sukces Nelsona. Legenda mówi że zignorował sygnał do zaprzestania walk przykładając lunetę do niesprawnego \
        oka, mówiąc że nie widzi żadnych rozkazów. "
    };

    const graph3 = new Graphic({
        geometry: geom3,
        symbol: symbol3,
        attributes: attr3,
        popupTemplate: popupTmpl3
    });

    graphicsLayer.add(graph3);


    const geom4 = {
      type: "point",
      longitude: -6.25534,
      latitude: 36.29299 
    };

    

    const symbol4 = {
      type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
      url: "img/battle.png",
      width: "64px",
      height: "64px"
    };
      
    
    

    const attr4 = {
        name: "Polska",
        code: "POL"
    };

    const popupTmpl4 = {
        title: "Tutaj odbyła się bitwa pod Trafalgarem",
        content: "Miała miejsce w 1805r. Największe i ostatnie osiągnięcie Horacego. Mimo zwycięstwa nad połącznymi siłami Hiszpani i Francji, Nelson zmarł \
        od rany postrzałowej na pokładzie swojego okrętu flagowego HMS Victory. "
    };

    const graph4 = new Graphic({
        geometry: geom4,
        symbol: symbol4,
        attributes: attr4,
        popupTemplate: popupTmpl4
    });

    graphicsLayer.add(graph4);

    // Widgety
    
    const bmWg = new BasemapGallery({
      view: view
    });

    const expandWg = new Expand({
      view:view,
      content:bmWg
    })

    const listLayer = new LayerList({
      view:view,
    })


    const measure = new Measurement({
      view: view,
      activeTool: "distance"
      
    })


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


    


});


 