package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_NonStore_Purchase_Bill_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click Non-Store Purchase Bill Submit button$")
	public void user_Click_Non_Store_Purchase_Bill_Submit_button() throws Throwable {
		Thread.sleep(3000);
	    create_nonstore_purchase_bill.clickNonStoreSubmitBtn();
	}
}
