package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Arranger_Commission_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click Type field and select \"([^\"]*)\"$")
	public void user_Click_Type_field_and_select(String arg1) throws Throwable {
	    Thread.sleep(3000);
	    create_arrenger_commission.clickType(arg1);
	}

	@Then("^User Click Arranger Commission NO field and search \"([^\"]*)\"$")
	public void user_Click_Arranger_Commission_NO_field_and_search(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_arrenger_commission.searchByArrangerCommNO(arg1);
	}


	@Then("^User enters \"([^\"]*)\" in first row Amount field LC Arranger Commission$")
	public void user_enters_in_first_row_Amount_field_LC_Arranger_Commission(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_arrenger_commission.addAmount(arg1);
	}
}
