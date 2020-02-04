package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Create_Material_Requisition_Payments_Cheque_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Given("^User Click Cheque button$")
	public void user_Click_Cheque_button() throws Throwable {
	    Thread.sleep(3000);
	    create_meterial_requisition_payments.clickChequeBtn();
	}

	@Then("^User Click Create Cheque button$")
	public void user_Click_Create_Cheque_button() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.clickCreatCheckBtn();
	}

	@Then("^User Click Regular BO button$")
	public void user_Click_Regular_BO_button() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.clickRegularBOBtn();
	}

	@Then("^User Click Vendor & Amount Selection button$")
	public void user_Click_Vendor_Amount_Selection_button() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.clickVendorAmountSelectionBtn();
	}

	@Then("^User Click Requisition type field and select \"([^\"]*)\"$")
	public void user_Click_Requisition_type_field_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.clickAndSelectRequiitionType(arg1);
	}

	@Then("^User Click Vendor List field and select \"([^\"]*)\"$")
	public void user_Click_Vendor_List_field_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.clickAndSelectVendor(arg1);
	}

	@Then("^User Click ID Requisition button$")
	public void user_Click_ID_Requisition_button() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.clickIDRequisitionBtn();
	}

	@Then("^User enters \"([^\"]*)\" in first row TDS field$")
	public void user_enters_in_first_row_TDS_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.addTDS(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row VDS field$")
	public void user_enters_in_first_row_VDS_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.addVDS(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row Amount field$")
	public void user_enters_in_first_row_Amount_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.addAmount(arg1);
	}

	@Then("^User Click Bank Select and select \"([^\"]*)\"$")
	public void user_Click_Bank_Select_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.selectBank(arg1);
	}

	@Then("^User Click Account No field and select \"([^\"]*)\"$")
	public void user_Click_Account_No_field_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.setAccountNo(arg1);
	}

	@Then("^User Click select Chequebook and select \"([^\"]*)\"$")
	public void user_Click_select_Chequebook_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.setChequebook(arg1);
	}

	@Then("^User Click Beneficiary Name and select \"([^\"]*)\"$")
	public void user_Click_Beneficiary_Name_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.setBeneficiaryName(arg1);
	}

	@Then("^User Click Cheque Category field and select Bearer Cheque$")
	public void user_Click_Cheque_Category_field_and_select_Bearer_Cheque() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.selectBearerCheque();
	}

	@Then("^User Click Cheque Auditor field and select \"([^\"]*)\"$")
	public void user_Click_Cheque_Auditor_field_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.setChequeAuditor(arg1);
	}

	@Then("^User Click Signatory Authority field and select \"([^\"]*)\"$")
	public void user_Click_Signatory_Authority_field_and_select(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.setSignatoryAuthority(arg1);
	}

	@Then("^User Click Material Requisition Payments Submit button$")
	public void user_Click_Material_Requisition_Payments_Submit_button() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.clickMaterialRequisitionSubmitBtn();
	    
	}

	@Then("^User Collect Total Amount Data and Verify$")
	public void userCollectTotalAmountDataAndVerify() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.collectTotalAmountDataAndVerify();
	}

	@Then("^User Collect Beneficiary Name and Verify$")
	public void userCollectBeneficiaryNameAndVerify() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.CollectBeneficiaryNameAndVerify();
	}

	@Then("^User Collect Bank name and Verify$")
	public void userCollectBankNameAndVerify() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.CollectBankNameAndVerify();
	}

	@Then("^User Collect Account Data and Verify$")
	public void userCollectAccountDataAndVerify() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.CollectAccountDataAndVerify();
	}

	@Then("^User Collect \"([^\"]*)\" Status and Verify$")
	public void userCollectStatusAndVerify(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.statusVerify(arg1);
	}

	@Then("^User Collect TDS Data and Verify$")
	public void userCollectTDSDataAndVerify() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.CollectTDSDataAndVerify();
	}

	@Then("^User Collect VDS Data and Verify$")
	public void userCollectVDSDataAndVerify() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.CollectVDSDataAndVerify();
	}

	@Then("^User Collect Total Amount and Verify$")
	public void userCollectTotalAmountAndVerify() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.CollectTotalAmountAndVerify();
	}

	@When("^User Click Select User button for Auditor$")
	public void userClickSelectUserButtonForAuditor() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.setUserAsAuditor();
	    
	}

	@Then("^User Click Review button$")
	public void userClickReviewButton() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.ClickReviewButton();
	}

	@Then("^User Click Print button$")
	public void userClickPrintButton() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.
	}

	@Then("^User Close New Tab$")
	public void userCloseNewTab() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.
	}

	@Then("^User Click Confirm button$")
	public void userClickConfirmButton() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.
	}

	@Then("^User Click Approve button$")
	public void userClickApproveButton() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.
	}

	@Then("^User Click Deliver button$")
	public void userClickDeliverButton() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.
	}

	@Then("^User enters \"([^\"]*)\" into Cheque Recever name field$")
	public void userEntersIntoChequeReceverNameField(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.
	}

	@Then("^User enters \"([^\"]*)\" into Recever phone Number field$")
	public void userEntersIntoReceverPhoneNumberField(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.
	}

	@Then("^User Click Confirm Delevery button$")
	public void userClickConfirmDeleveryButton() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.
	}

	@Then("^User Click Complete button$")
	public void userClickCompleteButton() throws Throwable {
		Thread.sleep(3000);
	    create_meterial_requisition_payments.
	}
}
