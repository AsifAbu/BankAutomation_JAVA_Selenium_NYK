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
	public void clickCompanyListBtn() {
		driver.findElement(By.xpath("(//a[contains(.,'Company')])[1]")).click();
		driver.findElement(By.xpath("//a[contains(.,'Company List')]")).click();
		
	}

	public void verify() throws IOException, InterruptedException{
		String ComCode = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/div/table/tbody/tr[1]/td[2]")).getText();
		String ComName = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/div/table/tbody/tr[1]/td[3]")).getText();
		
		Assert.assertEquals(ComCode, CompanyCode);
		Assert.assertEquals(ComName, CompanyName);
		
		
	}

	public void collectRecentCreatedCompanyData() throws IOException, InterruptedException {
		String data = FileUtils.readFileToString(new File("LocalStorage/NewCompanyData.txt"), "UTF-8");
		String[] parts = data.trim().split("/");
		CompanyCode = parts[0].trim();
		CompanyName = parts[1].trim();
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[2]")).sendKeys(CompanyName);
		
	}
}
