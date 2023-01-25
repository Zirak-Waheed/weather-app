const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('./utils/weather')

const { hasSubscribers } = require('diagnostics_channel')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
app.use(express.static(path.join(__dirname, '../public')));
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

app.get('/', (req, res) => {
  res.render('index',
  {
    name: 'Zirak'
  })
})

app.get('/weather', (req, res) => {
  console.log(req.query.address)
  if (req.query.address){
    weather(req.query.address, (error, result) => {
      if (error) {
        res.send(
        {
          error: error
        })
      } else
      {
        res.send(result)
      }
    })
  } else
  {
    res.send(
    {
      error: 'Please enter location'
    })
  }
})

app.get('/help', (req, res) => {
  res.send('Help help help help')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/help/*', (req, res) => {
  res.render('error',
  {
    message: 'Article not found'
  })
})

app.get('*', (req, res) => {
  res.render('error',
  {
    message: 'Page not Found'
  })
})

app.listen('3000', () =>{
  console.log('listening on http://localhost:3000')
})
