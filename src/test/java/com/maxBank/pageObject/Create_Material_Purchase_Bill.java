package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Material_Purchase_Bill extends ParentDriver{
	WebDriver driver = getDriver();
	
	public Create_Material_Purchase_Bill(WebDriver driver) {
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
    
	public void clickPurchaseBillBtn() {
		driver.findElement(By.xpath("//a[contains(.,'Purchase Bill')]")).click();
	}

	public void setPurchaseBillType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='purchase_bill_type']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}

	public void clickBillSLBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Bill SL.')]")).click();
		
	}

	public void clickMaterialPurchaseBillSubmitBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
	}

	public void addTDS(String arg1) {
		
		driver.findElement(By.xpath("//input[@id='input_matpb_tds_masked_0']")).sendKeys(arg1);
	}

	public void addVDS(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_matpb_vds_masked_0']")).sendKeys(arg1);
		
	}

	public void addBillAmount(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_matpb_masked_0']")).sendKeys(arg1);
		
	}
}
