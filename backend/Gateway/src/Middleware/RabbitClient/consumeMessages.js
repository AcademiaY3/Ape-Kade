import amqp from 'amqplib';

const consumeMessages = async () => {
    try {
        const connection = await amqp.connect(process.env.RABBIT_URI);
        const channel = await connection.createChannel();

        const queue = 'auth-queue'
        await channel.assertQueue(queue, { durable: false });

        console.log(`Authentication Service is waiting for messages. To exit, press CTRL+C`);

        channel.consume(queue, (msg) => {
            const userDetails = JSON.parse(msg.content.toString());
            console.log(`Received authentication request: ${JSON.stringify(userDetails)}`);

            // Simulate authentication logic

            // Send authentication response to the Gateway Service
            channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify({ authenticated: false })), {
                correlationId: msg.properties.correlationId,
            });

            // Acknowledge the message
            channel.ack(msg);
        });
    } catch (error) {
        console.error('Error consuming messages in Authentication Service:', error);
        throw error;
    }
};
export default consumeMessages
