import { v4 as uuid } from 'uuid'
import RabbitMQCon from '../../Config/Connections/RabbitMQCon.js'

const SendToken = async (token) => {
    const { channel } = await RabbitMQCon.connect()
    try {
        const queue = process.env.TOKEN_QUEUE
        const correlationId = uuid()
        const replyQue = await channel.assertQueue('', { exclusive: true })

        const validationPromise = new Promise((resolve, reject) => {
            const timoeout = setTimeout(() => {
                reject('API couldnt Full Fill Request')
            }, 8000)

            channel.consume(replyQue.queue, (message) => {
                if (message.properties.correlationId === correlationId) {
                    const userValidated = JSON.parse(message.content.toString())
                    console.log(`Received validation response: ${JSON.stringify(userValidated)}`);
                    clearTimeout(timoeout)
                    resolve(userValidated);
                } else {
                    reject('Response Data 404')
                }
            }, { noAck: true })
        })

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(token)), {
            persistent: true,
            correlationId: correlationId,
            replyTo: replyQue.queue
        })
        console.log(`Message sent to Auth Queue: ${JSON.stringify(token)}`);
        return validationPromise;
    } catch (error) {
        console.error(error)
    }
}

export default SendToken