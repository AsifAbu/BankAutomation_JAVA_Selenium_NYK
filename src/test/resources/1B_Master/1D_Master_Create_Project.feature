#Author: abuasif.nyk@gmail.com

Feature: User going to Create New Project
	Scenario: Create New Project of Fixed Budget Type
		Then User Click ProjectBusiness Unit button
		Then User Click Add New Project button
		Then User Click Select Parent Company 
		
	Scenario: Create New Project of Fixed Budget Type	
		And User enters "" on Project Name field
		And User enters "" on Project ID field
		And User enters "Random" on Project Type field
		And User enters "Rajshahi" on Project Locatin field
		And User Enters "200" on Project Budget Ammount Field		
		And User Click on Budget Duration button
		And User Click on Budget Duration To button
		And User enters "Asif" on Contact Person Name field
		And User enters "01799999999" on Contact Person No field
		And User enters "Not Applicable for automation" on Remarks field
		And User enters "Not Applicable for automation" on Other Details field
		Then User Click Create Project button
		Then User Click Show All Project button
		Then User Collect Created New Project Data for Fixed Budget Type
		
	Scenario: Create New Project of Recurring Budget Type	
		Then User Click Add New Project button
		Then User Click Select Parent Company
		And User enters "" on Project Name field
		And User enters "" on Project ID field
		And User enters "Random" on Project Type field
		And User Click Budget Type button and Select Recurring Budget Type 
		And User enters "Rajshahi" on Project Locatin field
		And User enters "Asif" on Contact Person Name field
		And User enters "01799999999" on Contact Person No field
		And User enters "Not Applicable for automation" on Remarks field
		And User enters "Not Applicable for automation" on Other Details field
		Then User Click Create Project button
		Then User Click Show All Project button
		Then User Collect Created New Project Data for Recurring Budget Type
		
	
	