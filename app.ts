import express from 'express'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
const accessLogStream = fs.createWriteStream(path.join(process.cwd(), 'access.log'), {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}))


app.get("/", () => {
    console.log("Hello World")
})

app.listen(3000, () => {
    console.log(`Berhasil berjalan di localhost:${3000}`)
})