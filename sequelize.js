const Sequelize = require('sequelize');

const sequelize = new Sequelize('bms', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize.authenticate().then(() => {
  console.log('连接成功')
}).catch(err => {
  console.error('连接失败')
})

sequelize.sync()

module.exports = sequelize