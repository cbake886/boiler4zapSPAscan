function logger() {
  print('[' + this['zap.script.name'] + '] ' + arguments[0]);
}
var AuthenticationHelper = Java.type('org.zaproxy.zap.authentication.AuthenticationHelper');
var HttpRequestHeader = Java.type('org.parosproxy.paros.network.HttpRequestHeader');
var HttpHeader        = Java.type('org.parosproxy.paros.network.HttpHeader');
var URI               = Java.type('org.apache.commons.httpclient.URI');

function authenticate(helper, paramsValues, credentials) {
  var token, msg, resbody = '';
  var loginApiUrl = paramsValues.get('API URL');
  var redirectAfterLogin = paramsValues.get('GET URL after login');
  var jsonString  = paramsValues.get('JSON'); // '{"email":"%username%","password":"%password%"}'
  var username = credentials.getParam('Username');
  var password = credentials.getParam('Password');

 
  var reqbody = jsonString.replace('%username%', username).replace('%password%', password);
  var requri    = new URI(loginApiUrl, false);
  var requriTwo    = new URI(loginApiUrl + "/app/dashboard" , false);
  var reqheader = new HttpRequestHeader(HttpRequestHeader.POST, requri, HttpHeader.HTTP10);

  reqheader.setHeader('Content-Type', 'application/json;charset=UTF-8')
  msg = helper.prepareMessage();
  msg.setRequestHeader(reqheader);
  msg.setRequestBody(reqbody);

  logger(' Sending POST to ' + requri + ' with body: ' + reqbody);

  helper.sendAndReceive(msg);
  resbody = msg.getResponseBody().toString();
   var statusCode = msg.getResponseHeader().getStatusCode();

  try {
    var data = JSON.parse(resbody);
 logger(data.token)
    token = data["token"]
 logger(token)
    org.zaproxy.zap.extension.script.ScriptVars.setGlobalVar("target-api.token", token)
logger(statusCode)
 if (statusCode == 200) {
 var redirectURL = "http://localhost:8090/#/app/dashboard";
var thirdRequestURI = new URI(redirectURL, false);
    var thirdRequestMethod = HttpRequestHeader.GET;
    var thirdRequestMainHeader = new HttpRequestHeader(thirdRequestMethod, thirdRequestURI, HttpHeader.HTTP10);
var thirdMsg = helper.prepareMessage();
thirdMsg.setRequestHeader(thirdRequestMainHeader);
thirdMsg.getRequestHeader().setHeader('x-access-token', token);
helper.sendAndReceive(thirdMsg, false);

  return thirdMsg;
} else {
return msg;
}
  } catch (e) {
logger(e)
    logger('cant-parse-json - auth failed?')
    logger(resbody)
  }

}


function getRequiredParamsNames() {
  return ['API URL', 'JSON'];
}

function getOptionalParamsNames() {
  return ['TokenAttr'];
}

function getCredentialsParamsNames() {
  return ['Username', 'Password'];
}