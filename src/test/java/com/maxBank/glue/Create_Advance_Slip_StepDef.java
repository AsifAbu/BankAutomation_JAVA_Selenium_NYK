package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;

public class Create_Advance_Slip_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
}