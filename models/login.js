
const sequelize = require('../sequelize')
const Sequelize = require('sequelize')

const login = sequelize.define('login', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    unique: {
      msg: '已添加'
    }
  },
  password: {
    type: Sequelize.INTEGER(6)
  }
}, { freezeTableName: true })

module.exports = login