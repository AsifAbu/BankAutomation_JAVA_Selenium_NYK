package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Material_Purchase_Bill_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click Purchase button$")
	public void user_Click_Purchase_button() throws Throwable {
		Thread.sleep(3000);
	    create_material_purchase_bill.clickPurchaseBillBtn();
	}

	@Then("^User Click Purchase Bill type field and select \"([^\"]*)\"$")
	public void user_Click_Purchase_Bill_type_field_and_select(String arg1) throws Throwable {
	    Thread.sleep(3000);
	    create_material_purchase_bill.setPurchaseBillType(arg1);
	}

	@Then("^User Click Bill SL button$")
	public void user_Click_Bill_SL_button() throws Throwable {
		Thread.sleep(3000);
	    create_material_purchase_bill.clickBillSLBtn();
	}

	@Then("^User Click Material Purchase Bill Submit button$")
	public void user_Click_Material_Purchase_Bill_Submit_button() throws Throwable {
		Thread.sleep(3000);
	    create_material_purchase_bill.clickMaterialPurchaseBillSubmitBtn();
	}
	
	@Then("^User enters \"([^\"]*)\" in first row TDS field in Purchase Bill$")
	public void user_enters_in_first_row_TDS_field_in_Purchase_Bill(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_material_purchase_bill.addTDS(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row VDS field Purchase Bill$")
	public void user_enters_in_first_row_VDS_field_Purchase_Bill(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_material_purchase_bill.addVDS(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in first row Amount field Purchase Bill$")
	public void user_enters_in_first_row_Amount_field_Purchase_Bill(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_material_purchase_bill.addBillAmount(arg1);
	}
}
