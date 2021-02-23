const Login = require('../models/login')
const Op = require('sequelize').Op

const loginIn = async (ctx) => {
  const user = ctx.request.body
  const data = await Login.findOne({
    where: {
      username: {
        [Op.eq]: `${user.username}`
      },
      password: user.password
    }
  })
  ctx.body = {
    code: data ? 1000 : 1003,
    data,
    desc: data ? '登陆成功' : '账号或密码错误'
  }
}

module.exports = {
  loginIn
}