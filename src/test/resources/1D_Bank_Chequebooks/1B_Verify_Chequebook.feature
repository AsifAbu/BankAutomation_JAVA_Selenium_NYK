#Author: abuasif.nyk@gmail.com

Feature: Verify New Created Chequebook

	Scenario: User goes Chequebook List page
		And User Click Chequebook List button

	Scenario: Verify List page Sort buttons
		When User Click Chequebook Created By button
		When User Click Chequebook Approver button
		Then User Click Chequebook No button
		Then User Click Chequebook Acc. Number button
		Then User Click Chequebook Project button
		Then User Click Chequebook Leafcount button
		Then User Click Chequebook Issue On button
		Then User Click Chequebook Status button
		Then User Click Crequebook Signatory Authorities button
		Then User Click Chequebook SN button
		
	Scenario: Collect data and Verify
		When User collect Last Created Chequebook data and Verify it
		
		