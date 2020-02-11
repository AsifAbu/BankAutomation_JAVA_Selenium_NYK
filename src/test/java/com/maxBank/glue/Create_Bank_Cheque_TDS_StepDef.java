package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Bank_Cheque_TDS_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click TDS&VDS button$")
	public void user_Click_TDS_VDS_button() throws Throwable {
	    Thread.sleep(3000);
	    create_bank_cheque_tds.clickTdsVdsBtn();
	}

	@Then("^User Click COmpany, TDS Type & Amount Selection button$")
	public void user_Click_COmpany_TDS_Type_Amount_Selection_button() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_tds.clickCompanyTDSBtn();
	}

	@Then("^User Click Select Cheque Type button and select \"([^\"]*)\"$")
	public void user_Click_Select_Cheque_Type_button_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_tds.setChequeType(arg1);
	}

	@Then("^User Click select TDS Type and select \"([^\"]*)\"$")
	public void user_Click_select_TDS_Type_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_tds.setTDSChequeType(arg1);
	}

	@Then("^User Click ID Requisition$")
	public void user_Click_ID_Requisition() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_tds.clickIDRequisitionBtn();
	}

	@Then("^User Click Amount nbutton in first row$")
	public void user_Click_Amount_nbutton_in_first_row() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_tds.clickAmountBtn();
	}

	@Then("^User Click TDS Submit button$")
	public void user_Click_TDS_Submit_button() throws Throwable {
		Thread.sleep(3000);
	    create_bank_cheque_tds.clickTDSSubmit();
	}
}
