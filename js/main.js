
// Add the map, basemap, and attirbution
var dataLayer;
var value;
var layer;

function main() {
  var map = new L.Map('map', {
    zoomControl: false,
    center: [40.972845, -77.749573],
    zoom: 8
  });
  // L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
  //   attribution: 'Stamen'
  // }).addTo(map);

// L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/{basemap-name}/{z}/{x}/{y}.png', {
//     attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     subdomains: 'abcd',
//   }).addTo(map);

L.tileLayer('https://vector.mapzen.com/osm/{layers}/{z}/{x}/{y}.{format}?api_key=vector-tiles-xxxxxxx', { attribution: '<a href="https://www.mapzen.com/rights">Attribution.</a>. Data &copy;<a href="https://openstreetmap.org/copyright">OSM</a> contributors.' });

function slideFunc(){
  $('.nstSlider').nstSlider({
      "left_grip_selector": ".leftGrip",
      "rounding": {
      "5.98": "10",
       "10": "20",
       "20": "30",
       "30": "40",
       "40": "50",
       "50": "60",
       "60": "70",
       "70": "80",
       "80": "90",
       "90": "100",
       "100": "110"
   },
      "value_changed_callback": function(cause, leftValue, rightValue) {
          $(this).parent().find('.percLabel').text(leftValue+"%");
          value = leftValue;
          if (value == 10){
            dataLayer.setCartoCSS( "#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_10 > 745392.85] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_10 <= 745392.85] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_10 <= 227083.15] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_10 <= 84594.82] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_10 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_10 <= -11031.30] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_10 <= -50489.22 ] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_10 <= -100245.19] {polygon-fill: #5e497e;}");
          }
          if (value == 20){
            dataLayer.setCartoCSS( "#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_20 > 1630343.8] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_20 <= 1630343.8] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_20 <= 481323.6] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_20 <= 224318.9] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_20 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_20 <= -68093.65] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_20 <= -235879.55 ] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_20 <= -454304.89] {polygon-fill: #5e497e;}");
          }
          if (value == 30){
            dataLayer.setCartoCSS("#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_30 > 2601216.3] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_30 <= 2601216.3] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_30 <= 768322.7] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_30 <= 319607.9] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_30 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_30 <= -137835.8] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_30 <= -455455.3] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_30 <= -848588.1] {polygon-fill: #5e497e;}");
          }
          if (value == 40){
            dataLayer.setCartoCSS("#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_40 > 3490194.8] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_40 <= 3490194.8] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_40 <= 979618.4] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_40 <= 413198.7] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_40 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_40 <= -238547.7] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_40 <= -700012.1] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_40 <= -1249107.6] {polygon-fill: #5e497e;}");
          }
          if (value == 50){
            dataLayer.setCartoCSS("#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_50 > 4913118.3] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_50 <= 4913118.3] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_50 <= 1227556.3] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_50 <= 539371.7] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_50 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_50 <= -281206] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_50 <= -929846] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_50 <= -1645006] {polygon-fill: #5e497e;}");
          }
          if (value == 60){
            dataLayer.setCartoCSS("#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_60 > 6234985.0] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_60 <= 6234985.0] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_60 <= 1478686.2] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_60 <= 641674.8] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_60 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_60 <= -343005.6] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_60 <= -1131314.9] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_60 <= -2044292.1] {polygon-fill: #5e497e;}");
          }
          if (value == 70){
            dataLayer.setCartoCSS("#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_70 > 7373059.5] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_70 <= 7373059.5] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_70 <= 1777112.0] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_70 <= 749226.4] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_70 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_70 <= -435465.8] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_70 <= -1360081.0] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_70 <= -2443414.9] {polygon-fill: #5e497e;}");
          }
          if (value == 80){
            dataLayer.setCartoCSS("#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_80 > 8598498.5] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_80 <= 8598498.5] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_80 <= 2276493.9] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_80 <= 879732.8] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_80 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_80 <= -509792.6] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_80 <= -1568092.3] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_80 <= -2836960.1] {polygon-fill: #5e497e;}");
          }
          if (value == 90){
            dataLayer.setCartoCSS("#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_90 > 9753918.2] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_90 <= 9753918.2] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_90 <= 2598258.3] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_90 <= 988063.6] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_90 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_90 <= -586668.6] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_90 <= -1800703.0] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_90 <= -3229197.1] {polygon-fill: #5e497e;}");
          }
          if (value == 100){
            dataLayer.setCartoCSS("#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_100 > 10938491] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_100 <= 10938491] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_100 <= 2901146] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_100 <= 1096971] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [ totch_100 = 0] {polygon-fill: #dcdcdc;}#pa_school_districts_2015_setpercentages [ totch_100 <= -656562.2] {polygon-fill: #9e91b1;}#pa_school_districts_2015_setpercentages [ totch_100 <= -2031493.1] {polygon-fill: #7b6a96;}#pa_school_districts_2015_setpercentages [ totch_100 <= -3628223.9] {polygon-fill: #5e497e;}");
          }
          if (value < 10 ){
              dataLayer.setCartoCSS("#pa_school_districts_2015_setpercentages{polygon-fill: #FFFFCC;polygon-opacity: 0.8;line-color: #FFF;line-width: 0.5;line-opacity: 1;}#pa_school_districts_2015_setpercentages [ totch_5_98 > 502681.2] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_5_98 <= 502681.2] {polygon-fill: #3a7922;}#pa_school_districts_2015_setpercentages [ totch_5_98 <= 211208.4] {polygon-fill: #7eb669;}#pa_school_districts_2015_setpercentages [ totch_5_98 <= 125884.3] {polygon-fill: #abd69b;}#pa_school_districts_2015_setpercentages [totch_5_98 = 0] {polygon-fill: #dcdcdc;}");
          }
      }
  });
}

var url_example = 'https://eneedham-whyy.carto.com/api/v2/viz/d121ff26-5f27-11e6-90bf-0ecd1babdde5/viz.json';

  //Change your viz.json below
          cartodb.createVis('map', url_example)
          .done(function(vis, layers) {

            //getting the data layer
            layer = layers[1];
            dataLayer = layers[1].getSubLayer(0);

           //Apply a query into that layer
          //  dataLayer.setSQL("select * from european_countries_e limit 5");

           //Apply a CartoCSS for that layer
           slideFunc();
          })
          .error(function(err) {
            console.log(err);
          });

}

// you could use $(window).load(main);
window.onload = main;
