'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserLoginHistorySchema extends Schema {
  up () {
    this.create('user_login_histories', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('token', 255).notNullable()
      table.boolean('verified').nullable()
      table.string('location').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_login_histories')
  }
}

module.exports = UserLoginHistorySchema
