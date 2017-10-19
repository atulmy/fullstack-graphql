// Imports
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

export default function(apiServer) {
    console.info('SETUP - Loading modules...')

    // Enable CORS
    apiServer.use(cors())

    // Request body parser
    apiServer.use(bodyParser.json())
    apiServer.use(bodyParser.urlencoded({extended: false}))

    // Request body cookie parser
    apiServer.use(cookieParser())

    // HTTP logger
    apiServer.use(morgan('tiny'))
}