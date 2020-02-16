package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Add_Bank_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click Add Bank button$")
	public void user_Click_Add_Bank_button() throws Throwable {
	    Thread.sleep(3000);
	    add_account.clickAddBankBtn();
	}

	@Then("^User Click and select \"([^\"]*)\" into Approver field$")
	public void user_Click_and_select_into_Approver_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setApprover(arg1);
	}

	@Then("^User Click and select \"([^\"]*)\" into Bank Name field$")
	public void user_Click_and_select_into_Bank_Name_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setBankName(arg1);
	}

	@Then("^User enter \"([^\"]*)\" into Account Number field$")
	public void user_enter_into_Account_Number_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setAccountNumber(arg1);
	}

	@Then("^User Click and select \"([^\"]*)\" into Account Type field$")
	public void user_Click_and_select_into_Account_Type_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setAccountType(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Branch name field$")
	public void user_enters_into_Branch_name_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setBranchName(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Account Routing Number field$")
	public void user_enters_into_Account_Routing_Number_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setRoutingNumber(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Branch Head Destination field$")
	public void user_enters_into_Branch_Head_Destination_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setHeadDestination(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Branch Address field$")
	public void user_enters_into_Branch_Address_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setBranchAddress(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Phone Number field$")
	public void user_enters_into_Phone_Number_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setPhoneNumber(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Email field$")
	public void user_enters_into_Email_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.setEmail(arg1);
	}

	@Then("^Click Submit button of Create Account$")
	public void click_Submit_button_of_Create_Account() throws Throwable {
		Thread.sleep(3000);
	    add_account.clickSubmitBtn();
	}

	@Then("^User Click All Project List button$")
	public void user_Click_All_Project_List_button() throws Throwable {
		Thread.sleep(3000);
	    add_account.clickProjectListBtn();
	}

	@Then("^User collect Account Status \"([^\"]*)\" and Verify$")
	public void userCollectAccountStatusAndVerify(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.verifyStatus(arg1);
	}

	@Then("^User Click Dashboard button$")
	public void user_Click_Dashboard_button() throws Throwable {
		Thread.sleep(3000);
	    add_account.clickDashborad();
	}

	@Then("^User Approve The created Account$")
	public void user_Approve_The_created_Account() throws Throwable {
		Thread.sleep(3000);
	    add_account.clickApproveBtn();
	}

	@Then("^User enters \"([^\"]*)\" into Account Number Search field$")
	public void user_enters_into_Account_Number_Search_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    add_account.searchByAccountNo(arg1);
	}

	

}
