$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1A_Create_Beneficiary.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abuasif.nyk@gmail.com"
    }
  ],
  "line": 3,
  "name": "User Create New Beneficiary",
  "description": "",
  "id": "user-create-new-beneficiary",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6206548400,
  "status": "passed"
});
formatter.before({
  "duration": 101700,
  "status": "passed"
});
formatter.before({
  "duration": 73000,
  "status": "passed"
});
formatter.before({
  "duration": 56900,
  "status": "passed"
});
formatter.before({
  "duration": 90400,
  "status": "passed"
});
formatter.before({
  "duration": 73200,
  "status": "passed"
});
formatter.before({
  "duration": 66700,
  "status": "passed"
});
formatter.before({
  "duration": 106400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "user-create-new-beneficiary;successful-login-with-valid-credentials",
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
  "name": "User enters \"erp.maxgroup@gmail.com\" into Username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"123\" into Password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Click LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Login Successfully",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User select Creator at CDA",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click Confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 2554797100,
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
  "duration": 4156638400,
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
  "duration": 4057295900,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_Click_LogIn_button()"
});
formatter.result({
  "duration": 4064454300,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_Login_Successfully()"
});
formatter.result({
  "duration": 6012302100,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_select_Creator_at_CDA()"
});
formatter.result({
  "duration": 4049990400,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.click_Confirm_button()"
});
formatter.result({
  "duration": 4083320800,
  "status": "passed"
});
formatter.before({
  "duration": 134200,
  "status": "passed"
});
formatter.before({
  "duration": 139700,
  "status": "passed"
});
formatter.before({
  "duration": 102600,
  "status": "passed"
});
formatter.before({
  "duration": 124600,
  "status": "passed"
});
formatter.before({
  "duration": 271000,
  "status": "passed"
});
formatter.before({
  "duration": 113500,
  "status": "passed"
});
formatter.before({
  "duration": 92600,
  "status": "passed"
});
formatter.before({
  "duration": 88200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User going to Create New Beneficiary of Vendor Type",
  "description": "",
  "id": "user-create-new-beneficiary;user-going-to-create-new-beneficiary-of-vendor-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User Click Beneficiary button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User Click Create Beneficiary button",
  "keyword": "Then "
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Click_Beneficiary_button()"
});
formatter.result({
  "duration": 3086890000,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Click_Create_Beneficiary_button()"
});
formatter.result({
  "duration": 3107721900,
  "status": "passed"
});
formatter.before({
  "duration": 112900,
  "status": "passed"
});
formatter.before({
  "duration": 64100,
  "status": "passed"
});
formatter.before({
  "duration": 78100,
  "status": "passed"
});
formatter.before({
  "duration": 77600,
  "status": "passed"
});
formatter.before({
  "duration": 135200,
  "status": "passed"
});
formatter.before({
  "duration": 88900,
  "status": "passed"
});
formatter.before({
  "duration": 112600,
  "status": "passed"
});
formatter.before({
  "duration": 455900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 18,
      "value": "#\tThen User Click Exixting Vendor field"
    },
    {
      "line": 19,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#\tThen User Click Gazipur Polish Store button"
    },
    {
      "line": 21,
      "value": "#\tAnd User Select \"ERP Admin\" At Approver Option"
    },
    {
      "line": 22,
      "value": "#\tThen User enters \"AsifBenificiary-Vendor\" into Beneficiary Name field"
    },
    {
      "line": 23,
      "value": "#\tThen User enters \"asifbeneficiary@gmail.com\" into Beneficiary Email field"
    },
    {
      "line": 24,
      "value": "#\tThen User enters \"01799999999\" into beneficiary Phone field"
    },
    {
      "line": 25,
      "value": "#"
    },
    {
      "line": 26,
      "value": "#Scenario: User going to Add Beneficiary Bank Account for Vendor Type"
    },
    {
      "line": 27,
      "value": "#\tWhen User Clicks Add Beneficiary Bank Account button"
    },
    {
      "line": 28,
      "value": "#\tThen User Clicks Bank Name button and Select or Click UCBL"
    },
    {
      "line": 29,
      "value": "#\tThen User enters \"UCBL, Mohakhali-DOHS\" into Branch Name field"
    },
    {
      "line": 30,
      "value": "#\tThen user enters \"11001100\" into Account Number field"
    },
    {
      "line": 31,
      "value": "#\tThen User Click Submit button"
    }
  ],
  "line": 33,
  "name": "User going to Create New Beneficiary of Non Vendor Type",
  "description": "",
  "id": "user-create-new-beneficiary;user-going-to-create-new-beneficiary-of-non-vendor-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User Click Benificiary Type field",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User select Non Vendor Type",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Select \"ERP Admin\" At Approver Option",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enters \"AsifBenificiary-NonVendor\" into Beneficiary Name field",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User enters \"asifbeneficiary@gmail.com\" into Beneficiary Email field",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User enters \"01799999999\" into beneficiary Phone field",
  "keyword": "Then "
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Click_Benificiary_Type_field()"
});
formatter.result({
  "duration": 3077600200,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_select_Non_Vendor_Type()"
});
formatter.result({
  "duration": 26111036900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERP Admin",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.userSelectAtApproverOption(String)"
});
formatter.result({
  "duration": 6067249500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AsifBenificiary-NonVendor",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.user_enters_into_Beneficiary_Name_field(String)"
});
formatter.result({
  "duration": 3289777400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asifbeneficiary@gmail.com",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.user_enters_into_Beneficiary_Email_field(String)"
});
formatter.result({
  "duration": 3192069900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01799999999",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.user_enters_into_beneficiary_Phone_field(String)"
});
formatter.result({
  "duration": 3101370000,
  "status": "passed"
});
formatter.before({
  "duration": 124600,
  "status": "passed"
});
formatter.before({
  "duration": 98300,
  "status": "passed"
});
formatter.before({
  "duration": 109000,
  "status": "passed"
});
formatter.before({
  "duration": 96300,
  "status": "passed"
});
formatter.before({
  "duration": 91100,
  "status": "passed"
});
formatter.before({
  "duration": 75900,
  "status": "passed"
});
formatter.before({
  "duration": 98200,
  "status": "passed"
});
formatter.before({
  "duration": 93400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User going to Add Beneficiary Bank Account for Non Vendor Type",
  "description": "",
  "id": "user-create-new-beneficiary;user-going-to-add-beneficiary-bank-account-for-non-vendor-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "User Clicks Add Beneficiary Bank Account button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User Clicks Bank Name button and Select or Click UCBL",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User enters \"UCBL, Mohakhali-DOHS\" into Branch Name field",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user enters \"11001100\" into Account Number field",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User Click Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Clicks_Add_Beneficiary_Bank_Account_button()"
});
formatter.result({
  "duration": 15412675000,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Clicks_Bank_Name_button_and_Select_or_Click_UCBL()"
});
formatter.result({
  "duration": 3160041400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UCBL, Mohakhali-DOHS",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.userEntersIntoBranchNameField(String)"
});
formatter.result({
  "duration": 3186643300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11001100",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.user_enters_into_Account_Number_field(String)"
});
formatter.result({
  "duration": 3094881100,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Click_Submit_button()"
});
formatter.result({
  "duration": 3133569500,
  "status": "passed"
});
formatter.before({
  "duration": 103300,
  "status": "passed"
});
formatter.before({
  "duration": 88800,
  "status": "passed"
});
formatter.before({
  "duration": 66200,
  "status": "passed"
});
formatter.before({
  "duration": 72700,
  "status": "passed"
});
formatter.before({
  "duration": 103700,
  "status": "passed"
});
formatter.before({
  "duration": 83000,
  "status": "passed"
});
formatter.before({
  "duration": 83300,
  "status": "passed"
});
formatter.before({
  "duration": 108700,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "User going to Create New Beneficiary of TDS Type",
  "description": "",
  "id": "user-create-new-beneficiary;user-going-to-create-new-beneficiary-of-tds-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "User Click Benificiary Type field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User select TDS Type",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "User Select \"ERP Admin\" At Approver Option",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User enters \"AsifBenificiary-TDS\" into Beneficiary Name field",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User enters \"asifbeneficiary@gmail.com\" into Beneficiary Email field",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User enters \"01799999999\" into beneficiary Phone field",
  "keyword": "Then "
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Click_Benificiary_Type_field()"
});
formatter.result({
  "duration": 3098366000,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_select_TDS_Type()"
});
formatter.result({
  "duration": 3045815500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERP Admin",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.userSelectAtApproverOption(String)"
});
formatter.result({
  "duration": 6065499500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AsifBenificiary-TDS",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.user_enters_into_Beneficiary_Name_field(String)"
});
formatter.result({
  "duration": 3277984500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asifbeneficiary@gmail.com",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.user_enters_into_Beneficiary_Email_field(String)"
});
formatter.result({
  "duration": 3188159900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01799999999",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.user_enters_into_beneficiary_Phone_field(String)"
});
formatter.result({
  "duration": 3100674800,
  "status": "passed"
});
formatter.before({
  "duration": 97900,
  "status": "passed"
});
formatter.before({
  "duration": 127300,
  "status": "passed"
});
formatter.before({
  "duration": 362500,
  "status": "passed"
});
formatter.before({
  "duration": 108700,
  "status": "passed"
});
formatter.before({
  "duration": 92300,
  "status": "passed"
});
formatter.before({
  "duration": 106800,
  "status": "passed"
});
formatter.before({
  "duration": 109200,
  "status": "passed"
});
formatter.before({
  "duration": 126600,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "User going to Add Beneficiary Bank Account for TDS Type",
  "description": "",
  "id": "user-create-new-beneficiary;user-going-to-add-beneficiary-bank-account-for-tds-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "User Clicks Add Beneficiary Bank Account button",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User Clicks Bank Name button and Select or Click UCBL",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User enters \"UCBL, Mohakhali-DOHS\" into Branch Name field",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user enters \"11001100\" into Account Number field",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User Click Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Clicks_Add_Beneficiary_Bank_Account_button()"
});
formatter.result({
  "duration": 15417158700,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Clicks_Bank_Name_button_and_Select_or_Click_UCBL()"
});
formatter.result({
  "duration": 3164256500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UCBL, Mohakhali-DOHS",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.userEntersIntoBranchNameField(String)"
});
formatter.result({
  "duration": 3186619800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11001100",
      "offset": 13
    }
  ],
  "location": "Bank_Create_Beneficiary_StepDef.user_enters_into_Account_Number_field(String)"
});
formatter.result({
  "duration": 3095361000,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Click_Submit_button()"
});
formatter.result({
  "duration": 3088116700,
  "status": "passed"
});
});