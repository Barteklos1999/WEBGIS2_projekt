"use strict"
require([
    'esri/Map',
    'esri/views/MapView',
    'dijit/form/ToggleButton',
    'dijit/form/Button',
    'esri/layers/FeatureLayer',
    'esri/Graphic',
    'esri/layers/GraphicsLayer',
], (Map, MapView, ToggleButton, Button,FeatureLayer,Graphic,GraphicsLayer) => {
    const map1 = new Map({
        basemap: "topo-vector"
    });


    const fl = new FeatureLayer({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/1"
    });

    const map1 = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        map: map1,
        container: "mapDiv",
        zoom: 10,
        center: [25,52]
        
    })

    const basemap = "hybrid";

    const btn = new ToggleButton({
        onChange: function(){
            map1.basemap = basemap;
        },
        
    }, "baseMapToggle");


    const zoomIN = new Button({
        onClick: function(){
            view.zoom = view.zoom + 1;
        },
        
    }, "zoomIn");

    const zoomOut = new Button({
        onClick: function(){
            view.zoom =  view.zoom - 1;
        },
        
    }, "zoomOut");

    

    const geom = {
        type: "point",
        longitude: 25,
        latitude: 52
    };

    const symbol = {
        type: "simple-marker",
        style: "x",
        color: "red",
        size: 14,
        outline: {
            color: "red"
        }
    };

    const attr = {
        name: "Polska",
        code: "POL"
    };

    const popupTmpl = {
        title: "Obiekt grafika - {name}",
        content: "Ten obiekt jest oznaczony kodem {code}"
    };

    const graph = new Graphic({
        geometry: geom,
        symbol: symbol,
        attributes: attr,
        popupTemplate: popupTmpl
    });

    gl.add(graph);

    const basemapGalleryWg = new BasemapGallery({
        view: view
    });

    const expWg = new Expand({
        view: view,
        content: basemapGalleryWg
    });

    view.ui.add(expWg, {position: "top-right"});


});


