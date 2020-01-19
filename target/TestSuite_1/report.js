$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1A_Bank/1A_Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abuasif.nyk@gmail.com"
    }
  ],
  "line": 3,
  "name": "User is on LogIn page",
  "description": "",
  "id": "user-is-on-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9271331100,
  "status": "passed"
});
formatter.before({
  "duration": 128100,
  "status": "passed"
});
formatter.before({
  "duration": 130700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Scenario: Unsuccessful Login with Invalid Username and Valid Password"
    },
    {
      "line": 6,
      "value": "#Given User is on Login page"
    },
    {
      "line": 7,
      "value": "#When User enters \"mithukhan18@yahoo.com\" into Username field"
    },
    {
      "line": 8,
      "value": "#And User enters \"123\" into Password field"
    },
    {
      "line": 9,
      "value": "#And User Click LogIn button"
    },
    {
      "line": 10,
      "value": "#And Login Denied With Alert Message \"Invalid Email or Password\""
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#Scenario: Unsuccessful Login with Valid Username and Invalid Password"
    },
    {
      "line": 13,
      "value": "#Given User is on Login page"
    },
    {
      "line": 14,
      "value": "#When User enters \"fahadbilla@yahoo.com\" into Username field"
    },
    {
      "line": 15,
      "value": "#And User enters \"123d34593234556\" into Password field"
    },
    {
      "line": 16,
      "value": "#And User Click LogIn button"
    },
    {
      "line": 17,
      "value": "#And Login Denied With Alert Message \"Invalid Email or Password\""
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#Scenario: Unsuccessful Login with Blank Username and Blank Password"
    },
    {
      "line": 21,
      "value": "#Given User is on Login page"
    },
    {
      "line": 22,
      "value": "#When User enters \"\" into Username field"
    },
    {
      "line": 23,
      "value": "#And User enters \"\" into Password field"
    },
    {
      "line": 24,
      "value": "#And User Click LogIn button"
    },
    {
      "line": 25,
      "value": "#And Login Denied With Alert Message \"Please enter valid email address\""
    },
    {
      "line": 26,
      "value": "#"
    },
    {
      "line": 27,
      "value": "#Scenario: Unsuccessful Login with Blank Username and Valid Password"
    },
    {
      "line": 28,
      "value": "#Given User is on Login page"
    },
    {
      "line": 29,
      "value": "#When User enters \"\" into Username field"
    },
    {
      "line": 30,
      "value": "#And User enters \"123\" into Password field"
    },
    {
      "line": 31,
      "value": "#And User Click LogIn button"
    },
    {
      "line": 32,
      "value": "#And Login Denied With Alert Message \"Please enter valid email address\""
    },
    {
      "line": 33,
      "value": "#"
    },
    {
      "line": 34,
      "value": "#Scenario: Unsuccessful Login with Valid Username and Blank Password"
    },
    {
      "line": 35,
      "value": "#Given User is on Login page"
    },
    {
      "line": 36,
      "value": "#When User enters \"fahadbillah@yahoo.com\" into Username field"
    },
    {
      "line": 37,
      "value": "#And User enters \"\" into Password field"
    },
    {
      "line": 38,
      "value": "#And User Click LogIn button"
    },
    {
      "line": 39,
      "value": "#And Login Denied With Alert Message \"Please enter password\""
    }
  ],
  "line": 41,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "user-is-on-login-page;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User enters \"erp.maxgroup@gmail.com\" into Username field",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enters \"123\" into Password field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User Click LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 10703964500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "erp.maxgroup@gmail.com",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Username_field(String)"
});
formatter.result({
  "duration": 4272966500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Password_field(String)"
});
formatter.result({
  "duration": 4064823900,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_Click_LogIn_button()"
});
formatter.result({
  "duration": 4114144700,
  "status": "passed"
});
formatter.before({
  "duration": 68600,
  "status": "passed"
});
formatter.before({
  "duration": 61300,
  "status": "passed"
});
formatter.before({
  "duration": 116500,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Select Role",
  "description": "",
  "id": "user-is-on-login-page;select-role",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "User select Creator at CDA",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click Confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDef.user_select_Creator_at_CDA()"
});
formatter.result({
  "duration": 4066166500,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.click_Confirm_button()"
});
formatter.result({
  "duration": 4086583200,
  "status": "passed"
});
formatter.uri("1A_Bank/1C_Bank_Logout.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abuasif.nyk@gmail.com"
    }
  ],
  "line": 3,
  "name": "User is going to Bank Log Out",
  "description": "",
  "id": "user-is-going-to-bank-log-out",
  "keyword": "Feature"
});
formatter.before({
  "duration": 71100,
  "status": "passed"
});
formatter.before({
  "duration": 98600,
  "status": "passed"
});
formatter.before({
  "duration": 127900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User is going to Log Out",
  "description": "",
  "id": "user-is-going-to-bank-log-out;user-is-going-to-log-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User click on profile button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User click again click on Log Out button",
  "keyword": "Then "
});
formatter.match({
  "location": "Bank_Logout_StepDef.user_click_on_profile_button()"
});
formatter.result({
  "duration": 4069204800,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Logout_StepDef.user_click_again_click_on_Log_Out_button()"
});
formatter.result({
  "duration": 4383574500,
  "status": "passed"
});
formatter.uri("1B_Master/1A_Master_Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abuasif.nyk@gmail.com"
    }
  ],
  "line": 3,
  "name": "User is on Master_LogIn page",
  "description": "",
  "id": "user-is-on-master-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 94600,
  "status": "passed"
});
formatter.before({
  "duration": 110700,
  "status": "passed"
});
formatter.before({
  "duration": 70400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Unsuccessful Master_LogIn with Invalid Username and Valid Password",
  "description": "",
  "id": "user-is-on-master-login-page;unsuccessful-master-login-with-invalid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on Master_LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"mithukhan18@yahoo.com\" into Username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"123\" into Password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Click Master_LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Master_LogIn Denied With Alert Message \"Invalid Email or Password\"",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 4248522300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mithukhan18@yahoo.com",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Username_field(String)"
});
formatter.result({
  "duration": 4128091400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Password_field(String)"
});
formatter.result({
  "duration": 4059072600,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4061192500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email or Password",
      "offset": 40
    }
  ],
  "location": "Master_Login_StepDef.master_loginDeniedWithAlertMessage(String)"
});
formatter.result({
  "duration": 4056608100,
  "status": "passed"
});
formatter.before({
  "duration": 80300,
  "status": "passed"
});
formatter.before({
  "duration": 65400,
  "status": "passed"
});
formatter.before({
  "duration": 54900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Unsuccessful Master_LogIn with Valid Username and Invalid Password",
  "description": "",
  "id": "user-is-on-master-login-page;unsuccessful-master-login-with-valid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is on Master_LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enters \"fahadbilla@yahoo.com\" into Username field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters \"123d34593234556\" into Password field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Click Master_LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Master_LogIn Denied With Alert Message \"Invalid Email or Password\"",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 6610962500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fahadbilla@yahoo.com",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Username_field(String)"
});
formatter.result({
  "duration": 4143400100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123d34593234556",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Password_field(String)"
});
formatter.result({
  "duration": 4101816200,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4062684200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Email or Password",
      "offset": 40
    }
  ],
  "location": "Master_Login_StepDef.master_loginDeniedWithAlertMessage(String)"
});
formatter.result({
  "duration": 4026887200,
  "status": "passed"
});
formatter.before({
  "duration": 79900,
  "status": "passed"
});
formatter.before({
  "duration": 107600,
  "status": "passed"
});
formatter.before({
  "duration": 103100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Unsuccessful Master_LogIn with Blank Username and Blank Password",
  "description": "",
  "id": "user-is-on-master-login-page;unsuccessful-master-login-with-blank-username-and-blank-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User is on Master_LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User enters \"\" into Username field",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters \"\" into Password field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Click Master_LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Master_LogIn Denied With Alert Message \"Please enter valid email address\"",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 6467200000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Username_field(String)"
});
formatter.result({
  "duration": 4048143800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Password_field(String)"
});
formatter.result({
  "duration": 4040919800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4069752400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid email address",
      "offset": 40
    }
  ],
  "location": "Master_Login_StepDef.master_loginDeniedWithAlertMessage(String)"
});
formatter.result({
  "duration": 4029799800,
  "status": "passed"
});
formatter.before({
  "duration": 69700,
  "status": "passed"
});
formatter.before({
  "duration": 82800,
  "status": "passed"
});
formatter.before({
  "duration": 57800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Unsuccessful Master_LogIn with Blank Username and Valid Password",
  "description": "",
  "id": "user-is-on-master-login-page;unsuccessful-master-login-with-blank-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User is on Master_LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User enters \"\" into Username field",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enters \"123\" into Password field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Click Master_LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Master_LogIn Denied With Alert Message \"Please enter valid email address\"",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 7050990700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Username_field(String)"
});
formatter.result({
  "duration": 4047076600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Password_field(String)"
});
formatter.result({
  "duration": 4055533500,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4068626400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid email address",
      "offset": 40
    }
  ],
  "location": "Master_Login_StepDef.master_loginDeniedWithAlertMessage(String)"
});
formatter.result({
  "duration": 4028731200,
  "status": "passed"
});
formatter.before({
  "duration": 50800,
  "status": "passed"
});
formatter.before({
  "duration": 70700,
  "status": "passed"
});
formatter.before({
  "duration": 79900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Unsuccessful Master_LogIn with Valid Username and Blank Password",
  "description": "",
  "id": "user-is-on-master-login-page;unsuccessful-master-login-with-valid-username-and-blank-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "User is on Master_LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters \"fahadbillah@yahoo.com\" into Username field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters \"\" into Password field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User Click Master_LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Master_LogIn Denied With Alert Message \"Please enter password\"",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 7181986800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fahadbillah@yahoo.com",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Username_field(String)"
});
formatter.result({
  "duration": 4126236500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Login_StepDef.user_enters_into_Password_field(String)"
});
formatter.result({
  "duration": 4043121300,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4065970500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter password",
      "offset": 40
    }
  ],
  "location": "Master_Login_StepDef.master_loginDeniedWithAlertMessage(String)"
});
formatter.result({
  "duration": 4027696600,
  "status": "passed"
});
formatter.before({
  "duration": 55800,
  "status": "passed"
});
formatter.before({
  "duration": 62900,
  "status": "passed"
});
formatter.before({
  "duration": 91800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Successful Login with Valid Credentials in Master Module",
  "description": "",
  "id": "user-is-on-master-login-page;successful-login-with-valid-credentials-in-master-module",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "User is on Master_LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User enters \"erp.maxgroup@gmail.com\" into Master_name field",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enters \"123\" into Master_Password field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User Click Master_LogIn button",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 6429201600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "erp.maxgroup@gmail.com",
      "offset": 13
    }
  ],
  "location": "Master_Login_StepDef.user_enters_into_Master_name_field(String)"
});
formatter.result({
  "duration": 4130127500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 13
    }
  ],
  "location": "Master_Login_StepDef.user_enters_into_Master_Password_field(String)"
});
formatter.result({
  "duration": 4059834000,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4059467800,
  "status": "passed"
});
});