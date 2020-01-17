
//Sayfadaki elementlerin seçilmesi
const button = document.querySelector('#button-addon2')//Arama butonu
const firstCard = document.querySelector('#firstCard')
const search = document.querySelector('#searchBox')//Arama kutusu
const sicaklik = document.querySelector('#sicaklik')
const summary = document.querySelector('#ozet')
const konum = document.querySelector('#konum')
const windSpeed = document.querySelector('#windSpeed')
const pressure = document.querySelector('#pressure')
const humidity =  document.querySelector('#humidity')
const date = document.querySelector('#date')
const day = document.querySelector('#day')
const listeler = document.querySelector('#listeler')
const havadurumu = document.querySelector('#havadurumu')
const loader = document.querySelector('#loader')

const sehirler = ['Istanbul','Izmir','Ankara']
//Animasyonların oynatılması için bir fonksiyon
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

//İlk yüklemelerin yapılması,gün tarih ve sayfanın ilk kartının arkaplanının seçilmesi
var d = new Date();
var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
day.innerHTML = '<h2>' + days[d.getDay()] + '</h2>';
date.innerHTML = d.getDate()+'.'+((d.getMonth()+1 >= 10) ? d.getMonth() : ('0'+d.getMonth()+1).slice(-2)) +'.'+ d.getFullYear();
firstCard.style.backgroundImage = "url('./img/svg/cloudy.svg')";

//Boş gözükmemesi için denizli bilgilerinin istenmesi ve değiştirilmesi
fetch('/weather?address=Denizli').then((response) => {
    response.json().then((data) => {
        if(data.error){
            alert(data.error)
        }else{
            firstCard.style.backgroundImage = "url('./img/svg/"+data.anlik.icon+".svg')";
            summary.textContent = data.anlik.summary;
            konum.textContent = data.location
            windSpeed.innerHTML = '<i class="wi wi-windy"></i>'+' '+data.anlik.windSpeed
            pressure.innerHTML = '<i class="wi wi-barometer"></i>'+' '+data.anlik.pressure
            humidity.innerHTML = '<i class="wi wi-humidity"></i>'+' '+data.anlik.humidity * 100 + '%'
            sicaklik.innerHTML = Math.round(data.anlik.sicaklik)+'°'
            animateCSS('#loader', 'fadeOut', function() {
                loader.className = 'text-center d-none'
                havadurumu.className = 'row mt-5 d-flex'
                animateCSS('#havadurumu', 'fadeIn')
              })

        }
    })
})

//Listeler için 3 adet istek yapılması içeriklerin değiştirilmesi.
sehirler.forEach(city => {
    fetch('/weather?address='+city).then((response) => {
        response.json().then((data) => {
            if(data.error){
                alert(data.error)
            }else{
                let list = "<tr><th scope='row'></th><td>"+ data.location+"</td><td>"+ Math.round(data.anlik.sicaklik)+'°' +"</td><td>"+'<i class="wi wi-humidity"></i>'+' '+data.anlik.humidity * 100 + '%' + "</td></tr>"
                listeler.innerHTML += list
    
            }
        })
    })
});



//Kullanıcının input girip istediği şehri araması ve gösterilmesi
button.addEventListener('click', (e) => {
    e.preventDefault()
    animateCSS('#havadurumu', 'fadeOut', function() {
        havadurumu.className = 'row mt-5 d-none'
        loader.className = 'text-center d-flex'
        animateCSS('#loader', 'fadeIn')
      })
    fetch('/weather?address='+search.value).then((response) => {
    response.json().then((data) => {
        if(data.error){
            alert(data.error)
        }else{
            firstCard.style.backgroundImage = "url('./img/svg/"+data.anlik.icon+".svg')";
            summary.textContent = data.anlik.summary;
            konum.textContent = data.location
            windSpeed.innerHTML = '<i class="wi wi-windy"></i>'+' '+data.anlik.windSpeed
            pressure.innerHTML = '<i class="wi wi-barometer"></i>'+' '+data.anlik.pressure
            humidity.innerHTML = '<i class="wi wi-humidity"></i>'+' '+data.anlik.humidity * 100 + '%'
            sicaklik.innerHTML = Math.round(data.anlik.sicaklik)+'°'
            console.log(data)
            animateCSS('#loader', 'fadeOut', function() {
                loader.className = 'text-center d-none'
                havadurumu.className = 'row mt-5 d-flex'
                animateCSS('#havadurumu', 'fadeIn')
              })

        }
    })
})
})
