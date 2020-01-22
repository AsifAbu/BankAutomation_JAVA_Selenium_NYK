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
  "duration": 8571694300,
  "status": "passed"
});
formatter.before({
  "duration": 145200,
  "status": "passed"
});
formatter.before({
  "duration": 106900,
  "status": "passed"
});
formatter.before({
  "duration": 145500,
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
  "duration": 8222642400,
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
  "duration": 4158436900,
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
  "duration": 4058874300,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4082680600,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userMaster_LoginSuccessfully()"
});
formatter.result({
  "duration": 6056294900,
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
  "duration": 51300,
  "status": "passed"
});
formatter.before({
  "duration": 55200,
  "status": "passed"
});
formatter.before({
  "duration": 84300,
  "status": "passed"
});
formatter.before({
  "duration": 95400,
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
  "duration": 4078053900,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Master_Add_New_Company_button()"
});
formatter.result({
  "duration": 4083412600,
  "status": "passed"
});
formatter.before({
  "duration": 111000,
  "status": "passed"
});
formatter.before({
  "duration": 118200,
  "status": "passed"
});
formatter.before({
  "duration": 131900,
  "status": "passed"
});
formatter.before({
  "duration": 141100,
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
  "duration": 4006978400,
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
  "duration": 8395907900,
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
  "duration": 8275093400,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_City_button()"
});
formatter.result({
  "duration": 6088848800,
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
  "duration": 4111491800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.userClickIntoCityField()"
});
formatter.result({
  "duration": 8063841500,
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
  "duration": 4131360000,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Calender_button_into_Establish_Date_field()"
});
formatter.result({
  "duration": 6068916000,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Date_button_into_Establish_Date_field()"
});
formatter.result({
  "duration": 6073355000,
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
  "duration": 4078509400,
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
  "duration": 4110629800,
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
  "duration": 4067969500,
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
  "duration": 4072637600,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Calender_button_into_Provided_Fund_Reg_Date_field()"
});
formatter.result({
  "duration": 4066845300,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Click_Date_button_into_Provided_Fund_Reg_Date_field()"
});
formatter.result({
  "duration": 4073386600,
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
  "duration": 4079986600,
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
  "duration": 4065213300,
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
  "duration": 4100755300,
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
  "duration": 4065179500,
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
  "duration": 10205275800,
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
  "duration": 4209946600,
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
  "duration": 4116084300,
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
  "duration": 4084190800,
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
  "duration": 4147089900,
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
  "duration": 4104973000,
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
  "duration": 4141524700,
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
  "duration": 4107699900,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Company_StepDef.user_Clicks_Create_Company_button()"
});
formatter.result({
  "duration": 4117053900,
  "status": "passed"
});
});