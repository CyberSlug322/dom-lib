import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/', async function (req, res) {
    console.log('got request')
})

app.listen(PORT, () => {
    console.log(`server works on port ${PORT}`)
})
