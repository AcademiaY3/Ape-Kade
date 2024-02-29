import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import corsOption from "./Config/CorsConfig.js";
import logger from "./Logs/logger.js";
import proxy from 'express-http-proxy'
import TokenWare from "./Middleware/RabbitClient/TokenWare.js";
import consumeMessages from "./Middleware/RabbitClient/consumeMessages.js";

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(cors(corsOption))
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    return res.status(200).json({ 'msg': 'gateway online' })
})

// proxies
app.use('/product', TokenWare,proxy("https://www.youtube.com"))

consumeMessages()

app.use((req, res) => {
    return res.status(404).json({'msg':'invalid routes'})
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})
