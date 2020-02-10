package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Transport_Bill_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click Transport Bill SL field and search \"([^\"]*)\"$")
	public void user_Click_Transport_Bill_SL_field_and_search(String arg1) throws Throwable {
	    Thread.sleep(3000);
	    create_transport_bill.searchByTransportBillSL(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row TDS field in LC Transport Bill$")
	public void userEntersInFirstRowTDSFieldInLCTransportBill(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_transport_bill.addTDS(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row Amount field LC Transport Bill$")
	public void userEntersInFirstRowAmountFieldLCTransportBill(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_transport_bill.addAmount(arg1);
	}
}
