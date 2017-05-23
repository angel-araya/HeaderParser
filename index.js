
const express = require('express')

const app = express()
app.set('port', process.env.PORT || 8080)

app.get('/', (req, res) => {
  res.send(req.ip)
})

app.listen(app.get('port'), () => {
  console.log('App listening on ', app.get('port'))
})
