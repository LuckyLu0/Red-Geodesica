var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LOCALIZADOSCONPLACA_3 = new ol.format.GeoJSON();
var features_LOCALIZADOSCONPLACA_3 = format_LOCALIZADOSCONPLACA_3.readFeatures(json_LOCALIZADOSCONPLACA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOCALIZADOSCONPLACA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOCALIZADOSCONPLACA_3.addFeatures(features_LOCALIZADOSCONPLACA_3);
var lyr_LOCALIZADOSCONPLACA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOCALIZADOSCONPLACA_3, 
                style: style_LOCALIZADOSCONPLACA_3,
                popuplayertitle: 'LOCALIZADOS CON PLACA',
                interactive: true,
                title: '<img src="styles/legend/LOCALIZADOSCONPLACA_3.png" /> LOCALIZADOS CON PLACA'
            });
var format_LOCALIZADOSAMONUMENTAR_4 = new ol.format.GeoJSON();
var features_LOCALIZADOSAMONUMENTAR_4 = format_LOCALIZADOSAMONUMENTAR_4.readFeatures(json_LOCALIZADOSAMONUMENTAR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOCALIZADOSAMONUMENTAR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOCALIZADOSAMONUMENTAR_4.addFeatures(features_LOCALIZADOSAMONUMENTAR_4);
var lyr_LOCALIZADOSAMONUMENTAR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOCALIZADOSAMONUMENTAR_4, 
                style: style_LOCALIZADOSAMONUMENTAR_4,
                popuplayertitle: 'LOCALIZADOS A MONUMENTAR',
                interactive: true,
                title: '<img src="styles/legend/LOCALIZADOSAMONUMENTAR_4.png" /> LOCALIZADOS A MONUMENTAR'
            });
var format_PROPUESTOSPORCATASTRO_5 = new ol.format.GeoJSON();
var features_PROPUESTOSPORCATASTRO_5 = format_PROPUESTOSPORCATASTRO_5.readFeatures(json_PROPUESTOSPORCATASTRO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROPUESTOSPORCATASTRO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPUESTOSPORCATASTRO_5.addFeatures(features_PROPUESTOSPORCATASTRO_5);
var lyr_PROPUESTOSPORCATASTRO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROPUESTOSPORCATASTRO_5, 
                style: style_PROPUESTOSPORCATASTRO_5,
                popuplayertitle: 'PROPUESTOS POR CATASTRO',
                interactive: true,
                title: '<img src="styles/legend/PROPUESTOSPORCATASTRO_5.png" /> PROPUESTOS POR CATASTRO'
            });
var format_PRIMARIAYSECUNDARIA_6 = new ol.format.GeoJSON();
var features_PRIMARIAYSECUNDARIA_6 = format_PRIMARIAYSECUNDARIA_6.readFeatures(json_PRIMARIAYSECUNDARIA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRIMARIAYSECUNDARIA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRIMARIAYSECUNDARIA_6.addFeatures(features_PRIMARIAYSECUNDARIA_6);
var lyr_PRIMARIAYSECUNDARIA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRIMARIAYSECUNDARIA_6, 
                style: style_PRIMARIAYSECUNDARIA_6,
                popuplayertitle: 'PRIMARIA Y SECUNDARIA',
                interactive: true,
                title: '<img src="styles/legend/PRIMARIAYSECUNDARIA_6.png" /> PRIMARIA Y SECUNDARIA'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_LOCALIZADOSCONPLACA_3.setVisible(true);lyr_LOCALIZADOSAMONUMENTAR_4.setVisible(true);lyr_PROPUESTOSPORCATASTRO_5.setVisible(true);lyr_PRIMARIAYSECUNDARIA_6.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,lyr_LOCALIZADOSCONPLACA_3,lyr_LOCALIZADOSAMONUMENTAR_4,lyr_PROPUESTOSPORCATASTRO_5,lyr_PRIMARIAYSECUNDARIA_6];
lyr_LOCALIZADOSCONPLACA_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LOCALIZADOSAMONUMENTAR_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PROPUESTOSPORCATASTRO_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PRIMARIAYSECUNDARIA_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LOCALIZADOSCONPLACA_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LOCALIZADOSAMONUMENTAR_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_PROPUESTOSPORCATASTRO_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_PRIMARIAYSECUNDARIA_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LOCALIZADOSCONPLACA_3.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LOCALIZADOSAMONUMENTAR_4.set('fieldLabels', {'id': 'header label - always visible', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PROPUESTOSPORCATASTRO_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PRIMARIAYSECUNDARIA_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PRIMARIAYSECUNDARIA_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});