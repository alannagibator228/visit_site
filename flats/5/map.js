ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [45.035381, 41.955187],
                zoom: 12
            });
            var myPlacemark = new ymaps.Placemark([45.035381, 41.955187], {
                hintContent: 'Квартира',
                balloonContent: 'ул. Мира 328'
            });
            myMap.geoObjects.add(myPlacemark);
        });
