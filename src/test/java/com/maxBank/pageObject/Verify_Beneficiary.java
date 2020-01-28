package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Verify_Beneficiary extends ParentDriver{
	WebDriver driver = getDriver();

	public Verify_Beneficiary(WebDriver driver) {
		this.driver = driver;
	}

	public void clickBeneficiaryNameBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Beneficiary Name')]")).click();
	}

	public void clickBeneficiaryTypeBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Beneficiary Type')]")).click();
		
	}

	public void clickBeneficiaryEmailBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Beneficiary Email')]")).click();
		
	}

	public void clickPhoneNoBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Phone no.')]")).click();
		
	}

	public void clickStatusBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Status')]")).click();
		
	}

	public void clickApproverBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Approver')]")).click();
		
	}

	public void clickVendorNameBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Vendor Name')]")).click();
		
	}

	public void clickCreateOnBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Created On')]")).click();
		
	}

	public void clickSLNoBtn() {
		driver.findElement(By.xpath("//th[contains(.,'SL No')]")).click();
		
	}

	public void collectTDSData() {
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[3]")).clear();
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[3]")).sendKeys("tds");
		String BName = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[2]")).getText();		
		Assert.assertEquals(BName, "AsifBenificiary-TDS");
	}

	public void collectNonVendorData() throws InterruptedException {
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[3]")).clear();
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[3]")).sendKeys("non-vendor");
		Thread.sleep(4000);
		String BName2 = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[2]")).getText();		
		Assert.assertEquals(BName2, "AsifBenificiary-NonVendor");
	}

	public void collectVendorData() throws InterruptedException {
		driver.findElement(By.xpath("(//option[@value='='])[3]")).click();
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[3]")).clear();
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[3]")).sendKeys("vendor");
		Thread.sleep(4000);
		String BName3 = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[2]")).getText();		
		Assert.assertEquals(BName3, "AsifBenificiary-Vendor");
	}

	public void clickBeneficiaryListBtn() {
		driver.findElement(By.xpath("//a[contains(.,'Beneficiary Lists')]")).click();
		
	}
	
	

}
