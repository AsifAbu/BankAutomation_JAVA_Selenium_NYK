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
  "duration": 12864634200,
  "status": "passed"
});
formatter.before({
  "duration": 118000,
  "status": "passed"
});
formatter.before({
  "duration": 76700,
  "status": "passed"
});
formatter.before({
  "duration": 68000,
  "status": "passed"
});
formatter.before({
  "duration": 88600,
  "status": "passed"
});
formatter.before({
  "duration": 78900,
  "status": "passed"
});
formatter.before({
  "duration": 126700,
  "status": "passed"
});
formatter.before({
  "duration": 137300,
  "status": "passed"
});
formatter.before({
  "duration": 86300,
  "status": "passed"
});
formatter.before({
  "duration": 78700,
  "status": "passed"
});
formatter.before({
  "duration": 155900,
  "status": "passed"
});
formatter.before({
  "duration": 133500,
  "status": "passed"
});
formatter.before({
  "duration": 126800,
  "status": "passed"
});
formatter.before({
  "duration": 142800,
  "status": "passed"
});
formatter.before({
  "duration": 132600,
  "status": "passed"
});
formatter.before({
  "duration": 176000,
  "status": "passed"
});
formatter.before({
  "duration": 142200,
  "status": "passed"
});
formatter.before({
  "duration": 129300,
  "status": "passed"
});
formatter.before({
  "duration": 113500,
  "status": "passed"
});
formatter.before({
  "duration": 128500,
  "status": "passed"
});
formatter.before({
  "duration": 139100,
  "status": "passed"
});
formatter.before({
  "duration": 119100,
  "status": "passed"
});
formatter.before({
  "duration": 137100,
  "status": "passed"
});
formatter.before({
  "duration": 111100,
  "status": "passed"
});
formatter.before({
  "duration": 109400,
  "status": "passed"
});
formatter.before({
  "duration": 100200,
  "status": "passed"
});
formatter.before({
  "duration": 102500,
  "status": "passed"
});
formatter.before({
  "duration": 105000,
  "status": "passed"
});
formatter.before({
  "duration": 104000,
  "status": "passed"
});
formatter.before({
  "duration": 125900,
  "status": "passed"
});
formatter.before({
  "duration": 124900,
  "status": "passed"
});
formatter.before({
  "duration": 136100,
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
formatter.step({
  "line": 46,
  "name": "User Login Successfully",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 3407052500,
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
  "duration": 4343172300,
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
  "duration": 4065513900,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_Click_LogIn_button()"
});
formatter.result({
  "duration": 4406672600,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_Login_Successfully()"
});
formatter.result({
  "duration": 8409742300,
  "status": "passed"
});
formatter.before({
  "duration": 122200,
  "status": "passed"
});
formatter.before({
  "duration": 133600,
  "status": "passed"
});
formatter.before({
  "duration": 108400,
  "status": "passed"
});
formatter.before({
  "duration": 139000,
  "status": "passed"
});
formatter.before({
  "duration": 132400,
  "status": "passed"
});
formatter.before({
  "duration": 157500,
  "status": "passed"
});
formatter.before({
  "duration": 110200,
  "status": "passed"
});
formatter.before({
  "duration": 115400,
  "status": "passed"
});
formatter.before({
  "duration": 121400,
  "status": "passed"
});
formatter.before({
  "duration": 121600,
  "status": "passed"
});
formatter.before({
  "duration": 98200,
  "status": "passed"
});
formatter.before({
  "duration": 97000,
  "status": "passed"
});
formatter.before({
  "duration": 100300,
  "status": "passed"
});
formatter.before({
  "duration": 376700,
  "status": "passed"
});
formatter.before({
  "duration": 131900,
  "status": "passed"
});
formatter.before({
  "duration": 95900,
  "status": "passed"
});
formatter.before({
  "duration": 99800,
  "status": "passed"
});
formatter.before({
  "duration": 108000,
  "status": "passed"
});
formatter.before({
  "duration": 97200,
  "status": "passed"
});
formatter.before({
  "duration": 81700,
  "status": "passed"
});
formatter.before({
  "duration": 92100,
  "status": "passed"
});
formatter.before({
  "duration": 78400,
  "status": "passed"
});
formatter.before({
  "duration": 77500,
  "status": "passed"
});
formatter.before({
  "duration": 48600,
  "status": "passed"
});
formatter.before({
  "duration": 81000,
  "status": "passed"
});
formatter.before({
  "duration": 53500,
  "status": "passed"
});
formatter.before({
  "duration": 48500,
  "status": "passed"
});
formatter.before({
  "duration": 175900,
  "status": "passed"
});
formatter.before({
  "duration": 125200,
  "status": "passed"
});
formatter.before({
  "duration": 53800,
  "status": "passed"
});
formatter.before({
  "duration": 42400,
  "status": "passed"
});
formatter.before({
  "duration": 45000,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Select Role",
  "description": "",
  "id": "user-is-on-login-page;select-role",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "User select Creator at CDA",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "click Confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDef.user_select_Creator_at_CDA()"
});
formatter.result({
  "duration": 4122439000,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.click_Confirm_button()"
});
formatter.result({
  "duration": 4096116500,
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
  "duration": 123000,
  "status": "passed"
});
formatter.before({
  "duration": 117700,
  "status": "passed"
});
formatter.before({
  "duration": 81600,
  "status": "passed"
});
formatter.before({
  "duration": 55900,
  "status": "passed"
});
formatter.before({
  "duration": 56500,
  "status": "passed"
});
formatter.before({
  "duration": 45500,
  "status": "passed"
});
formatter.before({
  "duration": 36500,
  "status": "passed"
});
formatter.before({
  "duration": 31800,
  "status": "passed"
});
formatter.before({
  "duration": 38200,
  "status": "passed"
});
formatter.before({
  "duration": 30500,
  "status": "passed"
});
formatter.before({
  "duration": 34200,
  "status": "passed"
});
formatter.before({
  "duration": 50100,
  "status": "passed"
});
formatter.before({
  "duration": 48000,
  "status": "passed"
});
formatter.before({
  "duration": 44500,
  "status": "passed"
});
formatter.before({
  "duration": 42100,
  "status": "passed"
});
formatter.before({
  "duration": 75500,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
  "status": "passed"
});
formatter.before({
  "duration": 44100,
  "status": "passed"
});
formatter.before({
  "duration": 56200,
  "status": "passed"
});
formatter.before({
  "duration": 63300,
  "status": "passed"
});
formatter.before({
  "duration": 97200,
  "status": "passed"
});
formatter.before({
  "duration": 71300,
  "status": "passed"
});
formatter.before({
  "duration": 67800,
  "status": "passed"
});
formatter.before({
  "duration": 60500,
  "status": "passed"
});
formatter.before({
  "duration": 55600,
  "status": "passed"
});
formatter.before({
  "duration": 68600,
  "status": "passed"
});
formatter.before({
  "duration": 92500,
  "status": "passed"
});
formatter.before({
  "duration": 133300,
  "status": "passed"
});
formatter.before({
  "duration": 178800,
  "status": "passed"
});
formatter.before({
  "duration": 455500,
  "status": "passed"
});
formatter.before({
  "duration": 173900,
  "status": "passed"
});
formatter.before({
  "duration": 152400,
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
  "duration": 4089992200,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Logout_StepDef.user_click_again_click_on_Log_Out_button()"
});
formatter.result({
  "duration": 4648635600,
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
  "duration": 299500,
  "status": "passed"
});
formatter.before({
  "duration": 186400,
  "status": "passed"
});
formatter.before({
  "duration": 254700,
  "status": "passed"
});
formatter.before({
  "duration": 104900,
  "status": "passed"
});
formatter.before({
  "duration": 126800,
  "status": "passed"
});
formatter.before({
  "duration": 147800,
  "status": "passed"
});
formatter.before({
  "duration": 124400,
  "status": "passed"
});
formatter.before({
  "duration": 179000,
  "status": "passed"
});
formatter.before({
  "duration": 152600,
  "status": "passed"
});
formatter.before({
  "duration": 47000,
  "status": "passed"
});
formatter.before({
  "duration": 53000,
  "status": "passed"
});
formatter.before({
  "duration": 44600,
  "status": "passed"
});
formatter.before({
  "duration": 71300,
  "status": "passed"
});
formatter.before({
  "duration": 50800,
  "status": "passed"
});
formatter.before({
  "duration": 55400,
  "status": "passed"
});
formatter.before({
  "duration": 74800,
  "status": "passed"
});
formatter.before({
  "duration": 55400,
  "status": "passed"
});
formatter.before({
  "duration": 113100,
  "status": "passed"
});
formatter.before({
  "duration": 57500,
  "status": "passed"
});
formatter.before({
  "duration": 201000,
  "status": "passed"
});
formatter.before({
  "duration": 70900,
  "status": "passed"
});
formatter.before({
  "duration": 41000,
  "status": "passed"
});
formatter.before({
  "duration": 70100,
  "status": "passed"
});
formatter.before({
  "duration": 41200,
  "status": "passed"
});
formatter.before({
  "duration": 34000,
  "status": "passed"
});
formatter.before({
  "duration": 32500,
  "status": "passed"
});
formatter.before({
  "duration": 30600,
  "status": "passed"
});
formatter.before({
  "duration": 36300,
  "status": "passed"
});
formatter.before({
  "duration": 48000,
  "status": "passed"
});
formatter.before({
  "duration": 32700,
  "status": "passed"
});
formatter.before({
  "duration": 49100,
  "status": "passed"
});
formatter.before({
  "duration": 51900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Scenario: Unsuccessful Master_LogIn with Invalid Username and Valid Password"
    },
    {
      "line": 6,
      "value": "#Given User is on Master_LogIn page"
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
      "value": "#And User Click Master_LogIn button"
    },
    {
      "line": 10,
      "value": "#And Master_LogIn Denied With Alert Message \"Invalid Email or Password\""
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#Scenario: Unsuccessful Master_LogIn with Valid Username and Invalid Password"
    },
    {
      "line": 13,
      "value": "#Given User is on Master_LogIn page"
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
      "value": "#And User Click Master_LogIn button"
    },
    {
      "line": 17,
      "value": "#And Master_LogIn Denied With Alert Message \"Invalid Email or Password\""
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
      "value": "#Scenario: Unsuccessful Master_LogIn with Blank Username and Blank Password"
    },
    {
      "line": 21,
      "value": "#Given User is on Master_LogIn page"
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
      "value": "#And User Click Master_LogIn button"
    },
    {
      "line": 25,
      "value": "#And Master_LogIn Denied With Alert Message \"Please enter valid email address\""
    },
    {
      "line": 26,
      "value": "#"
    },
    {
      "line": 27,
      "value": "#Scenario: Unsuccessful Master_LogIn with Blank Username and Valid Password"
    },
    {
      "line": 28,
      "value": "#Given User is on Master_LogIn page"
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
      "value": "#And User Click Master_LogIn button"
    },
    {
      "line": 32,
      "value": "#And Master_LogIn Denied With Alert Message \"Please enter valid email address\""
    },
    {
      "line": 33,
      "value": "#"
    },
    {
      "line": 34,
      "value": "#Scenario: Unsuccessful Master_LogIn with Valid Username and Blank Password"
    },
    {
      "line": 35,
      "value": "#Given User is on Master_LogIn page"
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
      "value": "#And User Click Master_LogIn button"
    },
    {
      "line": 39,
      "value": "#And Master_LogIn Denied With Alert Message \"Please enter password\""
    }
  ],
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
formatter.step({
  "line": 46,
  "name": "User Master_Login Successfully",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 4262041700,
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
  "duration": 4130715900,
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
  "duration": 4056357500,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4061018600,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userMaster_LoginSuccessfully()"
});
formatter.result({
  "duration": 6008671300,
  "status": "passed"
});
formatter.uri("1B_Master/1B_Master_Create_Company.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abuasif.nyk@gmail.com"
    }
  ],
  "line": 3,
  "name": "User Create_Company on Master page",
  "description": "",
  "id": "user-create-company-on-master-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 107800,
  "status": "passed"
});
formatter.before({
  "duration": 94700,
  "status": "passed"
});
formatter.before({
  "duration": 89500,
  "status": "passed"
});
formatter.before({
  "duration": 79900,
  "status": "passed"
});
formatter.before({
  "duration": 68900,
  "status": "passed"
});
formatter.before({
  "duration": 55000,
  "status": "passed"
});
formatter.before({
  "duration": 47500,
  "status": "passed"
});
formatter.before({
  "duration": 68600,
  "status": "passed"
});
formatter.before({
  "duration": 84300,
  "status": "passed"
});
formatter.before({
  "duration": 53400,
  "status": "passed"
});
formatter.before({
  "duration": 57900,
  "status": "passed"
});
formatter.before({
  "duration": 59800,
  "status": "passed"
});
formatter.before({
  "duration": 51000,
  "status": "passed"
});
formatter.before({
  "duration": 130900,
  "status": "passed"
});
formatter.before({
  "duration": 69600,
  "status": "passed"
});
formatter.before({
  "duration": 54600,
  "status": "passed"
});
formatter.before({
  "duration": 42300,
  "status": "passed"
});
formatter.before({
  "duration": 42300,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
  "status": "passed"
});
formatter.before({
  "duration": 35800,
  "status": "passed"
});
formatter.before({
  "duration": 48800,
  "status": "passed"
});
formatter.before({
  "duration": 33300,
  "status": "passed"
});
formatter.before({
  "duration": 33400,
  "status": "passed"
});
formatter.before({
  "duration": 29100,
  "status": "passed"
});
formatter.before({
  "duration": 27400,
  "status": "passed"
});
formatter.before({
  "duration": 48900,
  "status": "passed"
});
formatter.before({
  "duration": 59900,
  "status": "passed"
});
formatter.before({
  "duration": 58800,
  "status": "passed"
});
formatter.before({
  "duration": 48400,
  "status": "passed"
});
formatter.before({
  "duration": 96600,
  "status": "passed"
});
formatter.before({
  "duration": 241100,
  "status": "passed"
});
formatter.before({
  "duration": 89800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User going to Master_Add_New_Company page",
  "description": "",
  "id": "user-create-company-on-master-page;user-going-to-master-add-new-company-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User Click Master Company button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Click Master Add New Company button",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Master_Company_button()"
});
formatter.result({
  "duration": 4076224800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Master_Add_New_Company_button()"
});
formatter.result({
  "duration": 4070304500,
  "status": "passed"
});
formatter.before({
  "duration": 81700,
  "status": "passed"
});
formatter.before({
  "duration": 108400,
  "status": "passed"
});
formatter.before({
  "duration": 105200,
  "status": "passed"
});
formatter.before({
  "duration": 96200,
  "status": "passed"
});
formatter.before({
  "duration": 87300,
  "status": "passed"
});
formatter.before({
  "duration": 100000,
  "status": "passed"
});
formatter.before({
  "duration": 90000,
  "status": "passed"
});
formatter.before({
  "duration": 80400,
  "status": "passed"
});
formatter.before({
  "duration": 57600,
  "status": "passed"
});
formatter.before({
  "duration": 118700,
  "status": "passed"
});
formatter.before({
  "duration": 137000,
  "status": "passed"
});
formatter.before({
  "duration": 92900,
  "status": "passed"
});
formatter.before({
  "duration": 94300,
  "status": "passed"
});
formatter.before({
  "duration": 142100,
  "status": "passed"
});
formatter.before({
  "duration": 119500,
  "status": "passed"
});
formatter.before({
  "duration": 119700,
  "status": "passed"
});
formatter.before({
  "duration": 119300,
  "status": "passed"
});
formatter.before({
  "duration": 98600,
  "status": "passed"
});
formatter.before({
  "duration": 52400,
  "status": "passed"
});
formatter.before({
  "duration": 42400,
  "status": "passed"
});
formatter.before({
  "duration": 55100,
  "status": "passed"
});
formatter.before({
  "duration": 74900,
  "status": "passed"
});
formatter.before({
  "duration": 58100,
  "status": "passed"
});
formatter.before({
  "duration": 55000,
  "status": "passed"
});
formatter.before({
  "duration": 51700,
  "status": "passed"
});
formatter.before({
  "duration": 73100,
  "status": "passed"
});
formatter.before({
  "duration": 70100,
  "status": "passed"
});
formatter.before({
  "duration": 80600,
  "status": "passed"
});
formatter.before({
  "duration": 44400,
  "status": "passed"
});
formatter.before({
  "duration": 32500,
  "status": "passed"
});
formatter.before({
  "duration": 70700,
  "status": "passed"
});
formatter.before({
  "duration": 87700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User going to create new company",
  "description": "",
  "id": "user-create-company-on-master-page;user-going-to-create-new-company",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User is on Master Add New Company Create page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters \"\" into Company Name field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\" into Company Code field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Click City button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"Rajshahi\" into City Search field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Click into City field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"Saheb Bazar\" into Company Address field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Click Calender button into Establish Date field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Click Date button into Establish Date field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"100\" into Company Account No field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters \"Raj-1100\" into Company TreadLicense field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters \"50\" into Tax Deduction AccountNo field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"1122\" into Provided Fund Reg No field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Click Calender button into Provided Fund Reg Date field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Click Date button into Provided Fund Reg Date field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enters \"2211\" into Gratuity Reg No field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters \"70\" into Retirement Age field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enters \"Abu Asif\" Contact Person name field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enters \"HR\" into Contact Person Designation field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enters \"abuasif.com\" into Website field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Usert enters \"abuasif.nyk@gmail.com\" into Company Email field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enters \"01780963777\" into Telephone Number field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User enters \"000111\" into Fax Number field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User enters \"Bank Management\" into Business Type field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User enters \"Max Group\" into Business Group field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enters \"ERP Management\" into Company Catagory field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters \"Not Applicable\" into Remarks field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Clicks Create Company button",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_is_on_Master_Add_New_Company_Create_page()"
});
formatter.result({
  "duration": 4010182500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Company_Name_field(String)"
});
formatter.result({
  "duration": 8464271900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Company_Code_field(String)"
});
formatter.result({
  "duration": 9076821100,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_City_button()"
});
formatter.result({
  "duration": 6110644900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajshahi",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.userEntersIntoCitySearchField(String)"
});
formatter.result({
  "duration": 4116376800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.userClickIntoCityField()"
});
formatter.result({
  "duration": 8061878900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saheb Bazar",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Company_Address_field(String)"
});
formatter.result({
  "duration": 4134353700,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Calender_button_into_Establish_Date_field()"
});
formatter.result({
  "duration": 6068484800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Date_button_into_Establish_Date_field()"
});
formatter.result({
  "duration": 6073635700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Company_Account_No_field(String)"
});
formatter.result({
  "duration": 4079390500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raj-1100",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Company_TreadLicense_field(String)"
});
formatter.result({
  "duration": 4121305300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Tax_Deduction_AccountNo_field(String)"
});
formatter.result({
  "duration": 4066966300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1122",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Provided_Fund_Reg_No_field(String)"
});
formatter.result({
  "duration": 4071281800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Calender_button_into_Provided_Fund_Reg_Date_field()"
});
formatter.result({
  "duration": 4088267600,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Date_button_into_Provided_Fund_Reg_Date_field()"
});
formatter.result({
  "duration": 4074472500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2211",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Gratuity_Reg_No_field(String)"
});
formatter.result({
  "duration": 4076796700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Retirement_Age_field(String)"
});
formatter.result({
  "duration": 4058350300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abu Asif",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_Contact_Person_name_field(String)"
});
formatter.result({
  "duration": 4101695300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HR",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Contact_Person_Designation_field(String)"
});
formatter.result({
  "duration": 4067492800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abuasif.com",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Website_field(String)"
});
formatter.result({
  "duration": 10228989200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abuasif.nyk@gmail.com",
      "offset": 14
    }
  ],
  "location": "Master_Create_Company_StepDef.usert_enters_into_Company_Email_field(String)"
});
formatter.result({
  "duration": 4209356200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01780963777",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Telephone_Number_field(String)"
});
formatter.result({
  "duration": 4125477400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "000111",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Fax_Number_field(String)"
});
formatter.result({
  "duration": 4082508600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank Management",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Business_Type_field(String)"
});
formatter.result({
  "duration": 4142545700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Max Group",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Business_Group_field(String)"
});
formatter.result({
  "duration": 4105979800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERP Management",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Company_Catagory_field(String)"
});
formatter.result({
  "duration": 4150371300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Applicable",
      "offset": 13
    }
  ],
  "location": "Master_Create_Company_StepDef.user_enters_into_Remarks_field(String)"
});
formatter.result({
  "duration": 4107592500,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Clicks_Create_Company_button()"
});
formatter.result({
  "duration": 6131562900,
  "status": "passed"
});
formatter.before({
  "duration": 142300,
  "status": "passed"
});
formatter.before({
  "duration": 144900,
  "status": "passed"
});
formatter.before({
  "duration": 86400,
  "status": "passed"
});
formatter.before({
  "duration": 110400,
  "status": "passed"
});
formatter.before({
  "duration": 80500,
  "status": "passed"
});
formatter.before({
  "duration": 67300,
  "status": "passed"
});
formatter.before({
  "duration": 71600,
  "status": "passed"
});
formatter.before({
  "duration": 79900,
  "status": "passed"
});
formatter.before({
  "duration": 84400,
  "status": "passed"
});
formatter.before({
  "duration": 100400,
  "status": "passed"
});
formatter.before({
  "duration": 59800,
  "status": "passed"
});
formatter.before({
  "duration": 74400,
  "status": "passed"
});
formatter.before({
  "duration": 86000,
  "status": "passed"
});
formatter.before({
  "duration": 141100,
  "status": "passed"
});
formatter.before({
  "duration": 116300,
  "status": "passed"
});
formatter.before({
  "duration": 82500,
  "status": "passed"
});
formatter.before({
  "duration": 67600,
  "status": "passed"
});
formatter.before({
  "duration": 83000,
  "status": "passed"
});
formatter.before({
  "duration": 67600,
  "status": "passed"
});
formatter.before({
  "duration": 76100,
  "status": "passed"
});
formatter.before({
  "duration": 74600,
  "status": "passed"
});
formatter.before({
  "duration": 64900,
  "status": "passed"
});
formatter.before({
  "duration": 55700,
  "status": "passed"
});
formatter.before({
  "duration": 51700,
  "status": "passed"
});
formatter.before({
  "duration": 48900,
  "status": "passed"
});
formatter.before({
  "duration": 91300,
  "status": "passed"
});
formatter.before({
  "duration": 93100,
  "status": "passed"
});
formatter.before({
  "duration": 109300,
  "status": "passed"
});
formatter.before({
  "duration": 152000,
  "status": "passed"
});
formatter.before({
  "duration": 142800,
  "status": "passed"
});
formatter.before({
  "duration": 139100,
  "status": "passed"
});
formatter.before({
  "duration": 87600,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "User is goint to save the data which is recently created",
  "description": "",
  "id": "user-create-company-on-master-page;user-is-goint-to-save-the-data-which-is-recently-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "User Click Show All Companies button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User collect the recent created company data",
  "keyword": "Then "
});
formatter.match({
  "location": "Master_Create_Company_StepDef.userClickShowAllCompaniesButton()"
});
formatter.result({
  "duration": 6090265500,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.userCollectTheRecentCreatedCompanyData()"
});
formatter.result({
  "duration": 36219279500,
  "status": "passed"
});
formatter.uri("1B_Master/1C_Company_Verify.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abuasif.nyk@gmail.com"
    }
  ],
  "line": 3,
  "name": "User goig to Verify New Company",
  "description": "",
  "id": "user-goig-to-verify-new-company",
  "keyword": "Feature"
});
formatter.before({
  "duration": 109100,
  "status": "passed"
});
formatter.before({
  "duration": 82400,
  "status": "passed"
});
formatter.before({
  "duration": 67300,
  "status": "passed"
});
formatter.before({
  "duration": 60900,
  "status": "passed"
});
formatter.before({
  "duration": 53500,
  "status": "passed"
});
formatter.before({
  "duration": 129500,
  "status": "passed"
});
formatter.before({
  "duration": 78000,
  "status": "passed"
});
formatter.before({
  "duration": 96100,
  "status": "passed"
});
formatter.before({
  "duration": 73400,
  "status": "passed"
});
formatter.before({
  "duration": 78200,
  "status": "passed"
});
formatter.before({
  "duration": 72200,
  "status": "passed"
});
formatter.before({
  "duration": 70400,
  "status": "passed"
});
formatter.before({
  "duration": 78800,
  "status": "passed"
});
formatter.before({
  "duration": 74300,
  "status": "passed"
});
formatter.before({
  "duration": 75300,
  "status": "passed"
});
formatter.before({
  "duration": 71800,
  "status": "passed"
});
formatter.before({
  "duration": 70400,
  "status": "passed"
});
formatter.before({
  "duration": 93000,
  "status": "passed"
});
formatter.before({
  "duration": 82100,
  "status": "passed"
});
formatter.before({
  "duration": 107100,
  "status": "passed"
});
formatter.before({
  "duration": 106600,
  "status": "passed"
});
formatter.before({
  "duration": 113600,
  "status": "passed"
});
formatter.before({
  "duration": 82600,
  "status": "passed"
});
formatter.before({
  "duration": 104100,
  "status": "passed"
});
formatter.before({
  "duration": 68900,
  "status": "passed"
});
formatter.before({
  "duration": 91400,
  "status": "passed"
});
formatter.before({
  "duration": 100600,
  "status": "passed"
});
formatter.before({
  "duration": 88300,
  "status": "passed"
});
formatter.before({
  "duration": 95000,
  "status": "passed"
});
formatter.before({
  "duration": 83900,
  "status": "passed"
});
formatter.before({
  "duration": 80000,
  "status": "passed"
});
formatter.before({
  "duration": 106100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "user-goig-to-verify-new-company;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Login Successfully",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 494066700,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_Login_Successfully()"
});
formatter.result({
  "duration": 6005700300,
  "status": "passed"
});
formatter.before({
  "duration": 88300,
  "status": "passed"
});
formatter.before({
  "duration": 86100,
  "status": "passed"
});
formatter.before({
  "duration": 82600,
  "status": "passed"
});
formatter.before({
  "duration": 74400,
  "status": "passed"
});
formatter.before({
  "duration": 83900,
  "status": "passed"
});
formatter.before({
  "duration": 98900,
  "status": "passed"
});
formatter.before({
  "duration": 63300,
  "status": "passed"
});
formatter.before({
  "duration": 60800,
  "status": "passed"
});
formatter.before({
  "duration": 72600,
  "status": "passed"
});
formatter.before({
  "duration": 50700,
  "status": "passed"
});
formatter.before({
  "duration": 55700,
  "status": "passed"
});
formatter.before({
  "duration": 51300,
  "status": "passed"
});
formatter.before({
  "duration": 60700,
  "status": "passed"
});
formatter.before({
  "duration": 89500,
  "status": "passed"
});
formatter.before({
  "duration": 59500,
  "status": "passed"
});
formatter.before({
  "duration": 46700,
  "status": "passed"
});
formatter.before({
  "duration": 1854900,
  "status": "passed"
});
formatter.before({
  "duration": 109900,
  "status": "passed"
});
formatter.before({
  "duration": 71300,
  "status": "passed"
});
formatter.before({
  "duration": 64800,
  "status": "passed"
});
formatter.before({
  "duration": 61000,
  "status": "passed"
});
formatter.before({
  "duration": 49900,
  "status": "passed"
});
formatter.before({
  "duration": 44700,
  "status": "passed"
});
formatter.before({
  "duration": 42900,
  "status": "passed"
});
formatter.before({
  "duration": 42900,
  "status": "passed"
});
formatter.before({
  "duration": 42800,
  "status": "passed"
});
formatter.before({
  "duration": 41300,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
  "status": "passed"
});
formatter.before({
  "duration": 54500,
  "status": "passed"
});
formatter.before({
  "duration": 49900,
  "status": "passed"
});
formatter.before({
  "duration": 75000,
  "status": "passed"
});
formatter.before({
  "duration": 59600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Select Role",
  "description": "",
  "id": "user-goig-to-verify-new-company;select-role",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User select Creator at CDA",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click Confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDef.user_select_Creator_at_CDA()"
});
formatter.result({
  "duration": 4046880300,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.click_Confirm_button()"
});
formatter.result({
  "duration": 4076740900,
  "status": "passed"
});
formatter.before({
  "duration": 144600,
  "status": "passed"
});
formatter.before({
  "duration": 137400,
  "status": "passed"
});
formatter.before({
  "duration": 81200,
  "status": "passed"
});
formatter.before({
  "duration": 103100,
  "status": "passed"
});
formatter.before({
  "duration": 394200,
  "status": "passed"
});
formatter.before({
  "duration": 89400,
  "status": "passed"
});
formatter.before({
  "duration": 67900,
  "status": "passed"
});
formatter.before({
  "duration": 70600,
  "status": "passed"
});
formatter.before({
  "duration": 74100,
  "status": "passed"
});
formatter.before({
  "duration": 72400,
  "status": "passed"
});
formatter.before({
  "duration": 79800,
  "status": "passed"
});
formatter.before({
  "duration": 76500,
  "status": "passed"
});
formatter.before({
  "duration": 150000,
  "status": "passed"
});
formatter.before({
  "duration": 570500,
  "status": "passed"
});
formatter.before({
  "duration": 98900,
  "status": "passed"
});
formatter.before({
  "duration": 112800,
  "status": "passed"
});
formatter.before({
  "duration": 96600,
  "status": "passed"
});
formatter.before({
  "duration": 86100,
  "status": "passed"
});
formatter.before({
  "duration": 97500,
  "status": "passed"
});
formatter.before({
  "duration": 96400,
  "status": "passed"
});
formatter.before({
  "duration": 109100,
  "status": "passed"
});
formatter.before({
  "duration": 93200,
  "status": "passed"
});
formatter.before({
  "duration": 69500,
  "status": "passed"
});
formatter.before({
  "duration": 60100,
  "status": "passed"
});
formatter.before({
  "duration": 80800,
  "status": "passed"
});
formatter.before({
  "duration": 65200,
  "status": "passed"
});
formatter.before({
  "duration": 75200,
  "status": "passed"
});
formatter.before({
  "duration": 95400,
  "status": "passed"
});
formatter.before({
  "duration": 103500,
  "status": "passed"
});
formatter.before({
  "duration": 141100,
  "status": "passed"
});
formatter.before({
  "duration": 102300,
  "status": "passed"
});
formatter.before({
  "duration": 99500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User going to Company List and Collect Data page",
  "description": "",
  "id": "user-goig-to-verify-new-company;user-going-to-company-list-and-collect-data-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User Click on Company List button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Collect the Recent Created Company Data",
  "keyword": "Then "
});
formatter.match({
  "location": "Company_Verify_StepDef.user_Click_on_Company_List_button()"
});
formatter.result({
  "duration": 6249267200,
  "status": "passed"
});
formatter.match({
  "location": "Company_Verify_StepDef.userCollectTheRecentCreatedCompanyData()"
});
formatter.result({
  "duration": 51363932500,
  "status": "passed"
});
formatter.before({
  "duration": 99400,
  "status": "passed"
});
formatter.before({
  "duration": 92400,
  "status": "passed"
});
formatter.before({
  "duration": 86400,
  "status": "passed"
});
formatter.before({
  "duration": 91500,
  "status": "passed"
});
formatter.before({
  "duration": 75800,
  "status": "passed"
});
formatter.before({
  "duration": 133400,
  "status": "passed"
});
formatter.before({
  "duration": 124800,
  "status": "passed"
});
formatter.before({
  "duration": 89700,
  "status": "passed"
});
formatter.before({
  "duration": 72100,
  "status": "passed"
});
formatter.before({
  "duration": 82400,
  "status": "passed"
});
formatter.before({
  "duration": 77000,
  "status": "passed"
});
formatter.before({
  "duration": 95600,
  "status": "passed"
});
formatter.before({
  "duration": 78100,
  "status": "passed"
});
formatter.before({
  "duration": 106300,
  "status": "passed"
});
formatter.before({
  "duration": 77500,
  "status": "passed"
});
formatter.before({
  "duration": 66200,
  "status": "passed"
});
formatter.before({
  "duration": 80500,
  "status": "passed"
});
formatter.before({
  "duration": 84000,
  "status": "passed"
});
formatter.before({
  "duration": 76300,
  "status": "passed"
});
formatter.before({
  "duration": 80600,
  "status": "passed"
});
formatter.before({
  "duration": 91100,
  "status": "passed"
});
formatter.before({
  "duration": 77100,
  "status": "passed"
});
formatter.before({
  "duration": 70300,
  "status": "passed"
});
formatter.before({
  "duration": 84900,
  "status": "passed"
});
formatter.before({
  "duration": 80700,
  "status": "passed"
});
formatter.before({
  "duration": 67100,
  "status": "passed"
});
formatter.before({
  "duration": 84800,
  "status": "passed"
});
formatter.before({
  "duration": 108900,
  "status": "passed"
});
formatter.before({
  "duration": 240900,
  "status": "passed"
});
formatter.before({
  "duration": 120300,
  "status": "passed"
});
formatter.before({
  "duration": 100200,
  "status": "passed"
});
formatter.before({
  "duration": 82700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User is going to Log Out",
  "description": "",
  "id": "user-goig-to-verify-new-company;user-is-going-to-log-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on profile button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User click again click on Log Out button",
  "keyword": "Then "
});
formatter.match({
  "location": "Bank_Logout_StepDef.user_click_on_profile_button()"
});
formatter.result({
  "duration": 4062681500,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Logout_StepDef.user_click_again_click_on_Log_Out_button()"
});
formatter.result({
  "duration": 5819295300,
  "status": "passed"
});
formatter.before({
  "duration": 139700,
  "status": "passed"
});
formatter.before({
  "duration": 142500,
  "status": "passed"
});
formatter.before({
  "duration": 81100,
  "status": "passed"
});
formatter.before({
  "duration": 54500,
  "status": "passed"
});
formatter.before({
  "duration": 73900,
  "status": "passed"
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.before({
  "duration": 49500,
  "status": "passed"
});
formatter.before({
  "duration": 42400,
  "status": "passed"
});
formatter.before({
  "duration": 59000,
  "status": "passed"
});
formatter.before({
  "duration": 38900,
  "status": "passed"
});
formatter.before({
  "duration": 49300,
  "status": "passed"
});
formatter.before({
  "duration": 31000,
  "status": "passed"
});
formatter.before({
  "duration": 33400,
  "status": "passed"
});
formatter.before({
  "duration": 41900,
  "status": "passed"
});
formatter.before({
  "duration": 52900,
  "status": "passed"
});
formatter.before({
  "duration": 56600,
  "status": "passed"
});
formatter.before({
  "duration": 67000,
  "status": "passed"
});
formatter.before({
  "duration": 76400,
  "status": "passed"
});
formatter.before({
  "duration": 61500,
  "status": "passed"
});
formatter.before({
  "duration": 55400,
  "status": "passed"
});
formatter.before({
  "duration": 114500,
  "status": "passed"
});
formatter.before({
  "duration": 74300,
  "status": "passed"
});
formatter.before({
  "duration": 88800,
  "status": "passed"
});
formatter.before({
  "duration": 69500,
  "status": "passed"
});
formatter.before({
  "duration": 78500,
  "status": "passed"
});
formatter.before({
  "duration": 120900,
  "status": "passed"
});
formatter.before({
  "duration": 64700,
  "status": "passed"
});
formatter.before({
  "duration": 63400,
  "status": "passed"
});
formatter.before({
  "duration": 55000,
  "status": "passed"
});
formatter.before({
  "duration": 50400,
  "status": "passed"
});
formatter.before({
  "duration": 55400,
  "status": "passed"
});
formatter.before({
  "duration": 120000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful Login with Valid Credentials in Master Module",
  "description": "",
  "id": "user-goig-to-verify-new-company;successful-login-with-valid-credentials-in-master-module",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User is on Master_LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters \"erp.maxgroup@gmail.com\" into Master_name field",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters \"123\" into Master_Password field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Click Master_LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Master_Login Successfully",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 4305133000,
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
  "duration": 4137785500,
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
  "duration": 4060269200,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4174594100,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userMaster_LoginSuccessfully()"
});
formatter.result({
  "duration": 6007229400,
  "status": "passed"
});
formatter.uri("1B_Master/1D_Master_Create_Project.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abuasif.nyk@gmail.com"
    }
  ],
  "line": 3,
  "name": "User going to Create New Project",
  "description": "",
  "id": "user-going-to-create-new-project",
  "keyword": "Feature"
});
formatter.before({
  "duration": 115300,
  "status": "passed"
});
formatter.before({
  "duration": 87400,
  "status": "passed"
});
formatter.before({
  "duration": 68500,
  "status": "passed"
});
formatter.before({
  "duration": 60100,
  "status": "passed"
});
formatter.before({
  "duration": 56800,
  "status": "passed"
});
formatter.before({
  "duration": 67000,
  "status": "passed"
});
formatter.before({
  "duration": 86600,
  "status": "passed"
});
formatter.before({
  "duration": 56600,
  "status": "passed"
});
formatter.before({
  "duration": 54500,
  "status": "passed"
});
formatter.before({
  "duration": 58300,
  "status": "passed"
});
formatter.before({
  "duration": 54200,
  "status": "passed"
});
formatter.before({
  "duration": 57500,
  "status": "passed"
});
formatter.before({
  "duration": 47800,
  "status": "passed"
});
formatter.before({
  "duration": 45600,
  "status": "passed"
});
formatter.before({
  "duration": 45000,
  "status": "passed"
});
formatter.before({
  "duration": 42800,
  "status": "passed"
});
formatter.before({
  "duration": 41100,
  "status": "passed"
});
formatter.before({
  "duration": 40200,
  "status": "passed"
});
formatter.before({
  "duration": 44900,
  "status": "passed"
});
formatter.before({
  "duration": 49200,
  "status": "passed"
});
formatter.before({
  "duration": 59000,
  "status": "passed"
});
formatter.before({
  "duration": 65500,
  "status": "passed"
});
formatter.before({
  "duration": 63900,
  "status": "passed"
});
formatter.before({
  "duration": 53700,
  "status": "passed"
});
formatter.before({
  "duration": 52700,
  "status": "passed"
});
formatter.before({
  "duration": 50700,
  "status": "passed"
});
formatter.before({
  "duration": 50600,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
  "status": "passed"
});
formatter.before({
  "duration": 63600,
  "status": "passed"
});
formatter.before({
  "duration": 54200,
  "status": "passed"
});
formatter.before({
  "duration": 52200,
  "status": "passed"
});
formatter.before({
  "duration": 52900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create New Project of Fixed Budget Type",
  "description": "",
  "id": "user-going-to-create-new-project;create-new-project-of-fixed-budget-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Click ProjectBusiness Unit button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User Click Add New Project button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Click Select Parent Company",
  "keyword": "Then "
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_ProjectBusiness_Unit_button()"
});
formatter.result({
  "duration": 3080159400,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Add_New_Project_button()"
});
formatter.result({
  "duration": 3076451400,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Select_Parent_Company()"
});
formatter.result({
  "duration": 3198479800,
  "status": "passed"
});
formatter.before({
  "duration": 120000,
  "status": "passed"
});
formatter.before({
  "duration": 77100,
  "status": "passed"
});
formatter.before({
  "duration": 76900,
  "status": "passed"
});
formatter.before({
  "duration": 56700,
  "status": "passed"
});
formatter.before({
  "duration": 72700,
  "status": "passed"
});
formatter.before({
  "duration": 77500,
  "status": "passed"
});
formatter.before({
  "duration": 225900,
  "status": "passed"
});
formatter.before({
  "duration": 156700,
  "status": "passed"
});
formatter.before({
  "duration": 80100,
  "status": "passed"
});
formatter.before({
  "duration": 335100,
  "status": "passed"
});
formatter.before({
  "duration": 103200,
  "status": "passed"
});
formatter.before({
  "duration": 148800,
  "status": "passed"
});
formatter.before({
  "duration": 129900,
  "status": "passed"
});
formatter.before({
  "duration": 80000,
  "status": "passed"
});
formatter.before({
  "duration": 62900,
  "status": "passed"
});
formatter.before({
  "duration": 92500,
  "status": "passed"
});
formatter.before({
  "duration": 89100,
  "status": "passed"
});
formatter.before({
  "duration": 103100,
  "status": "passed"
});
formatter.before({
  "duration": 69400,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
  "status": "passed"
});
formatter.before({
  "duration": 71100,
  "status": "passed"
});
formatter.before({
  "duration": 62800,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
  "status": "passed"
});
formatter.before({
  "duration": 50700,
  "status": "passed"
});
formatter.before({
  "duration": 62000,
  "status": "passed"
});
formatter.before({
  "duration": 74100,
  "status": "passed"
});
formatter.before({
  "duration": 50300,
  "status": "passed"
});
formatter.before({
  "duration": 55200,
  "status": "passed"
});
formatter.before({
  "duration": 66500,
  "status": "passed"
});
formatter.before({
  "duration": 52200,
  "status": "passed"
});
formatter.before({
  "duration": 80000,
  "status": "passed"
});
formatter.before({
  "duration": 71000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create New Project of Fixed Budget Type",
  "description": "",
  "id": "user-going-to-create-new-project;create-new-project-of-fixed-budget-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User enters \"\" on Project Name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters \"\" on Project ID field Fixed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"Random\" on Project Type field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"Rajshahi\" on Project Locatin field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User Enters \"200\" on Project Budget Ammount Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Click on Budget Duration button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Click on Budget Duration To button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"Asif\" on Contact Person Name field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"01799999999\" on Contact Person No field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"Not Applicable for automation\" on Remarks field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters \"Not Applicable for automation\" on Other Details field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Click Create Project button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User Click Show All Project button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User Collect Created New Project Data for Fixed Budget Type",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Project_Name_field(String)"
});
formatter.result({
  "duration": 5329041600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.userEntersOnProjectIDFieldFixed(String)"
});
formatter.result({
  "duration": 43272103100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Random",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Project_Type_field(String)"
});
formatter.result({
  "duration": 3079567500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajshahi",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Project_Locatin_field(String)"
});
formatter.result({
  "duration": 3111159900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_Enters_on_Project_Budget_Ammount_Field(String)"
});
formatter.result({
  "duration": 3086102800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.userClickOnBudgetDurationButton()"
});
formatter.result({
  "duration": 37653101500,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.userClickOnBudgetDurationToButton()"
});
formatter.result({
  "duration": 3200084100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asif",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Contact_Person_Name_field(String)"
});
