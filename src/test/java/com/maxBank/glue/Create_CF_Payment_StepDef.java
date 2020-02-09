package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_CF_Payment_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click LC Payments button$")
	public void user_Click_LC_Payments_button() throws Throwable {
	    Thread.sleep(3000);
	    create_cf_payment.clickLCPaymentBtn();
	}

	@Then("^User Click Amount Selection button$")
	public void userClickAmountSelectionButton() throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.clickAmountSelection();
	}
	
	@Then("^User Click LC Payment type field and select \"([^\"]*)\"$")
	public void user_Click_LC_Payment_type_field_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.setLCPaymentType(arg1);
	}

	@Then("^User Click CDR SL field and search \"([^\"]*)\"$")
	public void user_Click_CDR_SL_field_and_search(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.setCDR_SL(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row TDS field in LC Payment Bill$")
	public void user_enters_in_first_row_TDS_field_in_LC_Payment_Bill(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.addTDS(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row Amount field LC Payment Bill$")
	public void user_enters_in_first_row_Amount_field_LC_Payment_Bill(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.addAmount(arg1);
	}

	@Then("^User Click Bank To and select \"([^\"]*)\"$")
	public void user_Click_Bank_To_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.setBankTo(arg1);
	}

	@Then("^User Click Bank To Account No and select \"([^\"]*)\"$")
	public void user_Click_Bank_To_Account_No_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.setbankToAccountNo(arg1);
	}

	@Then("^User Click Cheque Date CDC$")
	public void user_Click_Cheque_Date_CDC() throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.clickCDC();
	}

	@Then("^User Click C&F Payment Submit button$")
	public void user_Click_C_F_Payment_Submit_button() throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.cfSubmitBtn();
	}

	@Then("^User Click C&F Type field and select \"([^\"]*)\"$")
	public void userClickCFTypeFieldAndSelect(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_cf_payment.CandFType(arg1);
		
	}

	
}
