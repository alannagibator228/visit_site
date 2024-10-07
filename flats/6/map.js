ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [45.035337, 41.953561],
                zoom: 12
            });
            var myPlacemark = new ymaps.Placemark([45.035337, 41.953561], {
                hintContent: 'Квартира',
                balloonContent: 'ул. Мира 332'
            });
            myMap.geoObjects.add(myPlacemark);
        });
