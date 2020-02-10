package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Insurance_Payment_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click Insurance Payment SL field and search \"([^\"]*)\"$")
	public void user_Click_Insurance_Payment_SL_field_and_search(String arg1) throws Throwable {
	    Thread.sleep(3000);
	    create_insurance_payment.searchByInsuranceCoverageNo(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row TDS field in LC Insurance Payment$")
	public void user_enters_in_first_row_TDS_field_in_LC_Insurance_Payment(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_insurance_payment.addTDS(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row Amount field LC Insurance Paymebt$")
	public void user_enters_in_first_row_Amount_field_LC_Insurance_Paymebt(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_insurance_payment.addAmount(arg1);
	}
}
