package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Freight_Charge_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click Freight Charge NO field and search \"([^\"]*)\"$")
	public void user_Click_Freight_Charge_NO_field_and_search(String arg1) throws Throwable {
	    Thread.sleep(3000);
	    create_freight_charge.searchByFreightChargeNo(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row Amount field LC Freight Charge$")
	public void user_enters_in_first_row_Amount_field_LC_Freight_Charge(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_freight_charge.addAmount(arg1);
	}

}
