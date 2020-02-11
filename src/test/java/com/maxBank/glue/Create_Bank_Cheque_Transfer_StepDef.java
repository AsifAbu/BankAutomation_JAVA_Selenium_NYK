package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Bank_Cheque_Transfer_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click Transfer button$")
	public void user_Click_Transfer_button() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_transfer.clickTransferBtn();
	}

	@Then("^User Click Transfer Selection and Amount Selection button$")
	public void user_Click_Transfer_Selection_and_Amount_Selection_button() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_transfer.clickTransferSelection();
	}

	@Then("^User Click Transfer type field and select \"([^\"]*)\"$")
	public void user_Click_Transfer_type_field_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_transfer.setTransferType(arg1);
	}

	@Then("^User Click Transfer payment type field and Select \"([^\"]*)\"$")
	public void user_Click_Transfer_payment_type_field_and_Select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_transfer.setPaymentType(arg1);
	}

	@Then("^User enters \"([^\"]*)\" into Amount field$")
	public void user_enters_into_Amount_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_transfer.addAmount(arg1);
	}

	@Then("^User Select Project To and select \"([^\"]*)\"$")
	public void user_Select_Project_To_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_transfer.setProjectTo(arg1);
	}

	@Then("^User Click Transfer Submit button$")
	public void user_Click_Transfer_Submit_button() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_transfer.clickTransferSubmit();
	}

	@Then("^User Click ID button$")
	public void userClickIDButton() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_transfer.clickIDBtn();
	}

	@Then("^User enters \"([^\"]*)\" into Amount Total field$")
	public void userEntersIntoAmountTotalField(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_transfer.addTotalAmount(arg1);
	}
}
