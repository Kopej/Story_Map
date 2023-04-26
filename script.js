var mymap = L.map('map').setView([-0.303, 36.05], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([-1.09155, 37.01136]).addTo(mymap);
marker.bindPopup("<b>DEPATURE!!!</b><br>AT 8:00 AM.").openPopup();

var marker = L.marker([-1.20324, 36.91667]).addTo(mymap);
marker.bindPopup("<b>GITHURAI!!!</b><br>8:30 AM.").openPopup();

var marker = L.marker([-1.25911, 36.83714]).addTo(mymap);
marker.bindPopup("<b>MUTHAIGA COUNTRY CLUB!!!</b><br>BREAKFAST AT 9:00 AM.").openPopup();

var marker = L.marker([-1.28653, 36.8211]).addTo(mymap);
marker.bindPopup("<b>CITY HALL!!!</b><br>CONFERENCE AT 10:00 AM.").openPopup();

var marker = L.marker([-1.34567, 36.90764]).addTo(mymap);
marker.bindPopup("<b>LOCAL FLIGHT!!!</b><br>TO KISUMU AT 11:00 AM.").openPopup();

var marker = L.marker([-1.34567, 36.90764]).addTo(mymap);
marker.bindPopup("<b>LOCAL FLIGHT!!!</b><br>TO KISUMU AT 11:00 AM.").openPopup();

var marker = L.marker([-0.08737, 34.72439]).addTo(mymap);
marker.bindPopup("<b>ARRIVAL!!!</b><br>AT KISUMU AT 12:30 AM.").openPopup();

var marker = L.marker([-0.10952, 34.74602]).addTo(mymap);
marker.bindPopup("<b>LUNCH MEETING!!!</b><br>AT KISUMU STATE LODGE AT 1:30 PM.").openPopup();

var marker = L.marker([-0.10427, 34.77029]).addTo(mymap);
marker.bindPopup("<b>CHARITY MATCH!!!</b><br>AT MOI STADIUM AT 3:00 PM.").openPopup();

var marker = L.marker([-0.08737, 34.72439]).addTo(mymap);
marker.bindPopup("<b>DEPATURE!!!</b><br>AT KISUMU AIRPORT AT 6:00 PM.").openPopup();

var marker = L.marker([-1.3242, 36.81342]).addTo(mymap);
marker.bindPopup("<b>ARRIVAL!!!</b><br>AT WILSON AIRPORT AT 7:30 PM.").openPopup();

var marker = L.marker([-1.11828, 37.00859]).addTo(mymap);
marker.bindPopup("<b>DINNER!!!</b><br>AT JUJA CITY MALL AT 9:00 PM.").openPopup();