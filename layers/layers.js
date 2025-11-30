var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Superficieduterritoire_1 = new ol.format.GeoJSON();
var features_Superficieduterritoire_1 = format_Superficieduterritoire_1.readFeatures(json_Superficieduterritoire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Superficieduterritoire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficieduterritoire_1.addFeatures(features_Superficieduterritoire_1);
var lyr_Superficieduterritoire_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficieduterritoire_1, 
                style: style_Superficieduterritoire_1,
                popuplayertitle: 'Superficie du territoire',
                interactive: true,
    title: 'Superficie du territoire<br />\
    <img src="styles/legend/Superficieduterritoire_1_0.png" /> 58 - 58<br />\
    <img src="styles/legend/Superficieduterritoire_1_1.png" /> 58 - 58<br />\
    <img src="styles/legend/Superficieduterritoire_1_2.png" /> 58 - 281<br />\
    <img src="styles/legend/Superficieduterritoire_1_3.png" /> 281 - 1887<br />\
    <img src="styles/legend/Superficieduterritoire_1_4.png" /> 1887 - 4201<br />\
    <img src="styles/legend/Superficieduterritoire_1_5.png" /> 4201 - 11700<br />\
    <img src="styles/legend/Superficieduterritoire_1_6.png" /> 11700 - 24858<br />' });
var format_Secteurs_2 = new ol.format.GeoJSON();
var features_Secteurs_2 = format_Secteurs_2.readFeatures(json_Secteurs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_2.addFeatures(features_Secteurs_2);
cluster_Secteurs_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Secteurs_2
});
var lyr_Secteurs_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Secteurs_2, 
                style: style_Secteurs_2,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_2_0.png" /> (Agricole)<br />\
    <img src="styles/legend/Secteurs_2_1.png" /> (Bois)<br />\
    <img src="styles/legend/Secteurs_2_2.png" /> (Commerce)<br />\
    <img src="styles/legend/Secteurs_2_3.png" /> (Minier)<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Superficieduterritoire_1.setVisible(true);lyr_Secteurs_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Superficieduterritoire_1,lyr_Secteurs_2];
lyr_Superficieduterritoire_1.set('fieldAliases', {'NOM': 'NOM', 'TYPE': 'TYPE', 'CODE_INS': 'CODE_INS', 'SCE_SEM': 'SCE_SEM', 'SCE_GEO': 'SCE_GEO', 'MODIF': 'MODIF', 'SURFACE': 'SURFACE', 'ORIGINE': 'ORIGINE', });
lyr_Secteurs_2.set('fieldAliases', {'NOM': 'NOM', 'SURFACE': 'SURFACE', 'SECTEURS': 'secteurs d\'activités ', });
lyr_Superficieduterritoire_1.set('fieldImages', {'NOM': 'TextEdit', 'TYPE': 'TextEdit', 'CODE_INS': 'Range', 'SCE_SEM': 'TextEdit', 'SCE_GEO': 'TextEdit', 'MODIF': 'DateTime', 'SURFACE': 'TextEdit', 'ORIGINE': 'TextEdit', });
lyr_Secteurs_2.set('fieldImages', {'NOM': 'TextEdit', 'SURFACE': 'TextEdit', 'SECTEURS': 'ValueMap', });
lyr_Superficieduterritoire_1.set('fieldLabels', {'NOM': 'inline label - always visible', 'TYPE': 'no label', 'CODE_INS': 'no label', 'SCE_SEM': 'no label', 'SCE_GEO': 'no label', 'MODIF': 'no label', 'SURFACE': 'inline label - always visible', 'ORIGINE': 'no label', });
lyr_Secteurs_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'SURFACE': 'inline label - always visible', 'SECTEURS': 'inline label - always visible', });
lyr_Secteurs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});