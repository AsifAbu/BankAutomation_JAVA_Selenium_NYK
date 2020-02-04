package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Approve_Beneficiary_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@When("^User Click Select User button for Approver$")
	public void user_Click_Select_User_button_for_Approver() throws Throwable {
	    Thread.sleep(3000);
	    approve_beneficiary.setUserAsApprover();
	    approve_beneficiary.verifyDashboardPage();
	}

	@Then("^User Click checked button for Approve Request first row$")
	public void user_Click_checked_button_for_Approve_Request_first_row() throws Throwable {
		Thread.sleep(3000);
	    approve_beneficiary.clickApproveBtn();
	}

	@Then("^User Click Select User button for Creator$")
	public void user_Click_Select_User_button_for_Creator() throws Throwable {
		Thread.sleep(3000);
	    approve_beneficiary.setUserAsCreator();
	}

	@Then("^User Verify the status is \"([^\"]*)\" for that Beneficiary$")
	public void user_Verify_the_status_is_for_that_Beneficiary(String arg1) throws Throwable {
		Thread.sleep(3000);
	    approve_beneficiary.checkStatusActive(arg1);
	}

	@Then("^User Click checked button for Denaid Request first row$")
	public void userClickCheckedButtonForDenaidRequestFirstRow() throws Throwable {
		Thread.sleep(3000);
	    approve_beneficiary.clickDenaidBtn();
	}
}
