package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Verify_Chequebook extends ParentDriver{
	WebDriver driver = getDriver();

	public Verify_Chequebook(WebDriver driver) {
		this.driver = driver;
	}

	public void clickChequebookCreatedBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Created By')]")).click();
		
	}

	public void clickApproverBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Approver')]")).click();
		
	}

	public void clickChequebookNoBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Chequebook No.')]")).click();
		
	}

	public void clickChequebookAccNumberBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Acc. Number')]")).click();
		
	}

	public void clickChequebookProjectBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Project')]")).click();
		
	}

	public void clickLeafcountBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Leaf Count')]")).click();
		
	}

	public void clickIssueOnBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Issued On')]")).click();
		
	}

	public void clickStatusBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Status')]")).click();
		
	}

	public void clickSignatoryBtn() {
		driver.findElement(By.xpath("//th[contains(.,'Signatory Authorities')]")).click();
		
	}

	public void clickSNBtn() {
		driver.findElement(By.xpath("//th[contains(.,'SN')]")).click();
		
	}
	
	public void Verify() {
		String expectedChequebookNo = "11111111";
		String expectedAccNumber = "0210589438";
		String getChequebookNo = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[4]/div/div")).getText().trim();
		String getAccNumber = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[5]/div/div")).getText().trim();
		
		Assert.assertEquals(getChequebookNo, expectedChequebookNo);//Chequebook No
		
		Assert.assertEquals(getAccNumber, expectedAccNumber);//Acc Number
		
		
	}

	public void clickListPage() {
		driver.findElement(By.xpath("//a[contains(.,'Chequebook List')]")).click();
		
	}
	
	
}
