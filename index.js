const app = require('express')()

app.listen(3000, () => console.log('Server connected on port 3000'))

app.get('/', (req, res) => {
  res.send('welcome back!')
})
