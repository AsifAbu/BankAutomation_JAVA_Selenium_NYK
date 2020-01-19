package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Bank_Logout extends ParentDriver {
	
	WebDriver driver = getDriver();
	
	public Bank_Logout(WebDriver driver) {
		this.driver = driver;
	}
	
	public void Click_Profile_Btn() {
		driver.findElement(By.xpath("//span[@class='username username-hide-on-mobile']")).click();
	}
	
	public void Click_Logout_Btn() {
		driver.findElement(By.xpath("//a[@ng-click='logout()']")).click();
	}
	

}
