ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [45.019175, 41.927653],
                zoom: 12
            });
            var myPlacemark = new ymaps.Placemark([45.019175, 41.927653], {
                hintContent: 'Квартира',
                balloonContent: 'ул. Шпаковская 86/2'
            });
            myMap.geoObjects.add(myPlacemark);
        });
