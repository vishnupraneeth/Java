$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vishn/eclipse-workspace/FreeCRMTestAutomationdatadriven/src/main/java/features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Free CRM create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page in free crm",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "formatter.result({
  "duration": 6021788186800,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinations.LoginStepDefiantion.enter_the_username_and_password(LoginStepDefiantion.java:37)\r\n\tat ✽.Then Enter the username and password(login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefiantion.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefiantion.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}), userDataDir\u003dC:\\Users\\vishn\\AppData\\Local\\Temp\\scoped_dir22464_302922133}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49754}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 4f73d816b4044ac45522a2480a378ec1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:582)\r\n\tat stepDefinations.LoginStepDefiantion.click_on_login_button(LoginStepDefiantion.java:45)\r\n\tat ✽.Then Click on login button(login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefiantion.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});ffset": 27
    }
  ],
  "location": "Contactslogin.user_enter_and(String,String)"
});
formatter.result({
  "duration": 1437213300,
  "status": "passed"
});
formatter.match({
  "location": "Contactslogin.user_click_on_login_button()"
});
formatter.result({
  "duration": 6326779500,
  "status": "passed"
});
formatter.match({
  "location": "Contactslogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 10079200,
  "status": "passed"
});
formatter.match({
  "location": "Contactslogin.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 541996500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vishnu",
      "offset": 29
    },
    {
      "val": "praneeth",
      "offset": 42
    },
    {
      "val": "CEO",
      "offset": 57
    }
  ],
  "location": "Contactslogin.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 1856078800,
  "status": "passed"
});
formatter.match({
  "location": "Contactslogin.close_the_browser()"
});
formatter.result({
  "duration": 75454600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page in free crm",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"vishnu95\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters contact details \"vishnu\" and \"praneeth\" and \"CEO\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Contactslogin.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 6496857000,
  "status": "passed"
});
formatter.match({
  "location": "Contactslogin.title_of_login_page_in_free_crm()"
});
formatter.result({
  "duration": 11208000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vishnu95",
      "offset": 12
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "Contactslogin.user_enter_and(String,String)"
});
formatter.result({
  "duration": 1338165100,
  "status": "passed"
});
formatter.match({
  "location": "Contactslogin.user_click_on_login_button()"
});
formatter.result({
  "duration": 6685144700,
  "status": "passed"
});
formatter.match({
  "location": "Contactslogin.user_is_on_home_page()"
});
formatter.result({
  "duration": 6811600,
  "status": "passed"
});
formatter.match({
  "location": "Contactslogin.user_moves_to_new_contacts_page()"
});
formatformatter.result({
  "duration": 2123469453400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-0NAVMR5\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}), userDataDir\u003dC:\\Users\\vishn\\AppData\\Local\\Temp\\scoped_dir19844_1065559435}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55558}, acceptInsecureCerts\u003dfalse, browserVersion\u003d79.0.3945.88, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: d412070ffa2e59c097b06be60e1b6fb4\n*** Element info: {Using\u003dcss selector, value\u003dframe[name\u003d\u0027mainpanel\u0027],iframe[name\u003d\u0027mainpanel\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:443)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:514)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:975)\r\n\tat stepDefinations.Contactslogin.user_moves_to_new_contacts_page(Contactslogin.java:80)\r\n\tat ✽.Then user moves to new contacts page(C:/Users/vishn/eclipse-workspace/FreeCRMTestAutomationdatadriven/src/main/java/features/contacts.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "vishnu",
      "offset": 29
    },
    {
      "val": "praneeth",
      "offset": 42
    },
    {
      "val": "CEO",
      "offset": 57
    }
  ],
  "location": "Contactslogin.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Contactslogin.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});