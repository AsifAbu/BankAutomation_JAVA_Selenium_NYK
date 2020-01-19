package com.maxBank.framework;

import org.openqa.selenium.WebDriver;

import com.maxBank.pageObject.Bank_Logout;
//import com.maxBank.pageObject.Bank_Dashboard;
import com.maxBank.pageObject.Login;
import com.maxBank.pageObject.Master_Login;

public class ParentScenario extends ParentDriver{
	
	WebDriver driver = getDriver();
	
	public Login LogIn;
	//public Bank_Dashboard bank_dashboard;
	public Bank_Logout bank_logout;
	public Master_Login master_login;
	
	
	public void startBrowser() {
		
		LogIn = new Login(driver);
		//bank_dashboard = new Bank_Dashboard(driver);
		bank_logout = new Bank_Logout(driver);
		master_login = new Master_Login(driver);
		
		
	    }
	 
	    public void navigateTo() {
	    	driver.navigate().to("https://bank.jomakhata.com");
	    }
	    
	    
	    public void navigateToMasterModule() {
	    	driver.navigate().to("https://login.jomakhata.com/login/index/aHR0cHM6Ly9tYXN0ZXIuam9tYWtoYXRhLmNvbS8%3D");
	    }

}
