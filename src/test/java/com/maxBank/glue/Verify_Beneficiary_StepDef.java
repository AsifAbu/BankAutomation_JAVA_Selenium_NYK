package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Verify_Beneficiary_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@When("^User Click Beneficiary Name button$")
	public void user_Click_Beneficiary_Name_button() throws Throwable {
	    Thread.sleep(3000);
	    verify_beneficiary.clickBeneficiaryNameBtn();
	    
	}

	@Then("^User Click Benecifiary Type button$")
	public void user_Click_Benecifiary_Type_button() throws Throwable {
		Thread.sleep(3000);
	    verify_beneficiary.clickBeneficiaryTypeBtn();
	    
	}

	@Then("^User Click Benecificiary Email button$")
	public void user_Click_Benecificiary_Email_button() throws Throwable {
		Thread.sleep(3000);
	    verify_beneficiary.clickBeneficiaryEmailBtn();
	    
	}

	@Then("^User Click Phone No button$")
	public void user_Click_Phone_No_button() throws Throwable {
		Thread.sleep(3000);
	    verify_beneficiary.clickPhoneNoBtn();
	    
	}

	@Then("^User Click Status button$")
	public void user_Click_Status_button() throws Throwable {
		Thread.sleep(3000);
	    verify_beneficiary.clickStatusBtn();
	    
	}

	@Then("^User Click Approver button$")
	public void user_Click_Approver_button() throws Throwable {
		Thread.sleep(3000);
	    verify_beneficiary.clickApproverBtn();
	    
	}

	@Then("^User Click Vendor Name button$")
	public void user_Click_Vendor_Name_button() throws Throwable {
		Thread.sleep(3000);
	    verify_beneficiary.clickVendorNameBtn();
	    
	}

	@Then("^User Click Create On button$")
	public void user_Click_Create_On_button() throws Throwable {
		Thread.sleep(3000);
	    verify_beneficiary.clickCreateOnBtn();
	    
	}

	@Then("^User Click SL No button$")
	public void user_Click_SL_No_button() throws Throwable {
		Thread.sleep(3000);
	    verify_beneficiary.clickSLNoBtn();
	    
	}

	@When("^User collect Last TDS data and Verify it$")
	public void user_collect_Last_TDS_data_and_Verify_it() throws Throwable {
		Thread.sleep(15000);
	    verify_beneficiary.collectTDSData();
	    Thread.sleep(25000);
	    
	}

	@Then("^User collect Second Last NonVendor data and Verify it$")
	public void user_collect_Second_Last_NonVendor_data_and_Verify_it() throws Throwable {
		Thread.sleep(15000);
		verify_beneficiary.collectNonVendorData();
		Thread.sleep(25000);
	}

	@Then("^User collect Third last Vendor data and Verify it$")
	public void user_collect_Third_last_Vendor_data_and_Verify_it() throws Throwable {
		Thread.sleep(15000);
		verify_beneficiary.collectVendorData();
		Thread.sleep(25000);
	}
	@When("^User Click Beneficiary List button$")
	public void userClickBeneficiaryListButton() throws Throwable {
		Thread.sleep(3000);
		verify_beneficiary.clickBeneficiaryListBtn();
		
	}

}
