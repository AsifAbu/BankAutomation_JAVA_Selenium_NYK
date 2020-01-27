package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Bank_Create_Beneficiary_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@When("^User Click Beneficiary button$")
	public void user_Click_Beneficiary_button() throws Throwable {
		Thread.sleep(3000);
	    bank_create_beneficiary.clickBeneficiaryBtn();
	}

	@Then("^User Click Create Beneficiary button$")
	public void user_Click_Create_Beneficiary_button() throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.clickCreateBeneficiaryBtn();
	}

	@Then("^User Click Exixting Vendor field$")
	public void user_Click_Exixting_Vendor_field() throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.clickExistingBtn();
	}

	@Then("^User Click Gazipur Polish Store button$")
	public void user_Click_Gazipur_Polish_Store_button() throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.selectExistingVendor();
	}

	@Then("^User Click Approver field$")
	public void user_Click_Approver_field() throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.selectExistingVendor();
	}
	
	@And("^User Select \"([^\"]*)\" At Approver Option$")
	public void userSelectAtApproverOption(String arg1) throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.selectApprover(arg1);
		Thread.sleep(3000);
	}
	
	@Then("^User enters \"([^\"]*)\" into Beneficiary Name field$")
	public void user_enters_into_Beneficiary_Name_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.addBeneficiaryName(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Beneficiary Email field$")
	public void user_enters_into_Beneficiary_Email_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.addBeneficiaryEmail(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into beneficiary Phone field$")
	public void user_enters_into_beneficiary_Phone_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.addBeneficiaryPhone(arg1);
	}

	@When("^User Clicks Add Beneficiary Bank Account button$")
	public void user_Clicks_Add_Beneficiary_Bank_Account_button() throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.clickAddBankAccountBtn();
		Thread.sleep(3000);
		bank_create_beneficiary.clickAddBankAccountBtn();
		Thread.sleep(3000);
		bank_create_beneficiary.clickRemoveBankAccountSmall();
		Thread.sleep(3000);
		bank_create_beneficiary.clickRemoveBankAccountSmallRed();
		Thread.sleep(3000);
		bank_create_beneficiary.clickAddBankAccountBtn();
		
	}

	@Then("^User Clicks Bank Name button and Select or Click UCBL$")
	public void user_Clicks_Bank_Name_button_and_Select_or_Click_UCBL() throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.clickSelectBank();
	}

	@Then("^User enters \"([^\"]*)\" into Branch Name field$")
	public void userEntersIntoBranchNameField(String arg1) throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.addBranchname(arg1);
	}

	@Then("^user enters \"([^\"]*)\" into Account Number field$")
	public void user_enters_into_Account_Number_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.addAccountNumber(arg1);
	}

	@Then("^User Click Submit button$")
	public void user_Click_Submit_button() throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.clickSubmit();
	}

	@When("^User Click Benificiary Type field$")
	public void user_Click_Benificiary_Type_field() throws Throwable {
		Thread.sleep(3000);
		bank_create_beneficiary.clickBeneficiaryType();
	}

	@Then("^User select Non Vendor Type$")
	public void user_select_Non_Vendor_Type() throws Throwable {
		Thread.sleep(6000);
		bank_create_beneficiary.selectNonVendor();
		Thread.sleep(20000);
	}

	@Then("^User select TDS Type$")
	public void user_select_TDS_Type() throws Throwable {
	    Thread.sleep(3000);
	    bank_create_beneficiary.selectTDS();
	}

	
	
}
