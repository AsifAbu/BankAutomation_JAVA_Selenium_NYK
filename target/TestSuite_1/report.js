$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/1B_Master/1D_Master_Create_Project.feature");
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
  "duration": 8663129000,
  "status": "passed"
});
formatter.before({
  "duration": 129300,
  "status": "passed"
});
formatter.before({
  "duration": 74700,
  "status": "passed"
});
formatter.before({
  "duration": 68000,
  "status": "passed"
});
formatter.before({
  "duration": 75900,
  "status": "passed"
});
formatter.before({
  "duration": 84000,
  "status": "passed"
});
formatter.before({
  "duration": 80000,
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
  "name": "User is on Master_LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"erp.maxgroup@gmail.com\" into Master_name field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"123\" into Master_Password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click Master_LogIn button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Master_Login Successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User Click ProjectBusiness Unit button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Click Add New Project button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Click Select Parent Company",
  "keyword": "Then "
});
formatter.match({
  "location": "Master_Login_StepDef.userIsOnMaster_LogInPage()"
});
formatter.result({
  "duration": 7379699900,
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
  "duration": 4187185500,
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
  "duration": 4058759500,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userClickMaster_LogInButton()"
});
formatter.result({
  "duration": 4069116500,
  "status": "passed"
});
formatter.match({
  "location": "Master_Login_StepDef.userMaster_LoginSuccessfully()"
});
formatter.result({
  "duration": 6042040900,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_ProjectBusiness_Unit_button()"
});
formatter.result({
  "duration": 3078084400,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Add_New_Project_button()"
});
formatter.result({
  "duration": 3070980000,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Select_Parent_Company()"
});
formatter.result({
  "duration": 3156231500,
  "status": "passed"
});
formatter.before({
  "duration": 110000,
  "status": "passed"
});
formatter.before({
  "duration": 96500,
  "status": "passed"
});
formatter.before({
  "duration": 77500,
  "status": "passed"
});
formatter.before({
  "duration": 95100,
  "status": "passed"
});
formatter.before({
  "duration": 82800,
  "status": "passed"
});
formatter.before({
  "duration": 135400,
  "status": "passed"
});
formatter.before({
  "duration": 95600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create New Project of Fixed Budget Type",
  "description": "",
  "id": "user-going-to-create-new-project;create-new-project-of-fixed-budget-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User enters \"\" on Project Name field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\" on Project ID field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Random\" on Project Type field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"Rajshahi\" on Project Locatin field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Enters \"200\" on Project Budget Ammount Field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Click on Budget Duration button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Click on Budget Duration To button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters \"Asif\" on Contact Person Name field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters \"01799999999\" on Contact Person No field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enters \"Not Applicable for automation\" on Remarks field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters \"Not Applicable for automation\" on Other Details field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Click Create Project button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User Click Show All Project button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
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
  "duration": 5334135700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Project_ID_field(String)"
});
formatter.result({
  "duration": 35359190700,
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
  "duration": 3087177100,
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
  "duration": 3124773600,
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
  "duration": 3079112900,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.userClickOnBudgetDurationButton()"
});
formatter.result({
  "duration": 3160642200,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.userClickOnBudgetDurationToButton()"
});
formatter.result({
  "duration": 3152308600,
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
formatter.result({
  "duration": 3073576600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01799999999",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Contact_Person_No_field(String)"
});
formatter.result({
  "duration": 3105330000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Applicable for automation",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Remarks_field(String)"
});
formatter.result({
  "duration": 3155008000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Applicable for automation",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Other_Details_field(String)"
});
formatter.result({
  "duration": 3161488400,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Create_Project_button()"
});
formatter.result({
  "duration": 3070843900,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Show_All_Project_button()"
});
formatter.result({
  "duration": 3068854900,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.userCollectCreatedNewProjectDataForFixedBudgetType()"
});
formatter.result({
  "duration": 26393247500,
  "status": "passed"
});
formatter.before({
  "duration": 81600,
  "status": "passed"
});
formatter.before({
  "duration": 86700,
  "status": "passed"
});
formatter.before({
  "duration": 73800,
  "status": "passed"
});
formatter.before({
  "duration": 63900,
  "status": "passed"
});
formatter.before({
  "duration": 66300,
  "status": "passed"
});
formatter.before({
  "duration": 53100,
  "status": "passed"
});
formatter.before({
  "duration": 104200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create New Project of Recurring Budget Type",
  "description": "",
  "id": "user-going-to-create-new-project;create-new-project-of-recurring-budget-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User Click Add New Project button",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User Click Select Parent Company",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User enters \"\" on Project Name field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enters \"\" on Project ID field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters \"Random\" on Project Type field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Click Budget Type button and Select Recurring Budget Type",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enters \"Rajshahi\" on Project Locatin field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User enters \"Asif\" on Contact Person Name field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enters \"01799999999\" on Contact Person No field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enters \"Not Applicable for automation\" on Remarks field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enters \"Not Applicable for automation\" on Other Details field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Click Create Project button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User Click Show All Project button",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User Collect Created New Project Data for Recurring Budget Type",
  "keyword": "Then "
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Add_New_Project_button()"
});
formatter.result({
  "duration": 3103421700,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Select_Parent_Company()"
});
formatter.result({
  "duration": 3152856800,
  "status": "passed"
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
  "duration": 5249297400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Project_ID_field(String)"
});
formatter.result({
  "duration": 35314156500,
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
  "duration": 3082231600,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.userClickBudgetTypeButtonAndSelectRecurringBudgetType()"
});
formatter.result({
  "duration": 3143322800,
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
  "duration": 3100949100,
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
formatter.result({
  "duration": 3064882600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01799999999",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Contact_Person_No_field(String)"
});
formatter.result({
  "duration": 3102438800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Applicable for automation",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Remarks_field(String)"
});
formatter.result({
  "duration": 3168197700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Applicable for automation",
      "offset": 13
    }
  ],
  "location": "Master_Create_Project_StepDef.user_enters_on_Other_Details_field(String)"
});
formatter.result({
  "duration": 3146304800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Create_Project_button()"
});
formatter.result({
  "duration": 3075244800,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.user_Click_Show_All_Project_button()"
});
formatter.result({
  "duration": 3131824200,
  "status": "passed"
});
formatter.match({
  "location": "Master_Create_Project_StepDef.userCollectCreatedNewProjectDataForRecurringBudgetType()"
});
formatter.result({
  "duration": 26053293900,
  "status": "passed"
});
});