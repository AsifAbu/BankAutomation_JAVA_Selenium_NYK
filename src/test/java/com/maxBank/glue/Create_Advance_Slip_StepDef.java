package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Advance_Slip_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click Advance Slip Submit button$")
	public void user_Click_Advance_Slip_Submit_button() throws Throwable {
	    Thread.sleep(3000);
	    create_advance_slip.clickAdvanceSlipSubmitBtn();
	}

}
