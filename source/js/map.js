let iconSize = [57, 53];
let zoom = 14;

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323037],
        zoom: zoom,
        controls : [],
    },
    {suppressMapOpenBlock: true}),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div>$[properties.iconContent]</div>'
  ),
    myPlacemarkWithContent = new ymaps.Placemark([59.938631, 30.323037], {
      hintContent: 'Значек компании',
  }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: './img/map/map-pin.png',
      iconImageSize: iconSize,
      iconImageOffset: [-15, -15],
      iconContentLayout: MyIconContentLayout
  });
    myMap.geoObjects
    .add(myPlacemarkWithContent);
}
