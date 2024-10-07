ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [45.015722, 41.925560],
                zoom: 12
            });
            var myPlacemark = new ymaps.Placemark([45.015722, 41.925560], {
                hintContent: 'Квартира',
                balloonContent: 'ул. 50 лет ВЛКСМ 8А/1'
            });
            myMap.geoObjects.add(myPlacemark);
        });
