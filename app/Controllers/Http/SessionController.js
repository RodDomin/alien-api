'use strict'

const User = use('App/Models/User/index')
const Token = use('App/Models/Token')

class SessionController {
  async index ({ auth, response }) {
    try {
      await auth.check()

      const tokens = await Token.findBy('user_id', auth.user.id)

      console.log('aqui')
      console.log(tokens)
      console.log(auth.user.id)

      return tokens
    } catch (err) {
      return response.status(500).send(err)
    }
  }

  async store ({ request, auth }) {
    try {
      const { email, password } = request.all()

      const token = await auth.attempt(email, password)

      const user = await User.findBy('email', email)

      return {
        user,
        token
      }
    } catch (err) {
      return err
    }
  }

  async delete () {}

  async update () {}
}

module.exports = SessionController
