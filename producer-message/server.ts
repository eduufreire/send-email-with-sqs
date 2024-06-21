import express from 'express'
import router from './src/routes'
import e from 'express'

const app = express()

app.use(express.json())

app.use(router)

app.listen(3333, () => {
    console.log("Server running")
})