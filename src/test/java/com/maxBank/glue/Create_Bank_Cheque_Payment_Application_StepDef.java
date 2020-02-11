package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Bank_Cheque_Payment_Application_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }

	@Then("^User Click Payment Application button$")
	public void user_Click_Payment_Application_button() throws Throwable {
	    Thread.sleep(3000);
	    create_bank_cheque_payment_application.clickPaymentApplication();
	}
	
	@Then("^User Click PA SN field and search \"([^\"]*)\"$")
	public void user_Click_PA_SN_field_and_search(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_payment_application.clickAndSearch(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row TDS field in LC Payment Application$")
	public void user_enters_in_first_row_TDS_field_in_LC_Payment_Application(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_payment_application.addTDS(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row Amount field in LC Payment Application$")
	public void user_enters_in_first_row_Amount_field_in_LC_Payment_Application(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_payment_application.addAmount(arg1);
	}

	@Then("^User Click Payment Application Selection button$")
	public void userClickPaymentApplicationSelectionButton() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_payment_application.clickPaymentApplicationSelection();
	}

}
