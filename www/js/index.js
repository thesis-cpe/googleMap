
var map;
var marker;

function init() {
    document.addEventListener("deviceready", onDeviceReady, false);

}

function onDeviceReady() {
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);

}

function onOffline() {
    alert("Must be connected to the Internet");
    var mapObj = document.getElementById("map-canvas");
    mapObj.innerHTML = "please connect to the Internet";

}

function onOnline() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?' +
            'callback=initialize';
    document.body.appendChild(script);
}


function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(18.7478518, 98.9226641),
        zoom: 15
    };

    var mapObj = document.getElementById("map-canvas");
    map = new google.maps.Map(mapObj, mapOptions);


    /*หอคำหลวง*/
    var point1 = new google.maps.LatLng(18.752944, 98.922417);
    var img = 'img/marker/kamluang-size.png'
    marker = new google.maps.Marker({
        position: point1,
        map: map,
        title: "this is point1",
        icon: img
    });

    marker.setMap(map);


    /*ที่เพิ่ม*/
    var infoText1 = '<div id="infobody"><b>หอคำหลวง</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/11892258_887004004722083_4016895729225575503_n.jpg?oh=6c9ee05f176be55197d7c04227ac2cb3&oe=56F405B3&__gda__=1455413049_a586e0af413c3785a5c963067e50f632"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/place_detail.php?id=147>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: infoText1,
        maxWidth: 200
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow1.open(map, marker);

    });

    /*ที่เพิ่ม*/
    /*.หอคำหลวง*/

    /*เกษตร*/
    var point2 = new google.maps.LatLng(18.750302, 98.927083);
    var img2 = 'img/marker/tatung-size-3.png'
    marker2 = new google.maps.Marker({
        position: point2,
        map: map,
        title: "this is point2",
        icon: img2
    });

    marker2.setMap(map);


    /*ที่เพิ่ม*/
    var infoText2 = '<div id="infobody"><b>สวนเกษตรทฤษฎีใหม่</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11888050_884855228270294_3155935850680330175_n.jpg?oh=99e04c63edf1e01fdc5b554619b853d1&oe=56F1FEED"></div>' + '<div> <a href=http://www.royalparkrajapruek.org/main/place_detail.php?id=147>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: infoText2,
        maxWidth: 200
    });

    google.maps.event.addListener(marker2, 'click', function () {
        infowindow2.open(map, marker2);

    });

    /*อุทยานหลวงราชพฤษ์*/
    var point3 = new google.maps.LatLng(18.746462, 98.925897);
    var img3 = 'img/marker/coon-size.png'
    marker3 = new google.maps.Marker({
        position: point3,
        map: map,
        title: "this is point3",
        icon: img3
    });

    marker3.setMap(map);


    /*ที่เพิ่ม*/
    var infoText3 = '<div id="infobody"><b>อุทยานหลวงราชพฤกษ์</b>' + '<div>053-114110-5</div>' + '<div><img style="width: 200px" src="https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/12122820_1091259607553117_8379526435798375786_n.jpg?oh=07ddea55fad3ef307df5422c0e689611&oe=56EB6E52"></div>' + '<div> <a href=http://www.royalparkrajapruek.org>รายละเอียดเพิ่มเติม</a> </div></div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: infoText3,
        maxWidth: 200
    });

    google.maps.event.addListener(marker3, 'click', function () {
        infowindow3.open(map, marker3);

    });

}
