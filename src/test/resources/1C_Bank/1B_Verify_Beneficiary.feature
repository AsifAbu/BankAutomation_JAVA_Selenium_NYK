#Author: abuasif.nyk@gmail.com

Feature: Verify New Created Beneficiary

	Scenario: Verify List page Sort button
		When User Click Beneficiary List button
		When User Click Beneficiary Name button
		Then User Click Benecifiary Type button
		Then User Click Benecificiary Email button
		Then User Click Phone No button
		Then User Click Status button
		Then User Click Approver button
		Then User Click Vendor Name button
		Then User Click Create On button
		Then User Click SL No button
		
	Scenario: Collect data and Verify
		When User collect Last TDS data and Verify it
		Then User collect Second Last NonVendor data and Verify it
		Then User collect Third last Vendor data and Verify it
		