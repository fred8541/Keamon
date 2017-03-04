function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
            lat: 55.682468,
            lng: 12.613122
        }
    });



    console.log("JsonHentet");
    $.getJSON('maps.json', dataHentet);
}

function dataHentet(data) {
    console.log("dataHentet");
    //depugInfo("Loadet data");
    data.forEach(createMarker);

}

function createMarker(mapinfo) {
    var marker = new google.maps.Marker({
        position: mapinfo.position,
        map: map,
        title: mapinfo.navn
    });
}
