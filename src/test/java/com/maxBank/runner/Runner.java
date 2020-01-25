package com.maxBank.runner;

import java.io.File;
import java.io.IOException;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/1B_Master/1E_Project_Verify.feature",
		glue = "com.maxBank.glue",
		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"},
		format = {"pretty","json:target/cucumber.json","html:target/TestSuite_1","junit:target/cucumber-features-A-report.xml"}
		)             
public class Runner extends AbstractTestNGCucumberTests {
	@AfterClass
	public static void teardown() throws IOException{
		Reporter.loadXMLConfig(new File("src/test/resources/extentreports/extent-config.xml"));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("Machine", 	"Windows 10" +" (" + "64 Bit" + ")");
	    Reporter.setSystemInfo("Selenium", "3.0.1");
	    Reporter.setSystemInfo("Maven", "3.5.2");
	    Reporter.setSystemInfo("Java Version", "1.8.0_121");
        Reporter.setTestRunnerOutput("Max Bank Managment Testing V2");
        
        Reporter.addScreenCaptureFromPath("image/png");
    }
}
