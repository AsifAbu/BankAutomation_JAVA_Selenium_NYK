package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Bank_Cheque_Security_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }

	@Then("^User Click Security button$")
	public void user_Click_Security_button() throws Throwable {
	    Thread.sleep(3000);
	    create_bank_cheque_security.clickSecurityBtn();
	}

	@Then("^User Click Purpose of Cheque button$")
	public void user_Click_Purpose_of_Cheque_button() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_security.clickPurposeOfChequeBtn();
	}

	@Then("^User Click Purpose of Cheque and enter \"([^\"]*)\"$")
	public void user_Click_Purpose_of_Cheque_and_enter(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_security.addPerposeOfChequeText(arg1);
	}

	@Then("^User enter cheque Amount \"([^\"]*)\"$")
	public void user_enter_cheque_Amount(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_security.addChequeAmount(arg1);
	}

	@Then("^User Click Cheque Category field and select Account Payee button$")
	public void user_Click_Cheque_Category_field_and_select_Account_Payee_button() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_security.clickChequeCategoryBtn();
	}

	@Then("^User Click Security Submit button$")
	public void user_Click_Security_Submit_button() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_security.clickSecuritySubmitBtn();
	}
}
