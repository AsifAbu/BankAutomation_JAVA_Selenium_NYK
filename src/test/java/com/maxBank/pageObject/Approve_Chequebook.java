package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Approve_Chequebook extends ParentDriver{
	WebDriver driver = getDriver();
	
	public Approve_Chequebook(WebDriver driver) {
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

	public void clickApproveBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[@ng-click='approve_others(value.id,value.type)']")).click();
		scrollUp();
		Thread.sleep(1000);
		scrollUp();
		Thread.sleep(1000);
		scrollUp();
		Thread.sleep(1000);
	}

	public void verifyStatus(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("(//input[@ng-change='getallData(true)'])[5]")).sendKeys("11111111");
		Thread.sleep(8000);
		String status = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[9]")).getText();
		Assert.assertEquals(status, arg1);
		
	}

	public void clickDeniedBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[@ng-click='deny_others(value.id,value.type)']")).click();
		scrollUp();
		Thread.sleep(1000);
		scrollUp();
		Thread.sleep(1000);
		scrollUp();
		Thread.sleep(1000);
		
	}
}
