ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [45.037005, 41.939978],
                zoom: 12
            });
            var myPlacemark = new ymaps.Placemark([45.037005, 41.939978], {
                hintContent: 'Квартира',
                balloonContent: 'ул. Ленина 369'
            });
            myMap.geoObjects.add(myPlacemark);
        });
