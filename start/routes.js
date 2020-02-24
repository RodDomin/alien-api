'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { message: 'Wellcome to venus api' }
})

Route.group('not authenticated routes', () => {
  Route.post('/users', 'UserController.store')

  Route.post('/session', 'SessionController.store')
})

Route.group('authtenticaded routes', () => {
  Route.put('/users/:id', 'UserController.update')
  Route.delete('/users/:id', 'UserController.destroy')
  Route.get('/users/:id', 'UserController.show')
  Route.get('/users', 'UserController.index')

  Route.get('/session', 'SessionController.index')
}).middleware(['auth'])
