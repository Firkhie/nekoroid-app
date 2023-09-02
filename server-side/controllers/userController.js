const { checkPass } = require("../helpers/bcrypt");
const { generateJwtToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { fullName, email, password, phoneNumber, address, role = 'Client' } = req.body
      const createdUser = await User.create({ fullName, email, password, phoneNumber, address, role })
      res.status(201).json({ id: createdUser.id, email: createdUser.email })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  
  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email) throw { name: 'EmailRequired' }
      if (!password) throw { name: 'PasswordRequired' }

      const user = await User.findOne({ where: { email } })
      if (user) {
        let checkPassword = checkPass(password, user.password)
        if (checkPassword) {
          let jwtToken = generateJwtToken({ id: user.id })
          res.status(200).json({ access_token: jwtToken, fullName: user.fullName })
        } else throw { name: 'EmailPasswordInvalid' }
      } else throw { name: 'EmailPasswordInvalid' }
    } catch (err) {
      next(err)
      console.log(err)
    }
  }
}

module.exports = UserController;
