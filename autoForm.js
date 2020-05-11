var By = Java.type('org.openqa.selenium.By');
var Thread = Java.type('java.lang.Thread');
var testApp = 'http://localhost:8090';
var username = 'admin@example.com';
var password = 'password';

var extSel = org.parosproxy.paros.control.Control.getSingleton().
				getExtensionLoader().getExtension(
					org.zaproxy.zap.extension.selenium.ExtensionSelenium.class) 

var wd = extSel.getWebDriverProxyingViaZAP(1, "firefox");
Thread.sleep(2000);
wd.get(testApp);
Thread.sleep(4000);
wd.findElement(By.id("email")).sendKeys(username);
wd.findElement(By.id("password")).sendKeys(password);
wd.findElement(By.tagName("button")).click();
