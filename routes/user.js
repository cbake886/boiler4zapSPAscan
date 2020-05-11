var express = require("express");
var helpers =  require("../helpers/helpers");

const router = express.Router();

router.post('/signin', (req, res) => {
      if (req.body.email == 'admin@example.com' && req.body.password == 'password') {
        const expire = Date.now() + 180000000;
        const body = {
          id: req.body.email,
          email: req.body.email,
          expire: expire
        };
        const token = helpers.jwtSign({user: body});
        res.cookie('jwt', token, { httpOnly: true, sameSite: true, maxAge:180000000 });
        res.send({
          body,
          success: true,
          token,
          expire
        });
      } else {
        res.status(400).send("Wrong password");
      }
});

module.exports = router;
