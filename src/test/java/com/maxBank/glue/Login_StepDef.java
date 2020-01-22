package com.maxBank.glue;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Login_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Given("^User is on Login page$")
	public void user_is_on_Login_page() throws Throwable {
		navigateTo();
	}

	@When("^User enters \"([^\"]*)\" into Username field$")
	public void user_enters_into_Username_field(String arg1) throws Throwable {
	    
		Thread.sleep(4000);
		LogIn.AddUserName(arg1);
		
	}

	@When("^User enters \"([^\"]*)\" into Password field$")
	public void user_enters_into_Password_field(String arg1) throws Throwable {
		Thread.sleep(4000);
		LogIn.AddPassword(arg1);
	}

	@When("^User Click LogIn button$")
	public void user_Click_LogIn_button() throws Throwable {
		Thread.sleep(4000);
		LogIn.ClickLoginBtn();
	}
	
	@Then("^User select Creator at CDA$")
	public void user_select_Creator_at_CDA() throws Throwable {
		Thread.sleep(4000);
		LogIn.SelectRole();
	}

	@Then("^click Confirm button$")
	public void click_Confirm_button() throws Throwable {
		Thread.sleep(4000);
		LogIn.ClickRoleConfirmBtn();
	}

	@And("^Login Denied With Alert Message \"([^\"]*)\"$")
	public void loginDeniedWithAlertMessage(String arg1) throws Throwable {
		Thread.sleep(4000);
		LogIn.altmsg(arg1);
	}
	
	@When("^User Login Successfully$")
	public void user_Login_Successfully() throws Throwable {
		Thread.sleep(4000);
		LogIn.loginSuccess();
		Thread.sleep(2000);
	}

	

}
