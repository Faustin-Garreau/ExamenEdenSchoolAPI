function apiCall(ville) {

    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+ville+'&appid=3a56b65f290567e91736b980a4678017&units=Metric&lang=fr';

    fetch(url).then(response => response.json().then(data => {
    
        document.getElementById('ville').innerHTML = data.name;
        document.getElementById('temps').innerHTML = '<i class="fas fa-temperature-low"></i>' + data.main.temp + '°';
        document.getElementById('humidite').innerHTML = '<i class="fas fa-tint"></i>' + data.main.humidity + '%';
        document.getElementById('vent').innerHTML =  '<i class="fas fa-wind"></i>' + Math.round((data.wind.speed * 3.6) * 100) / 100  + 'km/h';
        
            if (data.main.humidity > 60) {
                document.body.style.backgroundImage = "url('https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/a/f/9af37d82bb_134106_taille-gouttes-pluie.jpg')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
                document.getElementById('background').style.backgroundColor = "black";
                document.getElementById('background').style.color = "white";
            }else if(data.main.temp < 17) {
                document.body.style.backgroundImage = "url('https://www.lesoir.be/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2018/02/19/node_140823/15171650/public/2018/02/19/B9714800313Z.1_20180219064630_000+GN7ANUE1Q.1-0.jpg?itok=DSLk9F2D1553413848')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
                document.getElementById('background').style.backgroundColor = "transparent";
                document.getElementById('background').style.color = "black";

            }else if (data.main.temp > 17) {
                document.body.style.backgroundImage = "url('https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/2/b/62b0677a23_129709_soleil-brille.jpg')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
                document.getElementById('background').style.backgroundColor = "transparent";
                document.getElementById('background').style.color = "black";
            }
        })
    ).catch(err => document.location.reload(alert('Veuillez entrer un nom de ville correct')) = err);
}

    
    function CityValue() {
        let ville = document.getElementById('InputCity').value;
        apiCall(ville);
    }
