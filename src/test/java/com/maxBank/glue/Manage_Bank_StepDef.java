package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Manage_Bank_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }

	@Given("^User Click Banks button$")
	public void user_Click_Banks_button() throws Throwable {
	    Thread.sleep(3000);
	    manage_bank.clickBankBtn();
	}
	
	@Then("^User Click Manage Bank button$")
	public void userClickManageBankButton() throws Throwable {
		Thread.sleep(3000);
	    manage_bank.clickManageBankBtn();
	}

	
	@Then("^User enters \"([^\"]*)\" into Bank Name field$")
	public void user_enters_into_Bank_Name_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    manage_bank.addBankName(arg1);
	}
	
	@Then("^User enters \"([^\"]*)\" into Bank Full Name field$")
	public void user_enters_into_Bank_Full_Name_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    manage_bank.addBankFullName(arg1);
	}
	
	@Then("^User Collect Data and Verify$")
	public void user_Collect_Data_and_Verify() throws Throwable {
		Thread.sleep(3000);
	    manage_bank.verify();
	}
	@Then("^Delete it$")
	public void deleteIt() throws Throwable {
		Thread.sleep(3000);
	    manage_bank.deleteBank();
	}

	


}
