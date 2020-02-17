package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class Master_Create_Project_StepDef extends ParentScenario{
	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User Click ProjectBusiness Unit button$")
	public void user_Click_ProjectBusiness_Unit_button() throws Throwable {
		Thread.sleep(3000);
	    master_create_project.clickProjectBusinessBtn();
	    
	}

	@Then("^User Click Add New Project button$")
	public void user_Click_Add_New_Project_button() throws Throwable {
		Thread.sleep(3000);
		master_create_project.clickAddNewProjectBtn();
	}

	@Then("^User Click Select Parent Company$")
	public void user_Click_Select_Parent_Company() throws Throwable {
		Thread.sleep(3000);
		master_create_project.addParentCompany();
	    
	}

	@Then("^User enters \"([^\"]*)\" on Project Name field$")
	public void user_enters_on_Project_Name_field(String arg1) throws Throwable {
		Thread.sleep(5000);
		master_create_project.addProjectName(arg1);
	}

	@Then("^User enters \"([^\"]*)\" on Project Type field$")
	public void user_enters_on_Project_Type_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		master_create_project.addProjectType(arg1);
	}

	@Then("^User enters \"([^\"]*)\" on Project Locatin field$")
	public void user_enters_on_Project_Locatin_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		master_create_project.addProjectLocation(arg1);
	}

	@Then("^User Enters \"([^\"]*)\" on Project Budget Ammount Field$")
	public void user_Enters_on_Project_Budget_Ammount_Field(String arg1) throws Throwable {
		Thread.sleep(3000);
		master_create_project.addProjectBudgetAmmount(arg1);
	}

	@And("^User Click on Budget Duration button$")
	public void userClickOnBudgetDurationButton() throws Throwable {
		Thread.sleep(3000);
		master_create_project.addProjectBudgetDuration();
	}

	@And("^User Click on Budget Duration To button$")
	public void userClickOnBudgetDurationToButton() throws Throwable {
		Thread.sleep(3000);
		master_create_project.addProjectBudgetDurationTo();
	}
	
	
	
	@Then("^User enters \"([^\"]*)\" on Contact Person Name field$")
	public void user_enters_on_Contact_Person_Name_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		master_create_project.addContactPersonName(arg1);
	}

	@Then("^User enters \"([^\"]*)\" on Contact Person No field$")
	public void user_enters_on_Contact_Person_No_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		master_create_project.addContactPersonNo(arg1);
	}

	@Then("^User enters \"([^\"]*)\" on Remarks field$")
	public void user_enters_on_Remarks_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		master_create_project.addRemarks(arg1);
	}

	@Then("^User enters \"([^\"]*)\" on Other Details field$")
	public void user_enters_on_Other_Details_field(String arg1) throws Throwable {
		Thread.sleep(3000);
		master_create_project.addDetails(arg1);
	}

	@Then("^User Click Create Project button$")
	public void user_Click_Create_Project_button() throws Throwable {
		Thread.sleep(3000);
		master_create_project.clickCreateProjectBtn();
	}

	@Then("^User Click Show All Project button$")
	public void user_Click_Show_All_Project_button() throws Throwable {
	    Thread.sleep(3000);
	    master_create_project.clickShowAllProjectBtn();
	}

	@And("^User Click Budget Type button and Select Recurring Budget Type$")
	public void userClickBudgetTypeButtonAndSelectRecurringBudgetType() throws Throwable {
		Thread.sleep(3000);
	    master_create_project.clickBudgetTypeBtn();
	}

	@Then("^User Collect Created New Project Data for Fixed Budget Type$")
	public void userCollectCreatedNewProjectDataForFixedBudgetType() throws Throwable {
		Thread.sleep(10000);
		master_create_project.save_Data_For_New_Project_Fixed();
		Thread.sleep(15000);
	}

	@Then("^User Collect Created New Project Data for Recurring Budget Type$")
	public void userCollectCreatedNewProjectDataForRecurringBudgetType() throws Throwable {
		Thread.sleep(10000);
		master_create_project.save_Data_For_New_Project_Recurring();
		Thread.sleep(15000);
	}

	@And("^User enters \"([^\"]*)\" on Project ID field Fixed$")
	public void userEntersOnProjectIDFieldFixed(String arg1) throws Throwable {
		Thread.sleep(15000);
		master_create_project.addProjectIDFixed(arg1);
		Thread.sleep(20000);
	}

	@And("^User enters \"([^\"]*)\" on Project ID field Recurring$")
	public void userEntersOnProjectIDFieldRecurring(String arg1) throws Throwable {
		Thread.sleep(15000);
		master_create_project.addProjectIDRecurring(arg1);
		Thread.sleep(20000);
	}

	
}
