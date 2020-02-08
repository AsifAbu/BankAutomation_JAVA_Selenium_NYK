package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_NonRequisition_Entries_Cheque_SepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }	
	
	@Then("^User enters \"([^\"]*)\" in Cheque Amount field$")
	public void user_enters_in_Cheque_Amount_field(String arg1) throws Throwable {
	    Thread.sleep(3000);
	    create_nonrequisition_entries_cheque.addAmount(arg1);
	}

	@Then("^User Click NonRequisition Entries Cheque Submit button$")
	public void user_Click_NonRequisition_Entries_Cheque_Submit_button() throws Throwable {
		Thread.sleep(3000);
	    create_nonrequisition_entries_cheque.clickNonRequisitionSubmitBtn();
	}
	
}
