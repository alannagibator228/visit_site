ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [45.035942, 41.949204],
                zoom: 12
            });
            var myPlacemark = new ymaps.Placemark([45.035942, 41.949204], {
                hintContent: 'Квартира',
                balloonContent: 'ул. Мира 367/1'
            });
            myMap.geoObjects.add(myPlacemark);
        });
