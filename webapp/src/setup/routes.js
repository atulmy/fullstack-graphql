// Imports
import axios from 'axios'

// App Imports
import { APP_URL_API } from './config'

// APP Routes
export const routes = {
    home: '/',

    about: '/about',

    thoughts: {
        list: '/thoughts',

        create: '/thoughts/create'
    },
}

export const routesApi = APP_URL_API