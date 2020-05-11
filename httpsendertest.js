
function logger() {
    print('[' + this['zap.script.name'] + '] ' + arguments[0]);
  }
  
  function isStaticUrl(url) {
    if (url.indexOf('.xml') !== -1) {
      return true;
    }
  
    if (url.indexOf('.css') !== -1) {
      return true;
    }
    
    if (url.indexOf('.gif') !== -1) {
      return true;
    }
  
    if (url.indexOf('.js') !== -1) {
      return true;
    }
    
    if (url.indexOf('.txt') !== -1) {
      return true;
    }
  
    if (url.indexOf('.htm') !== -1) {
      return true;
    }
    return false;
  }
  
  var HttpSender    = Java.type('org.parosproxy.paros.network.HttpSender');
  var ScriptVars    = Java.type('org.zaproxy.zap.extension.script.ScriptVars');
  
  function sendingRequest(msg, initiator, helper) {  
    var headers = msg.getRequestHeader();
    var url     = headers.getURI().toString();
    // var qry     = headers.getURI().getQuery();
    // var cookies = headers.getCookieParams();
    // var reqbody = msg.getRequestBody().toString();
    
    if (initiator === HttpSender.SPIDER_INITIATOR) {}  
    if (isStaticUrl(url)) {return true;}
  
    
    var token = ScriptVars.getGlobalVar("target-api.token")
  
    if (!token) {return true;}
    
    msg.getRequestHeader().setHeader('x-access-token', token);
    
  }
  
  function responseReceived(msg, initiator, helper) {}
