package com.maxBank.pageObject;

import java.io.FileNotFoundException;
//import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Bank_Create_Beneficiary extends ParentDriver{
	WebDriver driver = getDriver();
	
	public Bank_Create_Beneficiary(WebDriver driver) {
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
	
	public void clickBeneficiaryBtn() {
		driver.findElement(By.xpath("//span[contains(.,'Beneficiaries')]")).click();
	}

	public void clickCreateBeneficiaryBtn() {
		driver.findElement(By.xpath("(//span[contains(.,'Create Beneficiary')])[1]")).click();
	}

	public void clickExistingBtn() {
		driver.findElement(By.xpath("//input[@ng-click='get_vendors(beneficiary.vendor_name)']")).click();
		
	}
	
//	public void beneficiaryInsertIntoTEXT (String arg1) throws FileNotFoundException, UnsupportedEncodingException 
//	{
//		String a = arg1.toString();
//		System.out.println("Beneficiary Name is(Outside): "+a);
//		if(a == "AsifBenificiary-Vendor".toString())
//		{
//			System.out.println("Beneficiary Name is(Inside): "+a);
//			PrintWriter writer = new PrintWriter("LocalStorage/NewBeneficiaryVendorType.txt", "UTF-8");
//			writer.println(a);
//			writer.close();
//			
//		}
//		if(a == "AsifBenificiary-NonVendor".toString())
//		{
//			System.out.println("Beneficiary Name is(Inside): "+a);
//			PrintWriter writer = new PrintWriter("LocalStorage/NewBeneficiaryNonVendorType.txt", "UTF-8");
//			writer.println(a);
//			writer.close();
//			
//		}
//		if(a == "AsifBenificiary-TDS".toString())
//		{
//			System.out.println("Beneficiary Name is(Inside): "+a);
//			PrintWriter writer = new PrintWriter("LocalStorage/NewBeneficiaryTDSType.txt", "UTF-8");
//			writer.println(a);
//			writer.close();
//			
//		}
//	}
	
	public void selectExistingVendor() {
		driver.findElement(By.xpath("//li[contains(.,'Gazipur Polish Store')]")).click();
		scrollDown();
	}
	
	public void selectApprover(String arg1) {
		driver.findElement(By.xpath("(//select[@name='approved_by'])//option[contains(.,'"+arg1+"')]")).click();
		scrollDown();
		
	}

	public void addBeneficiaryName(String arg1) throws FileNotFoundException, UnsupportedEncodingException {
		driver.findElement(By.xpath("//input[@name='beneficiary_name']")).sendKeys(arg1);
		//beneficiaryInsertIntoTEXT(arg1);
	}

	public void addBeneficiaryEmail(String arg1) {
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(arg1);		
	}

	public void addBeneficiaryPhone(String arg1) {
		driver.findElement(By.xpath("//input[@name='phone']")).sendKeys(arg1);	
		
	}

	public void clickAddBankAccountBtn() {
		driver.findElement(By.xpath("//button[contains(.,'Add beneficiary Bank Account')]")).click();
		scrollDown();
	}

	public void clickRemoveBankAccountSmall() {
		scrollUp();
		driver.findElement(By.xpath("(//a[contains(.,'Remove')])[1]")).click();
		
	}

	public void clickRemoveBankAccountSmallRed() {
		driver.findElement(By.xpath("//button[contains(.,'Remove beneficiary Bank Account')]")).click();
		
	}

	public void clickSelectBank() {
		driver.findElement(By.xpath("(//select[@ng-model='beneficiary.beneficiary_accounts[key].id_banks'])[1]")).click();
		driver.findElement(By.xpath("//option[contains(.,'UCBL')]")).click();
	}

	public void addBranchname(String arg1) {
		driver.findElement(By.xpath("//input[@name='branch_name_0']")).sendKeys(arg1);
		
	}

	public void addAccountNumber(String arg1) {
		driver.findElement(By.xpath("//input[@name='account_number_0']")).sendKeys(arg1);
		
	}

	public void clickSubmit() {
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		scrollUp();
		scrollUp();
		
	}

	public void clickBeneficiaryType() {
		driver.findElement(By.xpath("//select[@name='beneficiary_type']")).click();
		
	}

	public void selectNonVendor() {
		driver.findElement(By.xpath("//select[@name='beneficiary_type']")).click();
		driver.findElement(By.xpath("//option[contains(.,'Non Vendor')]")).click();
		
	}

	public void selectTDS() {
		driver.findElement(By.xpath("//option[contains(.,'TDS')]")).click();
		
	}
	
	
}
