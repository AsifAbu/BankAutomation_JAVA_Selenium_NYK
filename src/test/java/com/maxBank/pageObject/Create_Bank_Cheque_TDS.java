package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Bank_Cheque_TDS extends ParentDriver{

	WebDriver driver = getDriver();
	
	public Create_Bank_Cheque_TDS(WebDriver driver) {
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

	public void clickTdsVdsBtn() {
		driver.findElement(By.xpath("(//div[@class='tile-body'])[9]")).click();
		
	}
	
	public void clickCompanyTDSBtn() {
		driver.findElement(By.xpath("//a[@ng-click='accordion1 = !accordion1']")).click();
	}

	public void setChequeType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='cheque_type']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}
	

	public void setTDSChequeType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='tds_type']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}
	
	public void clickIDRequisitionBtn() {
		driver.findElement(By.xpath("//th[contains(.,'ID Requisition')]")).click();
	}
	
	public void clickAmountBtn() {
		driver.findElement(By.xpath("(//span[@class='box'])[1]")).click();
	}

	public void clickTDSSubmit() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
	}
	
}
