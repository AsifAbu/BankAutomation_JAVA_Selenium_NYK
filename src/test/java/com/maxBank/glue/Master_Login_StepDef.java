package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Master_Login_StepDef extends ParentScenario{
	
	WebDriver driver = getDriver();
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Given("^User is on Master_LogIn page$")
	public void userIsOnMaster_LogInPage() throws Throwable {
		Thread.sleep(4000);
	    navigateToMasterModule();
	}

	@When("^User enters \"([^\"]*)\" into Master_name field$")
	public void user_enters_into_Master_name_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_login.AddUserName(arg1);
	}

	@When("^User enters \"([^\"]*)\" into Master_Password field$")
	public void user_enters_into_Master_Password_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_login.AddPassword(arg1);
	}

	@And("^User Click Master_LogIn button$")
	public void userClickMaster_LogInButton() throws Throwable {
		Thread.sleep(4000);
		master_login.Click_Master_Login();
	}
	
	@And("^Master_LogIn Denied With Alert Message \"([^\"]*)\"$")
	public void master_loginDeniedWithAlertMessage(String arg1) throws Throwable {
		Thread.sleep(4000);
		master_login.altmsgMaster(arg1);
	}

	@And("^User Master_Login Successfully$")
	public void userMaster_LoginSuccessfully() throws Throwable {
		Thread.sleep(4000);
		master_login.loginSuccess();
		Thread.sleep(2000);
	}

	
	
}
