package com.maxBank.pageObject;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Company_Verify extends ParentDriver{
	WebDriver driver = getDriver();

	public Company_Verify(WebDriver driver) {
		this.driver = driver;
	}
	String CompanyCode, CompanyName;
	public void clickCompanyListBtn() throws InterruptedException {
		driver.findElement(By.xpath("(//a[contains(.,'Company')])[1]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[contains(.,'Company List')]")).click();
		
	}

	public void verify() throws IOException, InterruptedException{
		String ComName = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/div/table/tbody/tr[1]/td[2]")).getText();
		Thread.sleep(2000);
		String ComCode = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/div/table/tbody/tr[1]/td[3]")).getText();
		Thread.sleep(2000);
		Assert.assertEquals(ComCode.trim(), CompanyCode);
		Thread.sleep(2000);
		Assert.assertEquals(ComName.trim(), CompanyName);
		Thread.sleep(2000);
		System.out.println("Company Code: "+CompanyCode);
		Thread.sleep(2000);
		System.out.println("Company Name: "+CompanyName);
	}

	public void collectRecentCreatedCompanyData() throws IOException, InterruptedException {
		String data = FileUtils.readFileToString(new File("LocalStorage/NewCompanyData.txt"), "UTF-8");
		Thread.sleep(2000);
		String[] parts = data.trim().split("/");
		CompanyCode = parts[0].trim();
		Thread.sleep(2000);
		CompanyName = parts[1].trim();
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[2]")).sendKeys(CompanyName);
		
	}

}
