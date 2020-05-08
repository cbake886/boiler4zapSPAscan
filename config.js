var config = {
  bcrypt: {
    saltRounds: 10
  },
  admin_pass: "password",
  admin_email: "admin@example.com",
  secret_key: "HUEyqESqgQ1yTwzVlO6wprC9Kf1J1xuA",
  port: "8080",
  hostUI: "http://localhost",
  portUI: process.env.NODE_ENV === "production" ? "" : "3000",
};

config.host = "http://localhost";
config.apiUrl = `${config.host}${config.port ? `:${config.port}` : ``}`;

module.exports = config;