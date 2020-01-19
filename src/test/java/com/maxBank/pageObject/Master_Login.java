package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Master_Login extends ParentDriver{
	
	WebDriver driver = getDriver();

	public Master_Login(WebDriver driver) {
		this.driver = driver;
	}

	public void AddUserName(String arg1) {
		driver.findElement(By.xpath("//input[@id='Username']")).sendKeys(arg1);
	}
	
	public void AddPassword(String arg1) {
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(arg1);
	}
	
	public void Click_Master_Login() {
		driver.findElement(By.xpath("//button[contains(.,'Login')]")).click();
	}

	public void altmsgMaster(String arg1) {
		String Actual = driver.findElement(By.xpath("//span[@id='loginmessage']")).getText();
		Assert.assertEquals(arg1, Actual);
		
	}

}
