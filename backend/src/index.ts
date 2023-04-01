const express = require('express')

const PORT = process.env.PORT || 3005

const app = express()

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})

app.get('/api', (req:any, res:any) => {
    res.json({
        message: 'Hello from backend'
    })
})

console.log('test')