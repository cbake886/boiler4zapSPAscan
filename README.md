# boiler4zapSPAscan

<blockquote>
  This was created to allow for the testing of a more modern SPA-type app with the AJAX spider and OWASP ZAP active scans.
  </blockquote>

### This project was created with:

* Create React App => https://reactjs.org/docs/create-a-new-react-app.html
* Material UI => https://material-ui.com/
* Express JS => https://expressjs.com/
* Passport JS (JWT) => http://www.passportjs.org/packages/passport-jwt/
* React Redux => https://react-redux.js.org/


### To get up and running do the following steps:

1.) Clone the GitHub Repo:

```shell
git clone https://github.com/cbake886/boiler4zapSPAscan.git
```

2.) Navigate to root of project and run:

```shell
npm install
```

3.) To start the project:


```shell
npn run start_prod
```

4.) Navigate to you browser at http://localhost:8090 and you should see a login page. The default hardcoded creds are:

```shell
Usename: admin@example.com
Password: password
```

### Context settings used to test: HTTP/1.1 200 OK

| Attribute    |    Value          |
---------------|-------------------|
| Context Name | boiler4zapSPAscan |
| API URL      | http://localhost:8090/api/user/signin |
| JSON         | {"email":"%username%","password":"%password%"} |
| TokenAttr    | jwt |
| Logged In Regex | \QHTTP/1.1 200 OK\E |
| Logged Out | \Qhttp://localhost:8090/login\E
