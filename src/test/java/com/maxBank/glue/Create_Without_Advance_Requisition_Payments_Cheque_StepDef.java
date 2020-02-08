package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Without_Advance_Requisition_Payments_Cheque_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User enters \"([^\"]*)\" in Total in First Row Amount field$")
    public void user_enters_in_Total_in_First_Row_Amount_field(String arg1) throws Throwable {
        Thread.sleep(3000);
		create_without_advanced_requisition_payments_cheque.addAmount(arg1);
    }

    @Then("^User Click Fund Without Advanced Requisition Payments Cheque Submit button$")
    public void user_Click_Fund_Without_Advanced_Requisition_Payments_Cheque_Submit_button() throws Throwable {
    	Thread.sleep(3000);
		create_without_advanced_requisition_payments_cheque.clickAdvancedRequisitionSubmitBtn();
    }
}
