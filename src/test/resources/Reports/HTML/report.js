$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/New_UI_View/TC_01_Login_Page_Validation.feature");
formatter.feature({
  "name": "Validate application login Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate SalesIntel application Launching application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the url",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.launch_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel application Login Screen Content",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Validate Login Page Title is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Validate_Page_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Email Field is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Email_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Password Field is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Password_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Remember Me Checkbox is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Remember_Me()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Forgot Password Link is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Forgot_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate FAQ Link is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_FAQ()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Login Button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Validate_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate SalesIntel Application With Different Login Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Validate The Login Details With Different Combination",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.validate_The_Login_Details_With_Different_Combination()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});