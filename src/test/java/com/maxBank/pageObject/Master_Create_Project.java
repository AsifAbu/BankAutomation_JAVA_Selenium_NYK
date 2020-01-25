package com.maxBank.pageObject;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.UUID;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Master_Create_Project extends ParentDriver{
	WebDriver driver = getDriver();

	public Master_Create_Project(WebDriver driver) {
		this.driver = driver;
	}

	public void clickProjectBusinessBtn() {
		driver.findElement(By.xpath("(//a[@class='nav-link nav-toggle'])[3]")).click();
	}
	
	public void clickAddNewProjectBtn() {
		driver.findElement(By.xpath("//a[@ui-sref='projectCreate']")).click();
	}
	
	public void addParentCompany() {
		driver.findElement(By.xpath("//select[contains(.,'Select')]")).click();
		driver.findElement(By.xpath("//option[contains(.,'MAX Infrastructure Limited')]")).click();
		
	}

	public void addProjectName(String arg1) {
		arg1 = UUID.randomUUID().toString();
		driver.findElement(By.xpath("//input[@ng-model='createProject.projectName']")).sendKeys(arg1);
		
	}

	public void addProjectID(String arg1) {
		arg1 = UUID.randomUUID().toString();
		driver.findElement(By.xpath("//input[@ng-model='createProject.projectId']")).sendKeys(arg1);
		
	}

	public void addProjectType(String arg1) {
		driver.findElement(By.xpath("//input[@ng-model='createProject.projectType']")).sendKeys(arg1);
		
	}

	public void addProjectLocation(String arg1) {
		driver.findElement(By.xpath("//input[@ng-model='createProject.projectLocation']")).sendKeys(arg1);
		
	}

	public void addProjectBudgetAmmount(String arg1) {
		driver.findElement(By.xpath("//input[@ng-model='createProject.amount']")).sendKeys(arg1);
		
	}

	public void addProjectBudgetDuration() {
		driver.findElement(By.xpath("//input[@id='start_date']")).click();
		driver.findElement(By.xpath("(//td[@class='day'])[2]")).click();
	}

	public void addProjectBudgetDurationTo() {
		driver.findElement(By.xpath("//input[@id='end_date']")).click();
		driver.findElement(By.xpath("(//td[@class='day'])[25]")).click();
	}

	public void addContactPersonName(String arg1) {
		driver.findElement(By.xpath("//input[@ng-model='createProject.contactPersonName']")).sendKeys(arg1);
		
	}

	public void addContactPersonNo(String arg1) {
		driver.findElement(By.xpath("//input[@ng-model='createProject.contactPersonNo']")).sendKeys(arg1);
		
	}

	public void addRemarks(String arg1) {
		driver.findElement(By.xpath("//textarea[@ng-model='createProject.remarks']")).sendKeys(arg1);
		
	}

	public void addDetails(String arg1) {
		driver.findElement(By.xpath("//textarea[@ng-model='createProject.details']")).sendKeys(arg1);
		
	}

	public void clickCreateProjectBtn() {
		driver.findElement(By.xpath("//button[contains(.,('Create Project'))]")).click();
		
	}

	public void clickShowAllProjectBtn() {
		driver.findElement(By.xpath("//a[@ui-sref='projectList']")).click();
		
	}

	public void clickBudgetTypeBtn() {
		driver.findElement(By.xpath("//select[@ng-model='createProject.budgetType']")).click();
		driver.findElement(By.xpath("//option[@label='Recurring']")).click();
		
	}

	public void save_Data_For_New_Project_Fixed() throws FileNotFoundException, UnsupportedEncodingException{
		String getProjectCode = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[2]/div/div")).getText();
		String getProjectName = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[3]/div/div")).getText();
		
		PrintWriter writer = new PrintWriter("LocalStorage/NewProjectDataFixed.txt", "UTF-8");
		writer.println(getProjectCode+"/"+getProjectName);
		writer.close();
		
	}
	public void save_Data_For_New_Project_Recurring() throws FileNotFoundException, UnsupportedEncodingException{
		String getProjectCode = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[2]/div/div")).getText();
		String getProjectName = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[3]/div/div")).getText();
		
		PrintWriter writer = new PrintWriter("LocalStorage/NewProjectDataRecurring.txt", "UTF-8");
		writer.println(getProjectCode+"/"+getProjectName);
		writer.close();
		
	}
	
	
	
	
	
	
}
