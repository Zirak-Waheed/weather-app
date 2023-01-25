console.log("its loaded successfully")
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const weatherMessage = document.querySelector('#weatherMessage')
const locationDetail = document.querySelector('#locationDetail')
const errorMessage = document.querySelector('#errorMessage')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  fetch("/weather?address=" + search.value).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        errorMessage.textContent = data.error
        locationDetail.textContent = ''
        weatherMessage.textContent = ''
      } else
      {
        errorMessage.textContent = 'Pehle Paise do. Har cheez muft me ni milti. For more queries contact me at 03314218631'
      //   locationDetail.textContent = data.location
      //   weatherMessage.textContent = "it is " + data.temperature + " degree  outside, And feels like "+ data.feelslike
      }
    })
  })
})
