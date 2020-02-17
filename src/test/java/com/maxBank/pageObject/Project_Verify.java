package com.maxBank.pageObject;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Project_Verify extends ParentDriver{
	WebDriver driver = getDriver();

	public Project_Verify(WebDriver driver) {
		this.driver = driver;
	}
	String ProjectCodeFixed, ProjectNameFixed;
	String ProjectCodeRecurring, ProjectNameRecurring;

	public void clickProjectListBtn() {
		driver.findElement(By.xpath("(//a[contains(.,'Projects')])[1]")).click();
		driver.findElement(By.xpath("//a[contains(.,'Projects List')]")).click();
		
	}

	public void collectRecentCreatedProjectDataFixed() throws IOException, InterruptedException {
		String data = FileUtils.readFileToString(new File("LocalStorage/NewProjectDataFixed.txt"), "UTF-8");
		Thread.sleep(2000);
		String[] parts = data.trim().split("/");
		Thread.sleep(2000);
		ProjectCodeFixed = parts[0].trim();
		Thread.sleep(2000);
		ProjectNameFixed = parts[1].trim();
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[2]")).sendKeys(ProjectNameFixed);
		
	}

	public void verifyFixed() throws IOException, InterruptedException{
		String ProjName = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[2]")).getText();
		//String ProjCode = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[3]")).getText();
		Thread.sleep(2000);
		//Assert.assertEquals(ProjCode.trim(), ProjectCodeFixed);
		Assert.assertEquals(ProjName.trim(), ProjectNameFixed);
	}
	
	
	public void collectRecentCreatedProjectDataRecurring() throws IOException, InterruptedException {
		String data = FileUtils.readFileToString(new File("LocalStorage/NewProjectDataRecurring.txt"), "UTF-8");
		Thread.sleep(2000);
		String[] parts = data.trim().split("/");
		Thread.sleep(2000);
		ProjectCodeRecurring = parts[0].trim();
		Thread.sleep(2000);
		ProjectNameRecurring = parts[1].trim();
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[2]")).sendKeys(ProjectNameRecurring);
		
	}

	public void verifyRecurring() throws IOException, InterruptedException{
		String ProjName = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[2]")).getText();
		//String ProjCode = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/div[2]/table/tbody/tr[1]/td[3]")).getText();
		Thread.sleep(2000);
		//Assert.assertEquals(ProjCode.trim(), ProjectCodeRecurring);
		Assert.assertEquals(ProjName.trim(), ProjectNameRecurring);
		
	}
}
