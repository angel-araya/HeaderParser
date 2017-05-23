
const express = require('express')

const app = express()
app.set('port', process.env.PORT || 8080)

app.get('/', (req, res) => {
  res.json({"ipaddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            "language": req.headers['accept-language'],
            "software": req.headers['user-agent']})
})

app.listen(app.get('port'), () => {
  console.log('App listening on ', app.get('port'))
})
