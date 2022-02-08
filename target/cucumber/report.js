$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('CucumberJava\cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.openBrowser()"
});
formatter.result({
  "duration": 53157202200,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nJavaScript error: resource://gre/modules/XULStore.jsm, line 66: Error: Can\u0027t find profile directory.\r\n\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027AR-HYD-LAP-146\u0027, ip: \u0027172.26.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:134)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:116)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:212)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat CucumberJava.annotation.openBrowser(annotation.java:16)\r\n\tat ✽.Given I have open the browser(CucumberJava\\cucumberJava.feature:5)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\nJavaScript error: resource://gre/modules/XULStore.jsm, line 66: Error: Can\u0027t find profile directory.\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:122)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:116)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:221)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:212)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat CucumberJava.annotation.openBrowser(annotation.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:44)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:223)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:75)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.Cucumber.run(Cucumber.java:80)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "annotation.goToFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "annotation.loginButton()"
});
formatter.result({
  "status": "skipped"
});
});