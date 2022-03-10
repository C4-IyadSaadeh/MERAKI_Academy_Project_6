const connection = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
  const { email, password } = req.body;
  const query = "Select * FROM User WHERE email=? and is_deleted=0";
  const data = [email];
  connection.query(query, data, async (err, result) => {
    if (!result.length) {
      return res.status(403).json({
        success: false,
        message: `This is account dose not exist`,
      });
    } else {
      try {
        const valid = await bcrypt.compare(password, result[0].password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result[0].id,
          role: result[0].role,
          plan: result[0].plan,
        };
        const options = {
          expireAt: "120m",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);
        return res.status(200).json({
          success: true,
          message: `Login Successfully`,
          token: token,
          userId: result[0].id,
          role: result[0].role,
          plan: result[0].plan,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    }
  });
};
const loginAdmin = (req, res) => {
  const { email, password } = req.body;
  const query = "Select * FROM Admin WHERE email=? and is_deleted=0";
  const data = [email];
  connection.query(query, data, async (err, result) => {
    if (!result.length) {
      return res.status(403).json({
        success: false,
        message: `This is account dose not exist`,
      });
    } else {
      try {
        const valid = await bcrypt.compare(password, result[0].password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result[0].id,
          role: result[0].role,
        };
        const options = {
          expireAt: "120m",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);
        return res.status(200).json({
          success: true,
          message: `Login Successfully`,
          token: token,
          userId: result[0].id,
          role: result[0].role,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    }
  });
};
module.exports = {
  loginUser,
  loginAdmin,
};
