package com.maxBank.pageObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

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
	String ProjectNameDemo;
	public void addProjectName(String arg1) {
		arg1 = UUID.randomUUID().toString();
		ProjectNameDemo = arg1;
		driver.findElement(By.xpath("//input[@ng-model='createProject.projectName']")).sendKeys(ProjectNameDemo);
		
	}
	String aa = "True";
	public void addProjectIDFixed(String arg1) throws FileNotFoundException, UnsupportedEncodingException, InterruptedException {
		String id = UUID.randomUUID().toString();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@ng-model='createProject.projectId']")).sendKeys(id);
		Thread.sleep(2000);
		PrintWriter writer = new PrintWriter("LocalStorage/NewProjectDataFixed.txt", "UTF-8");
		Thread.sleep(2000);
		writer.println(id+"/"+ProjectNameDemo);
		Thread.sleep(2000);
		writer.close();
		
		System.out.println(aa);
		
		
	}
	public void addProjectIDRecurring(String arg1) throws FileNotFoundException, UnsupportedEncodingException, InterruptedException {
		String id = UUID.randomUUID().toString();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@ng-model='createProject.projectId']")).sendKeys(id);
		Thread.sleep(2000);
		PrintWriter writer = new PrintWriter("LocalStorage/NewProjectDataRecurring.txt", "UTF-8");
		Thread.sleep(2000);
		writer.println(arg1+"/"+ProjectNameDemo);
		Thread.sleep(2000);
		writer.close();
		System.out.println(aa);
		
		
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

	public void save_Data_For_New_Project_Fixed() throws IOException, FileNotFoundException, UnsupportedEncodingException, InterruptedException{		
		//String PCodeSaved;
		String PNameSaved;
		
		String data = FileUtils.readFileToString(new File("LocalStorage/NewProjectDataFixed.txt"), "UTF-8");
		Thread.sleep(2000);
		String[] parts = data.trim().split("/");
		Thread.sleep(2000);
		//PCodeSaved = parts[0].trim(); //previously saved in text when created
		PNameSaved = parts[1].trim();
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//input[@ng-change='getallData(true)'])[4]")).sendKeys(PNameSaved);
		
		//data collect from the list page
		String ProjectNameInList = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[3]/div/div")).getText();
		Thread.sleep(2000);
		//String ProjectCodeInList = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[2]/div/div")).getText();
		
		//assert here of list data vs saved data in Master Module
		Assert.assertEquals(PNameSaved, ProjectNameInList.trim());
		//Assert.assertEquals(PCodeSaved, ProjectCodeInList.trim());
				
	}
	public void save_Data_For_New_Project_Recurring() throws IOException, FileNotFoundException, UnsupportedEncodingException, InterruptedException{
				
		//String ProjectCodeSaved;
		String ProjectNameSaved;
		
		String data = FileUtils.readFileToString(new File("LocalStorage/NewProjectDataRecurring.txt"), "UTF-8");
		Thread.sleep(2000);
		String[] parts = data.trim().split("/");
		//ProjectCodeSaved = parts[0].trim(); //previously saved in text when created
		Thread.sleep(2000);
		ProjectNameSaved = parts[1].trim();
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//input[@ng-change='getallData(true)'])[4]")).sendKeys(ProjectNameSaved);
		Thread.sleep(2000);
		//data collect from the list page
		String ProjectNameInList = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[3]/div/div")).getText();
		//String ProjectCodeInList = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div/div[2]/div/div/table/tbody/tr[1]/td[2]/div/div")).getText();
		Thread.sleep(2000);
		//assert here of list data vs saved data in Master Module
		Assert.assertEquals(ProjectNameSaved, ProjectNameInList);
		//Assert.assertEquals(ProjectCodeSaved, ProjectCodeInList);
		
	}
	
	
	
	
	
	
}
