package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Manage_Bank extends ParentDriver{

	WebDriver driver = getDriver();
	
	public Manage_Bank(WebDriver driver) {
		this.driver = driver;
	}
	
	//Scroll down
	public void scrollDown() {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,800)", "");
    }
	
	
	//Scroll Up :
    public void scrollUp() {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,-800)", "");
    }

	public void clickBankBtn() {
		driver.findElement(By.xpath("(//a[contains(.,'Banks')])[1]")).click();
		
	}

	public void clickManageBankBtn() {
		driver.findElement(By.xpath("//a[contains(.,'Manage Banks')]")).click();
	}

	public void addBankName(String arg1) {
		driver.findElement(By.xpath("(//input[@name='bank_name'])[1]")).sendKeys(arg1);
	}

	public void addBankFullName(String arg1) {
		driver.findElement(By.xpath("(//input[@name='bank_name_full'])[1]")).sendKeys(arg1);
	}

	public void verify() throws InterruptedException {
		driver.findElement(By.xpath("//input[@ng-model='searchBanks']")).sendKeys("testingBankName");
		Thread.sleep(2000);
		String Bname = driver.findElement(By.xpath("(//td[@class='ng-binding'])[2]")).getText();
		Thread.sleep(2000);
		String BfullName = driver.findElement(By.xpath("(//td[@class='ng-binding'])[3]")).getText();
		Thread.sleep(2000);
		Assert.assertEquals(Bname, "testingBankName");
		Thread.sleep(2000);
		Assert.assertEquals(BfullName, "testingFullBankName");
		
	}

	public void deleteBank() {
		driver.findElement(By.xpath("(//a[@ng-click='bankDelete(value.id_banks)'])[1]")).click();
	}
    
    
	

}
