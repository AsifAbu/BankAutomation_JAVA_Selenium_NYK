package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Create_Chequebooks_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }

	@When("^User Click Checkbooks button$")
	public void user_Click_Checkbooks_button() throws Throwable {
	    Thread.sleep(3000);
	    create_checkbooks.clickCheckbooksBtn();
	}

	@Then("^User Clicks Create Checkbook button$")
	public void user_Clicks_Create_Checkbook_button() throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.clickCreateCheckbooksBtn();
	}

	@When("^User Click Approver button and select Approver$")
	public void user_Click_Approver_button_and_select_Approver() throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.setApprover();
	}

	@Then("^User Select \"([^\"]*)\" as Signatory Authorities$")
	public void user_Select_as_Signatory_Authorities(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.setSignatoryAuthorities(arg1);
	}

	@Then("^User set the DateMonth \"([^\"]*)\" and Year \"([^\"]*)\"$")
	public void userSetTheDateMonthAndYear(String arg1, String arg2) throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.setDate(arg1, arg2);
	}

	@When("^User Click Bank Name button and set \"([^\"]*)\" bank$")
	public void user_Click_Bank_Name_button_and_set_bank(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.setBankName(arg1);
	}

	@Then("^User Click Bank Account button and set \"([^\"]*)\" Account$")
	public void user_Click_Bank_Account_button_and_set_Account(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.setBankAccNo(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Checkbook Number field$")
	public void user_enters_into_Checkbook_Number_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.addChequeBookNumber(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Starting Leaf Number field$")
	public void user_enters_into_Starting_Leaf_Number_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.addStartingLeafNo(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Cheque Leaf Count field$")
	public void user_enters_into_Cheque_Leaf_Count_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.addLeafCount(arg1);
	}

	@Then("^User Click CheckBookSubmit button$")
	public void userClickCheckBookSubmitButton() throws Throwable {
		Thread.sleep(3000);
	    create_checkbooks.clickSubmitBtn();
	}

	
}
