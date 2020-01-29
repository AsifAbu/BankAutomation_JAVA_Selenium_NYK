$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/1C_Bank/1C_Approve_Beneficiary.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: abuasif.nyk@gmail.com"
    }
  ],
  "line": 3,
  "name": "User Approve Beneficiary",
  "description": "",
  "id": "user-approve-beneficiary",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7792744600,
  "status": "passed"
});
formatter.before({
  "duration": 132599,
  "status": "passed"
});
formatter.before({
  "duration": 132200,
  "status": "passed"
});
formatter.before({
  "duration": 65401,
  "status": "passed"
});
formatter.before({
  "duration": 134000,
  "status": "passed"
});
formatter.before({
  "duration": 93300,
  "status": "passed"
});
formatter.before({
  "duration": 107100,
  "status": "passed"
});
formatter.before({
  "duration": 160000,
  "status": "passed"
});
formatter.before({
  "duration": 158001,
  "status": "passed"
});
formatter.before({
  "duration": 153700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "user-approve-beneficiary;successful-login-with-valid-credentials",
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
formatter.match({
  "location": "Login_StepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 4266602400,
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
  "duration": 4163200300,
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
  "duration": 4057030500,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_Click_LogIn_button()"
});
formatter.result({
  "duration": 4062979300,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.user_Login_Successfully()"
});
formatter.result({
  "duration": 6025471900,
  "status": "passed"
});
formatter.before({
  "duration": 110000,
  "status": "passed"
});
formatter.before({
  "duration": 73199,
  "status": "passed"
});
formatter.before({
  "duration": 53500,
  "status": "passed"
});
formatter.before({
  "duration": 62299,
  "status": "passed"
});
formatter.before({
  "duration": 42999,
  "status": "passed"
});
formatter.before({
  "duration": 48999,
  "status": "passed"
});
formatter.before({
  "duration": 47400,
  "status": "passed"
});
formatter.before({
  "duration": 44600,
  "status": "passed"
});
formatter.before({
  "duration": 43699,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Select Role",
  "description": "",
  "id": "user-approve-beneficiary;select-role",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User select Creator at CDA",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click Confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDef.user_select_Creator_at_CDA()"
});
formatter.result({
  "duration": 4049116301,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDef.click_Confirm_button()"
});
formatter.result({
  "duration": 4083902500,
  "status": "passed"
});
formatter.before({
  "duration": 144701,
  "status": "passed"
});
formatter.before({
  "duration": 133299,
  "status": "passed"
});
formatter.before({
  "duration": 120301,
  "status": "passed"
});
formatter.before({
  "duration": 116000,
  "status": "passed"
});
formatter.before({
  "duration": 77000,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
  "status": "passed"
});
formatter.before({
  "duration": 84600,
  "status": "passed"
});
formatter.before({
  "duration": 59399,
  "status": "passed"
});
formatter.before({
  "duration": 49100,
  "status": "passed"
});
formatter.before({
  "duration": 94600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Select User to Approver",
  "description": "",
  "id": "user-approve-beneficiary;select-user-to-approver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User Click Select User button for Approver",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#Then User enters \"cda\" into search field"
    },
    {
      "line": 19,
      "value": "#Then User Click \"Approver at CDA\" button"
    },
    {
      "line": 20,
      "value": "#double scroll down will apper here"
    }
  ],
  "line": 21,
  "name": "User Click checked button for Approve Request first row",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#Scroll up 2 times"
    }
  ],
  "line": 23,
  "name": "User Click Select User button for Creator",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User Click Beneficiary List button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User Click SL No button",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Verify the status is \"active\" for that Beneficiary",
  "keyword": "Then "
});
formatter.match({
  "location": "Approve_Beneficiary_StepDef.user_Click_Select_User_button_for_Approver()"
});
formatter.result({
  "duration": 18901120199,
  "status": "passed"
});
formatter.match({
  "location": "Approve_Beneficiary_StepDef.user_Click_checked_button_for_Approve_Request_first_row()"
});
formatter.result({
  "duration": 9436198600,
  "status": "passed"
});
formatter.match({
  "location": "Approve_Beneficiary_StepDef.user_Click_Select_User_button_for_Creator()"
});
formatter.result({
  "duration": 9372889700,
  "status": "passed"
});
formatter.match({
  "location": "Verify_Beneficiary_StepDef.userClickBeneficiaryListButton()"
});
formatter.result({
  "duration": 6197002100,
  "status": "passed"
});
formatter.match({
  "location": "Verify_Beneficiary_StepDef.user_Click_SL_No_button()"
});
formatter.result({
  "duration": 3058026801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "active",
      "offset": 27
    }
  ],
  "location": "Approve_Beneficiary_StepDef.user_Verify_the_status_is_for_that_Beneficiary(String)"
});
formatter.result({
  "duration": 11273999000,
  "status": "passed"
});
formatter.before({
  "duration": 63399,
  "status": "passed"
});
formatter.before({
  "duration": 77100,
  "status": "passed"
});
formatter.before({
  "duration": 54300,
  "status": "passed"
});
formatter.before({
  "duration": 48799,
  "status": "passed"
});
formatter.before({
  "duration": 59899,
  "status": "passed"
});
formatter.before({
  "duration": 60500,
  "status": "passed"
});
formatter.before({
  "duration": 56699,
  "status": "passed"
});
formatter.before({
  "duration": 75299,
  "status": "passed"
});
formatter.before({
  "duration": 48399,
  "status": "passed"
});
formatter.before({
  "duration": 83600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User going to Create New Beneficiary of TDS Type",
  "description": "",
  "id": "user-approve-beneficiary;user-going-to-create-new-beneficiary-of-tds-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User Click Create Beneficiary button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User Click Benificiary Type field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User select TDS Type",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User Select \"ERP Admin\" At Approver Option",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User enters \"AsifBenificiary-TDS\" into Beneficiary Name field",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User enters \"asifbeneficiary@gmail.com\" into Beneficiary Email field",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User enters \"01799999999\" into beneficiary Phone field",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Click Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Click_Create_Beneficiary_button()"
});
formatter.result({
  "duration": 3115678100,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Click_Benificiary_Type_field()"
});
formatter.result({
  "duration": 3119762200,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_select_TDS_Type()"
});
formatter.result({
  "duration": 3047312200,
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
  "duration": 6060327900,
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
  "duration": 30223217900,
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
  "duration": 3200934900,
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
  "duration": 3102254500,
  "status": "passed"
});
formatter.match({
  "location": "Bank_Create_Beneficiary_StepDef.user_Click_Submit_button()"
});
formatter.result({
  "duration": 3079081400,
  "status": "passed"
});
formatter.before({
  "duration": 105000,
  "status": "passed"
});
formatter.before({
  "duration": 111400,
  "status": "passed"
});
formatter.before({
  "duration": 92601,
  "status": "passed"
});
formatter.before({
  "duration": 119600,
  "status": "passed"
});
formatter.before({
  "duration": 91200,
  "status": "passed"
});
formatter.before({
  "duration": 92100,
  "status": "passed"
});
formatter.before({
  "duration": 84600,
  "status": "passed"
});
formatter.before({
  "duration": 84600,
  "status": "passed"
});
formatter.before({
  "duration": 130600,
  "status": "passed"
});
formatter.before({
  "duration": 128700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Select User to Approver",
  "description": "",
  "id": "user-approve-beneficiary;select-user-to-approver",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "User Click Select User button for Approver",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#Then User enters \"cda\" into search field"
    },
    {
      "line": 41,
      "value": "#Then User Click \"Approver at CDA\" button"
    },
    {
      "line": 42,
      "value": "#double scroll down will apper here"
    }
  ],
  "line": 43,
  "name": "User Click checked button for Denaid Request first row",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "#Scroll up 2 times"
    }
  ],
  "line": 45,
  "name": "User Click Select User button for Creator",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User Click Beneficiary List button",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User Click SL No button",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "User Verify the status is \"denied\" for that Beneficiary",
  "keyword": "Then "
});
formatter.match({
  "location": "Approve_Beneficiary_StepDef.user_Click_Select_User_button_for_Approver()"
});
formatter.result({
  "duration": 18556143199,
  "status": "passed"
});
formatter.match({
  "location": "Approve_Beneficiary_StepDef.userClickCheckedButtonForDenaidRequestFirstRow()"
});
formatter.result({
  "duration": 9426734599,
  "status": "passed"
});
formatter.match({
  "location": "Approve_Beneficiary_StepDef.user_Click_Select_User_button_for_Creator()"
});
formatter.result({
  "duration": 9371505800,
  "status": "passed"
});
formatter.match({
  "location": "Verify_Beneficiary_StepDef.userClickBeneficiaryListButton()"
});
formatter.result({
  "duration": 6202974601,
  "status": "passed"
});
formatter.match({
  "location": "Verify_Beneficiary_StepDef.user_Click_SL_No_button()"
});
formatter.result({
  "duration": 3057686800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "denied",
      "offset": 27
    }
  ],
  "location": "Approve_Beneficiary_StepDef.user_Verify_the_status_is_for_that_Beneficiary(String)"
});
formatter.result({
  "duration": 11273651700,
  "status": "passed"
});
});