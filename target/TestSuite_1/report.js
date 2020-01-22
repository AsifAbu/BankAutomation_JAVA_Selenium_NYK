$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1A_Master_Login.feature");
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
  "duration": 7682781400,
  "status": "passed"
});
formatter.before({
  "duration": 152100,
  "status": "passed"
});
formatter.before({
  "duration": 96600,
  "status": "passed"
});
formatter.before({
  "duration": 73999,
  "status": "passed"
});
formatter.before({
  "duration": 145300,
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
  "duration": 7298864901,
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
  "duration": 4170962100,
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
  "duration": 4063595099,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4068825199,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userMaster_LoginSuccessfully()"
});
formatter.result({
  "duration": 6033807099,
  "status": "passed"
});
formatter.uri("1B_Master_Create_Company.feature");
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
  "duration": 82699,
  "status": "passed"
});
formatter.before({
  "duration": 75800,
  "status": "passed"
});
formatter.before({
  "duration": 75900,
  "status": "passed"
});
formatter.before({
  "duration": 78899,
  "status": "passed"
});
formatter.before({
  "duration": 75800,
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
  "duration": 4077458800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Master_Add_New_Company_button()"
});
formatter.result({
  "duration": 4073051600,
  "status": "passed"
});
formatter.before({
  "duration": 118601,
  "status": "passed"
});
formatter.before({
  "duration": 124101,
  "status": "passed"
});
formatter.before({
  "duration": 112800,
  "status": "passed"
});
formatter.before({
  "duration": 114501,
  "status": "passed"
});
formatter.before({
  "duration": 127601,
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
  "comments": [
    {
      "line": 13,
      "value": "#\t\tAnd User Click City button"
    },
    {
      "line": 14,
      "value": "#\t\tAnd User enters \"Rajshahi\" into City Search field"
    },
    {
      "line": 15,
      "value": "#\t\tAnd User Click into City field"
    },
    {
      "line": 16,
      "value": "#\t\tAnd User enters \"Saheb Bazar\" into Company Address field"
    },
    {
      "line": 17,
      "value": "#\t\tAnd User Click Calender button into Establish Date field"
    },
    {
      "line": 18,
      "value": "#\t\tAnd User Click Date button into Establish Date field"
    },
    {
      "line": 19,
      "value": "#\t\tAnd User enters \"100\" into Company Account No field"
    },
    {
      "line": 20,
      "value": "#\t\tAnd User enters \"Raj-1100\" into Company TreadLicense field"
    },
    {
      "line": 21,
      "value": "#\t\tAnd User enters \"50\" into Tax Deduction AccountNo field"
    },
    {
      "line": 22,
      "value": "#\t\tAnd User enters \"1122\" into Provided Fund Reg No field"
    },
    {
      "line": 23,
      "value": "#\t\tAnd User Click Calender button into Provided Fund Reg Date field"
    },
    {
      "line": 24,
      "value": "#\t\tAnd User Click Date button into Provided Fund Reg Date field"
    },
    {
      "line": 25,
      "value": "#\t\tAnd User enters \"2211\" into Gratuity Reg No field"
    },
    {
      "line": 26,
      "value": "#\t\tAnd User enters \"70\" into Retirement Age field"
    },
    {
      "line": 27,
      "value": "#\t\tAnd User enters \"Abu Asif\" Contact Person name field"
    },
    {
      "line": 28,
      "value": "#\t\tAnd User enters \"HR\" into Contact Person Designation field"
    }
  ],
  "line": 29,
  "name": "User enters \"abuasif.com\" into Website field",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#\t\tAnd Usert enters \"abuasif.nyk@gmail.com\" into Company Email field"
    },
    {
      "line": 31,
      "value": "#\t\tAnd User enters \"01780963777\" into Telephone Number field"
    },
    {
      "line": 32,
      "value": "#\t\tAnd User enters \"000111\" into Fax Number field"
    },
    {
      "line": 33,
      "value": "#\t\tAnd User enters \"Bank Management\" into Business Type field"
    },
    {
      "line": 34,
      "value": "#\t\tAnd User enters \"Max Group\" into Business Group field"
    },
    {
      "line": 35,
      "value": "#\t\tAnd User enters \"ERP Management\" into Company Catagory field"
    },
    {
      "line": 36,
      "value": "#\t\tAnd User enters \"Not Applicable\" into Remarks field"
    }
  ],
  "line": 37,
  "name": "User Clicks Create Company button",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_is_on_Master_Add_New_Company_Create_page()"
});
formatter.result({
  "duration": 4008071700,
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
  "duration": 8318330999,
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
  "duration": 8268163300,
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
  "duration": 10174001200,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Clicks_Create_Company_button()"
});
formatter.result({
  "duration": 6084498300,
  "status": "passed"
});
formatter.before({
  "duration": 101600,
  "status": "passed"
});
formatter.before({
  "duration": 109500,
  "status": "passed"
});
formatter.before({
  "duration": 93801,
  "status": "passed"
});
formatter.before({
  "duration": 113900,
  "status": "passed"
});
formatter.before({
  "duration": 78201,
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
  "duration": 6081410700,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.userCollectTheRecentCreatedCompanyData()"
});
formatter.result({
  "duration": 10082275300,
  "status": "passed"
});
formatter.uri("1C_Company_Verify.feature");
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
  "duration": 103900,
  "status": "passed"
});
formatter.before({
  "duration": 72501,
  "status": "passed"
});
formatter.before({
  "duration": 72300,
  "status": "passed"
});
formatter.before({
  "duration": 76400,
  "status": "passed"
});
formatter.before({
  "duration": 71899,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "user-goig-to-verify-new-company;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Login Successfully",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 940440700,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_Login_Successfully()"
});
formatter.result({
  "duration": 6008832101,
  "status": "passed"
});
formatter.before({
  "duration": 69800,
  "status": "passed"
});
formatter.before({
  "duration": 67401,
  "status": "passed"
});
formatter.before({
  "duration": 46300,
  "status": "passed"
});
formatter.before({
  "duration": 46000,
  "status": "passed"
});
formatter.before({
  "duration": 53300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Select Role",
  "description": "",
  "id": "user-goig-to-verify-new-company;select-role",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User select Creator at CDA",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click Confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDef.user_select_Creator_at_CDA()"
});
formatter.result({
  "duration": 4064497900,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.click_Confirm_button()"
});
formatter.result({
  "duration": 4082636599,
  "status": "passed"
});
formatter.before({
  "duration": 132899,
  "status": "passed"
});
formatter.before({
  "duration": 113900,
  "status": "passed"
});
formatter.before({
  "duration": 92700,
  "status": "passed"
});
formatter.before({
  "duration": 71700,
  "status": "passed"
});
formatter.before({
  "duration": 88200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User going to Company List and Collect Data page",
  "description": "",
  "id": "user-goig-to-verify-new-company;user-going-to-company-list-and-collect-data-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User Click on Company List button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User Collect the Recent Created Company Data",
  "keyword": "Then "
});
formatter.match({
  "location": "Company_Verify_StepDef.user_Click_on_Company_List_button()"
});
formatter.result({
  "duration": 4220642900,
  "status": "passed"
});
formatter.match({
  "location": "Company_Verify_StepDef.userCollectTheRecentCreatedCompanyData()"
});
formatter.result({
  "duration": 20350639200,
  "status": "passed"
});
formatter.before({
  "duration": 97400,
  "status": "passed"
});
formatter.before({
  "duration": 78700,
  "status": "passed"
});
formatter.before({
  "duration": 42399,
  "status": "passed"
});
formatter.before({
  "duration": 32701,
  "status": "passed"
});
formatter.before({
  "duration": 52200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User is going to Log Out",
  "description": "",
  "id": "user-goig-to-verify-new-company;user-is-going-to-log-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User click on profile button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click again click on Log Out button",
  "keyword": "Then "
});
formatter.match({
  "location": "Bank_Logout_StepDef.user_click_on_profile_button()"
});
formatter.result({
  "duration": 4065857300,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Logout_StepDef.user_click_again_click_on_Log_Out_button()"
});
formatter.result({
  "duration": 6790013501,
  "status": "passed"
});
formatter.before({
  "duration": 99400,
  "status": "passed"
});
formatter.before({
  "duration": 77799,
  "status": "passed"
});
formatter.before({
  "duration": 164300,
  "status": "passed"
});
formatter.before({
  "duration": 162199,
  "status": "passed"
});
formatter.before({
  "duration": 172599,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Successful Login with Valid Credentials in Master Module",
  "description": "",
  "id": "user-goig-to-verify-new-company;successful-login-with-valid-credentials-in-master-module",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User is on Master_LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters \"erp.maxgroup@gmail.com\" into Master_name field",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters \"123\" into Master_Password field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Click Master_LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User Master_Login Successfully",
  "keyword": "And "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 4310780899,
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
  "duration": 4130735500,
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
  "duration": 4054684200,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4059089401,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userMaster_LoginSuccessfully()"
});
formatter.result({
  "duration": 6008552699,
  "status": "passed"
});
});