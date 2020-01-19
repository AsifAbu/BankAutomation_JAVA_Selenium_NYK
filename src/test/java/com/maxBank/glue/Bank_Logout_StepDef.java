package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Bank_Logout_StepDef extends ParentScenario{
	
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }

	@Then("^User click on profile button$")
	public void user_click_on_profile_button() throws Throwable {
		Thread.sleep(4000);
		bank_logout.Click_Profile_Btn();
	    
	}

	@Then("^User click again click on Log Out button$")
	public void user_click_again_click_on_Log_Out_button() throws Throwable {
		Thread.sleep(4000);
		bank_logout.Click_Logout_Btn();
	}


}
