package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Project_Verify_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }	
	
	@When("^User Click on Project List button$")
	public void user_Click_on_Project_List_button() throws Throwable {
	    Thread.sleep(3000);
	    project_verify.clickProjectListBtn();
	    
	}

	@Then("^User Collect the Recent Created Project Data Fixed Budget$")
	public void userCollectTheRecentCreatedProjectDataFixedBudget() throws Throwable {
		Thread.sleep(15000);
		project_verify.collectRecentCreatedProjectDataFixed();
		Thread.sleep(20000);
		project_verify.verifyFixed();
	}

	@Then("^User Collect the Recent Created Project Data Recurring Budget$")
	public void userCollectTheRecentCreatedProjectDataRecurringBudget() throws Throwable {
		Thread.sleep(15000);
		project_verify.collectRecentCreatedProjectDataRecurring();
		Thread.sleep(20000);
		project_verify.verifyRecurring();
	}
}
