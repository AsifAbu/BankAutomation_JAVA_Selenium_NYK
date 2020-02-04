package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Approve_Beneficiary extends ParentDriver{
	WebDriver driver = getDriver();
	
	public Approve_Beneficiary(WebDriver driver) {
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

	public void setUserAsApprover() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Creator at')]")).click();     //click the red button
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@ng-model='roleSearch']")).sendKeys("cda");   //search with cda
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(.,'Approver at CDA')]")).click();    //select approver role
		Thread.sleep(3000);
		
		
	}

	public void clickApproveBtn() throws InterruptedException {
		driver.findElement(By.xpath("(//input[@ng-model='filter.columns[value.key][0].filterValue'])[13]")).sendKeys("AsifBenificiary-TDS");
		Thread.sleep(4000);
		driver.findElement(By.xpath("(//button[@ng-click='approve_others(value.id,value.type)'])[1]")).click();
		Thread.sleep(1000);
	}

	public void verifyDashboardPage() throws InterruptedException {
		driver.findElement(By.xpath("//a[contains(.,'Dashboard')]")).click();
		String inPage = driver.getCurrentUrl();
		String expectedPage = "https://bank.jomakhata.com/#/dashboard";
		Assert.assertEquals(inPage, expectedPage);
		Thread.sleep(3000);
		scrollDown();
		Thread.sleep(3000);
		scrollDown();
	}

	public void setUserAsCreator() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Approver at')]")).click();     //click the red button
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(.,'Creator at CDA')]")).click();    //select approver role
		Thread.sleep(3000);
	}

	public void checkStatusActive(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[2]")).sendKeys("AsifBenificiary-TDS");
		Thread.sleep(8000);
		String status = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[6]")).getText();
		Assert.assertEquals(status, arg1);
	}

	public void clickDenaidBtn() throws InterruptedException {
		driver.findElement(By.xpath("(//input[@ng-model='filter.columns[value.key][0].filterValue'])[13]")).sendKeys("AsifBenificiary-TDS");
		Thread.sleep(4000);
		driver.findElement(By.xpath("(//button[@ng-click='deny_others(value.id,value.type)'])[1]")).click();
		Thread.sleep(1000);
		scrollUp();
		Thread.sleep(1000);
		scrollUp();
		
	}
    
    
}
