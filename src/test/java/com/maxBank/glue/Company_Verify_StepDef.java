package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Company_Verify_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@When("^User Click on Company List button$")
	public void user_Click_on_Company_List_button() throws Throwable {
	    Thread.sleep(4000);
	    company_verify.clickCompanyListBtn();
	    
	}

	@Then("^User Collect the Recent Created Company Data$")
	public void userCollectTheRecentCreatedCompanyData() throws Throwable {
		Thread.sleep(15000);
		company_verify.collectRecentCreatedCompanyData();
		Thread.sleep(20000);
		company_verify.verify();
		
	}
	
}
