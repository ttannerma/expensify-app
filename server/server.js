const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

// Serve public folder
app.use(express.static(publicPath))

// * is for all unmatched routes, return index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

// Launch server
app.listen(port, () => {
    console.log('server is running...')
})
