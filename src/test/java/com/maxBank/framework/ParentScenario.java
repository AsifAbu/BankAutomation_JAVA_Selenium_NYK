package com.maxBank.framework;

import org.openqa.selenium.WebDriver;

import com.maxBank.pageObject.Bank_Logout;
import com.maxBank.pageObject.Company_Verify;
//import com.maxBank.pageObject.Bank_Dashboard;
import com.maxBank.pageObject.Login;
import com.maxBank.pageObject.Master_Create_Company;
import com.maxBank.pageObject.Master_Create_Project;
import com.maxBank.pageObject.Master_Login;
import com.maxBank.pageObject.Project_Verify;

public class ParentScenario extends ParentDriver{
	
	WebDriver driver = getDriver();
	
	public Login LogIn;
	//public Bank_Dashboard bank_dashboard;
	public Bank_Logout bank_logout;
	public Master_Login master_login;
	public Master_Create_Company master_create_company;
	public Company_Verify company_verify;
	public Master_Create_Project master_create_project;
	public Project_Verify project_verify;
	
	public void startBrowser() {
		
		LogIn = new Login(driver);
		//bank_dashboard = new Bank_Dashboard(driver);
		bank_logout = new Bank_Logout(driver);
		master_login = new Master_Login(driver);
		master_create_company = new Master_Create_Company(driver);
		company_verify = new Company_Verify(driver);
		master_create_project = new Master_Create_Project(driver);
		project_verify = new Project_Verify(driver);
		
	}
	 
	    public void navigateTo() {
	    	driver.navigate().to("https://bank.jomakhata.com");
	    }
	    
	    
	    public void navigateToMasterModule() {
	    	driver.navigate().to("https://login.jomakhata.com/login/index/aHR0cHM6Ly9tYXN0ZXIuam9tYWtoYXRhLmNvbS8%3D");
	    }

}
