ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [45.0428, 41.9734],
                zoom: 12
            });
            var myPlacemark = new ymaps.Placemark([45.0428, 41.9734], {
                hintContent: 'Квартира',
                balloonContent: 'ул. Шпаковская 86/2'
            });
            myMap.geoObjects.add(myPlacemark);
        });
