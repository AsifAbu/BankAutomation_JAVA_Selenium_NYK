package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Verify_Chequebook_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@When("^User Click Chequebook Created By button$")
	public void user_Click_Chequebook_Created_By_button() throws Throwable {
	    Thread.sleep(3000);
	    verify_chequebook.clickChequebookCreatedBtn();
	}

	@When("^User Click Chequebook Approver button$")
	public void user_Click_Chequebook_Approver_button() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickApproverBtn();
	}

	@Then("^User Click Chequebook No button$")
	public void user_Click_Chequebook_No_button() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickChequebookNoBtn();
	}

	@Then("^User Click Chequebook Acc\\. Number button$")
	public void user_Click_Chequebook_Acc_Number_button() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickChequebookAccNumberBtn();
	}

	@Then("^User Click Chequebook Project button$")
	public void user_Click_Chequebook_Project_button() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickChequebookProjectBtn();
	}

	@Then("^User Click Chequebook Leafcount button$")
	public void user_Click_Chequebook_Leafcount_button() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickLeafcountBtn();
	}

	@Then("^User Click Chequebook Issue On button$")
	public void user_Click_Chequebook_Issue_On_button() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickIssueOnBtn();
	}

	@Then("^User Click Chequebook Status button$")
	public void user_Click_Chequebook_Status_button() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickStatusBtn();
	}

	@Then("^User Click Crequebook Signatory Authorities button$")
	public void user_Click_Crequebook_Signatory_Authorities_button() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickSignatoryBtn();
	}

	@Then("^User Click Chequebook SN button$")
	public void user_Click_Chequebook_SN_button() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickSNBtn();
	}

	@When("^User collect Last Created Chequebook data and Verify it$")
	public void user_collect_Last_Created_Chequebook_data_and_Verify_it() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.Verify();
		Thread.sleep(20000);
		
	}

	@And("^User Click Chequebook List button$")
	public void userClickChequebookListButton() throws Throwable {
		Thread.sleep(3000);
		verify_chequebook.clickListPage();
	}
}
