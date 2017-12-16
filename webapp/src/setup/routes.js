// App Imports
import {APP_URL_API} from './config'

// APP Routes
export const routes = {
  home: '/',

  about: '/about',

  thoughts: {
    list: '/thoughts',

    create: '/thoughts/create',

    view: (id) => {
      return `/thought/${ id }`
    }
  },
}

export const routesApi = APP_URL_API