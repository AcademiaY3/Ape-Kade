import { createLogger, transports, format } from 'winston'
import {v4 as uuid} from 'uuid'

const logger = (req, res, next) => {
    const clientIp = req.ip || req.connection.remoteAddress
    const id = uuid()

    const gatewayLogger = createLogger({
        level: 'info',
        format: format.combine(format.timestamp(), format.json()),
        defaultMeta: { service: 'gateway-service' },
        transports: [
            new transports.File({
                filename: 'gateway.log'
            })
        ],
    })

    gatewayLogger.info({
        id,
        method: req.method,
        clientIp,
        origin: req.headers.origin,
        url: req.url,
        statusCode: res.statusCode,
        userAgent: req.get('User-Agent')
    })

    next()

}

export default logger