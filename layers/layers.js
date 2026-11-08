var wms_layers = [];

var lyr_PM10_IDW_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PM10_IDW<br />\
    <img src="styles/legend/PM10_IDW_0_0.png" /> 12,0012<br />\
    <img src="styles/legend/PM10_IDW_0_1.png" /> 37,4871<br />\
    <img src="styles/legend/PM10_IDW_0_2.png" /> 62,9730<br />\
    <img src="styles/legend/PM10_IDW_0_3.png" /> 88,4588<br />\
    <img src="styles/legend/PM10_IDW_0_4.png" /> 113,9447<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PM10_IDW_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8156462.899325, 632212.145133, -8153583.010665, 634400.445368]
        })
    });
var format_Curvas_PM10contour_1 = new ol.format.GeoJSON();
var features_Curvas_PM10contour_1 = format_Curvas_PM10contour_1.readFeatures(json_Curvas_PM10contour_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas_PM10contour_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_PM10contour_1.addFeatures(features_Curvas_PM10contour_1);
var lyr_Curvas_PM10contour_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_PM10contour_1, 
                style: style_Curvas_PM10contour_1,
                popuplayertitle: 'Curvas_PM10 — contour',
                interactive: true,
                title: '<img src="styles/legend/Curvas_PM10contour_1.png" /> Curvas_PM10 — contour'
            });
var format_Estaciones_Monitoreo_2 = new ol.format.GeoJSON();
var features_Estaciones_Monitoreo_2 = format_Estaciones_Monitoreo_2.readFeatures(json_Estaciones_Monitoreo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_Monitoreo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_Monitoreo_2.addFeatures(features_Estaciones_Monitoreo_2);
var lyr_Estaciones_Monitoreo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_Monitoreo_2, 
                style: style_Estaciones_Monitoreo_2,
                popuplayertitle: 'Estaciones_Monitoreo',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_Monitoreo_2.png" /> Estaciones_Monitoreo'
            });

lyr_PM10_IDW_0.setVisible(true);lyr_Curvas_PM10contour_1.setVisible(true);lyr_Estaciones_Monitoreo_2.setVisible(true);
var layersList = [lyr_PM10_IDW_0,lyr_Curvas_PM10contour_1,lyr_Estaciones_Monitoreo_2];
lyr_Curvas_PM10contour_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PM10': 'PM10', });
lyr_Estaciones_Monitoreo_2.set('fieldAliases', {'Estacion': 'Estacion', 'Este (m)': 'Este (m)', 'Norte (m)': 'Norte (m)', 'PM10': 'PM10', 'PM2_5': 'PM2_5', 'Temp ⁰C': 'Temp ⁰C', 'Cont_A (ppm)': 'Cont_A (ppm)', 'Cont_B (ppm)': 'Cont_B (ppm)', });
lyr_Curvas_PM10contour_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'PM10': 'TextEdit', });
lyr_Estaciones_Monitoreo_2.set('fieldImages', {'Estacion': '', 'Este (m)': '', 'Norte (m)': '', 'PM10': '', 'PM2_5': '', 'Temp ⁰C': '', 'Cont_A (ppm)': '', 'Cont_B (ppm)': '', });
lyr_Curvas_PM10contour_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PM10': 'inline label - visible with data', });
lyr_Estaciones_Monitoreo_2.set('fieldLabels', {'Estacion': 'inline label - visible with data', 'Este (m)': 'no label', 'Norte (m)': 'no label', 'PM10': 'inline label - visible with data', 'PM2_5': 'no label', 'Temp ⁰C': 'no label', 'Cont_A (ppm)': 'no label', 'Cont_B (ppm)': 'no label', });
lyr_Estaciones_Monitoreo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});