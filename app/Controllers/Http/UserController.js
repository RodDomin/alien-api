'use strict'

const User = use('App/Models/User/index')
const { validateAll } = use('Validator')

class UserController {
  async index ({ request, auth }) {
  }

  async store ({ request, response }) {
    const rules = {
      username: 'required',
      email: 'required|email',
      password: 'required'
    }

    const messages = {
      'username.required': 'Username is required to continue',
      'email.required': 'Email is required for further communication',
      'email.email': 'Please enter an valid email address',
      'password.required': 'password is required for further communication'
    }

    const validation = await validateAll(request.all(), rules, messages)

    if (validation.fails()) {
      console.log(validation)

      return response.status(401).send({
        message: 'validation fail',
        erros: validation._errorMessages
      })
    }

    const data = request.all()

    const newUser = await User.create(data)

    return newUser
  }

  async update ({ request, auth }) {}

  async destroy ({ request, auth }) {}
}

module.exports = UserController
