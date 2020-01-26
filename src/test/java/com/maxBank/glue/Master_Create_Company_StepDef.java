package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Master_Create_Company_StepDef extends ParentScenario{
	
	WebDriver driver = getDriver();
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }

	@When("^User Click Master Company button$")
	public void user_Click_Master_Company_button() throws Throwable {
		Thread.sleep(4000);
	    master_create_company.ClickCompanyBtn();
	}

	@When("^User Click Master Add New Company button$")
	public void user_Click_Master_Add_New_Company_button() throws Throwable {
		Thread.sleep(4000);
		master_create_company.ClickAddNewCompanyBtn();
	}

	@Given("^User is on Master Add New Company Create page$")
	public void user_is_on_Master_Add_New_Company_Create_page() throws Throwable {
	    Thread.sleep(4000);
	    master_create_company.userInAddNewCompanyPage();
	}

	@When("^User enters \"([^\"]*)\" into Company Name field$")
	public void user_enters_into_Company_Name_field(String arg1) throws Throwable {
	    
		Thread.sleep(4000);
		master_create_company.addCompanyName(arg1);
		Thread.sleep(4000);
	}

	@When("^User enters \"([^\"]*)\" into Company Code field$")
	public void user_enters_into_Company_Code_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.addCompanyCode(arg1);
		Thread.sleep(4000);
	}

	@When("^User Click City button$")
	public void user_Click_City_button() throws Throwable {
		Thread.sleep(6000);
		master_create_company.clickCityBtn();
	}
	@And("^User enters \"([^\"]*)\" into City Search field$")
	public void userEntersIntoCitySearchField(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.citySearch(arg1);
	}
	
	@And("^User Click into City field$")
	public void userClickIntoCityField() throws Throwable {
		Thread.sleep(4000);
		master_create_company.selectCity();
		Thread.sleep(4000);
	}

	@When("^User enters \"([^\"]*)\" into Company Address field$")
	public void user_enters_into_Company_Address_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.companyAddress(arg1);
	}

	@When("^User Click Calender button into Establish Date field$")
	public void user_Click_Calender_button_into_Establish_Date_field() throws Throwable {
		Thread.sleep(4000);
		master_create_company.establishDate();
		Thread.sleep(2000);
	}

	@When("^User Click Date button into Establish Date field$")
	public void user_Click_Date_button_into_Establish_Date_field() throws Throwable {
		Thread.sleep(4000);
		master_create_company.establishDateSelect();
		Thread.sleep(2000);
	}

	@When("^User enters \"([^\"]*)\" into Company Account No field$")
	public void user_enters_into_Company_Account_No_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.companyAccNo(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Company TreadLicense field$")
	public void user_enters_into_Company_TreadLicense_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.companyTreadLience(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Tax Deduction AccountNo field$")
	public void user_enters_into_Tax_Deduction_AccountNo_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.taxDeductionAcc(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Provided Fund Reg No field$")
	public void user_enters_into_Provided_Fund_Reg_No_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.providedFundRegNo(arg1);
	}

	@When("^User Click Calender button into Provided Fund Reg Date field$")
	public void user_Click_Calender_button_into_Provided_Fund_Reg_Date_field() throws Throwable {
		Thread.sleep(4000);
		master_create_company.fundRegDate();
	}

	@When("^User Click Date button into Provided Fund Reg Date field$")
	public void user_Click_Date_button_into_Provided_Fund_Reg_Date_field() throws Throwable {
		Thread.sleep(4000);
		master_create_company.fundRegDateSelect();
	}

	@When("^User enters \"([^\"]*)\" into Gratuity Reg No field$")
	public void user_enters_into_Gratuity_Reg_No_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.gratuityRefNo(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Retirement Age field$")
	public void user_enters_into_Retirement_Age_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.retirementAge(arg1);
	}

	@When("^User enters \"([^\"]*)\" Contact Person name field$")
	public void user_enters_Contact_Person_name_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.contactPersonName(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Contact Person Designation field$")
	public void user_enters_into_Contact_Person_Designation_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.contactPersionDesignation(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Website field$")
	public void user_enters_into_Website_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.website(arg1);
		master_create_company.scrollDown();
		Thread.sleep(6000);
	}

	@When("^Usert enters \"([^\"]*)\" into Company Email field$")
	public void usert_enters_into_Company_Email_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.companyEmail(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Telephone Number field$")
	public void user_enters_into_Telephone_Number_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.telephoneNumber(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Fax Number field$")
	public void user_enters_into_Fax_Number_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.faxNumber(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Business Type field$")
	public void user_enters_into_Business_Type_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.businessType(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Business Group field$")
	public void user_enters_into_Business_Group_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.businessGroup(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Company Catagory field$")
	public void user_enters_into_Company_Catagory_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.companyCatagory(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Remarks field$")
	public void user_enters_into_Remarks_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_create_company.remarks(arg1);
	}

	@When("^User Clicks Create Company button$")
	public void user_Clicks_Create_Company_button() throws Throwable {
		Thread.sleep(4000);
		master_create_company.createCompany();
		Thread.sleep(2000);
		master_create_company.scrollUp();
	}

	@When("^User Click Show All Companies button$")
	public void userClickShowAllCompaniesButton() throws Throwable {
		Thread.sleep(4000);
		master_create_company.clickShowAllCompaniesBtn();
		Thread.sleep(2000);
		master_create_company.verifyShowAllCompaniesPage();
	}

	@Then("^User collect the recent created company data$")
	public void userCollectTheRecentCreatedCompanyData() throws Throwable {
		Thread.sleep(20000);
		master_create_company.verify_New_Company();
		Thread.sleep(15000);
		
	}
	@Then("^User Logout Master$")
	public void userLogoutMaster() throws Throwable {
		Thread.sleep(3000);
		master_create_company.logoutMaster();
	}
	

	
}
