package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Approve_Chequebook_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click checked button for Approve Chequebook Request first row$")
	public void user_Click_checked_button_for_Approve_Chequebook_Request_first_row() throws Throwable {
	    Thread.sleep(3000);
	    approve_chequebook.clickApproveBtn();
	    
	}

	@Then("^User Verify the status is \"([^\"]*)\" for that Chequebook$")
	public void user_Verify_the_status_is_for_that_Chequebook(String arg1) throws Throwable {
		Thread.sleep(3000);
	    approve_chequebook.verifyStatus(arg1);
	}

	@Then("^User Click checked button for Denied Chequebook Request first row$")
	public void userClickCheckedButtonForDeniedChequebookRequestFirstRow() throws Throwable {
		Thread.sleep(3000);
	    approve_chequebook.clickDeniedBtn();
	}

}
