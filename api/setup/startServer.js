// App Imports
import models from '../models/index'
import config from '../config/config.json'

export default function(server) {
    console.info('SETUP - Starting server...')

    // Create tables
    models.sequelize.sync({}).then(() => {
        // Start web server
        server.listen(config.port, () => {
            console.info(`INFO - Server started on port ${ config.port }.`)
        })
    })
}