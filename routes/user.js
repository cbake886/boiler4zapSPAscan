var express = require("express");
var helpers =  require("../helpers/helpers");

const router = express.Router();

router.post('/signin', (req, res) => {

      if (req.body.email == 'admin@example.com' && req.body.password == 'password') {
        const body = {
          id: req.body.email,
          email: req.body.email
        };
        const token = helpers.jwtSign({user: body});
        const expire = (Date.now() + 180000000);
        res.cookie('jwt', token, { maxAge:180000000 });
        //res.cookie('jwt',token, { domain: "localhost", path: '/', expires: new Date(Date.now() + 9000000), httpOnly: false });
        res.status(200).send({
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
