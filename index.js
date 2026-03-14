const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // Määritellään portti

// Palauttaa tekstin selaimeen
app.get('/', (req, res) => {
  res.send('Hello World! This is my Render app!')
})

// Käynnistetään palvelin ja kuunneellaan porttia
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

