/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "cooldude";

function restrict() {
  return async (req, res, next) => {
    console.log(res);
    const authError1 = {
      message: "shall not pass - no token!"
    };

    const authError2 = {
      message: "shall not pass - issue with JWT!"
    };

    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json(authError1);
      }

      jwt.verify(token, secret, (err, decodedPayload) => {
        if (err) {
          return res.status(401).json(authError2);
        }

        req.token = decodedPayload;
        next();
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = restrict;

// module.exports = (req, res, next) => {
//   res.status(401).json({ you: 'shall not pass!' });
// };
