let key = "2cfda1f27f8f18422038c85cc30073ad"
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${42.882004}&lon=${74.582748}&lang=ru&units=metric&appid=${key}`

let $temp = document.querySelector('.temp')
let $city = document.querySelector('#city')
let $description = document.querySelector('.description')
let $currentImg = document.querySelector('#currentImg')
let $max = document.querySelector('.max')
let $min = document.querySelector('.min')
let $days = document.querySelector('.days')
let $hours = document.querySelector('.hours')



// ОБЫЧНО
// fetch(url)
//    .then(resp => resp.json())
//    .then(data =>{
//     console.log(data)
//       let currentData = data.data[0]
//       $temp.textContent = Math.trunc(Number(currentData.app_max_temp)) + "°"
//       $description.textContent = currentData.weather.description
//       $max.textContent = 'макс '+ Math.trunc(Number(currentData.max_temp)) + "° "
//       $min.textContent = 'мин ' + Math.trunc(Number(currentData.min_temp)) + "° "
//       $currentImg.setAttribute('src' , `https://www.weatherbit.io/static/img/icons/${currentData.weather.icon}.png`)
//       let days = data.data
//       $days.innerHTML = ""
//       days.forEach(element =>{
//         $days.insertAdjacentHTML('beforeend',`
//             <div class="day">
//             <p>${element.datetime}</p>
//             <img src="https://www.weatherbit.io/static/img/icons/${element.weather.icon}.png">
//             <p>макс ${Math.trunc(Number(element.max_temp))} °</p>
//             <p>мин ${Math.trunc(Number(element.min_temp))} °</p>
//             </div>
//         `)
//       });

// })


// $city.addEventListener('change', function(){
//     url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${$city.value},KG&lang=ru&key=${key}`

//     fetch(url)
//     .then(resp => resp.json())
//     .then(data =>{

//        let currentData = data.data[0]
//        $temp.textContent = Math.trunc(Number(currentData.app_max_temp)) + "°"
//        $description.textContent = currentData.weather.description
//        $max.textContent = 'макс '+ Math.trunc(Number(currentData.max_temp)) + "° "
//        $min.textContent = 'мин ' + Math.trunc(Number(currentData.min_temp)) + "° "
//        $currentImg.setAttribute('src' , `https://www.weatherbit.io/static/img/icons/${currentData.weather.icon}.png`)

//        let days = data.data
//        $days.innerHTML = ""
//        days.forEach(element =>{
//          $days.insertAdjacentHTML('beforeend',`
//              <div class="day">
//              <p>${element.datetime}</p>
//              <img src="https://www.weatherbit.io/static/img/icons/${element.weather.icon}.png">
//              <p>макс ${Math.trunc(Number(element.max_temp))} °</p>
//              <p>мин ${Math.trunc(Number(element.min_temp))} °</p>
//              </div>
//          `)
//        });
//     })
// })


























// НАПИСАНО С ASAYNC AWAIT
async function getData(url){  //асинхронная функция получаем данные
  let resp = await fetch (url)  // так получаем данныу
  let data = await resp.json() // переводим данные на json
  console.log(data)  //  в переменную data получаем обекты
  viewCurrent(data.current) //из обекта viewCurrent отпровляем своства current 
  viewHourly(data.hourly) // viewHourly отправляем свойства hourly
  viewDaily(data.daily) // viewDaily отправлем в дата
}

getData(url)

function viewCurrent(data){
  $temp.textContent = Math.trunc(data.temp) + "°"
  $currentImg.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
  $description.textContent = data.weather[0].description 
}

function viewHourly(data){ //тут массив
  data.forEach((element , items) =>{ // каждый массив записваем в параметр елемент
      $hours.insertAdjacentHTML('beforeend' , `
      <div class="hour">
      <p>${new Date() .getHours() + items <= 24 ? new Date() .getHours() + items : -7+items }</p>  
      <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
      <p>${Math.trunc(element.temp)}°</p>
      </div>
      `)
  });
}

function viewDaily(data){  // получили данные
   console.log(data)

   data.forEach((element , items) => {
    $days.insertAdjacentHTML('beforeend',`
    <div class="day">
    <p>${items==0 ? "сегодня" : days[new Date().getDay() + items]}</p>
    <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
    <p>${element.temp.min}</p>
    <p>${element.temp.max}</p>
    </div>
    `)
   })
}


// масиив

let days =[
  "воскресение",
  "понидельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресение",
  "понидельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
]
$city.addEventListener("change",function(){
  switch ($city.value){

  }
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${42.882004}&lon=${74.582748}&lang=ru&units=metric&appid=${key}`

  getData(url)

})










































































