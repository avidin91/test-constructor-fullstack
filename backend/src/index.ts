const express = require('express')

const PORT = process.env.PORT || 9000

const app = express()



app.get('/api', (req:any, res:any) => {
    res.json({
        message: 'Hello from backend123'
    })
})

app.get('/', (req:any, res:any) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})

console.log('test')