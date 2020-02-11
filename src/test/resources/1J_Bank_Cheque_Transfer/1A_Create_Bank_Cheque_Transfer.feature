#Author: abuasif.nyk@gmail.com

Feature: User create Transfer Cheque

	Scenario: Successful Login with Valid Credentials
		Given User is on Login page
		When User enters "erp.maxgroup@gmail.com" into Username field
    And User enters "123" into Password field
    And User Click LogIn button
    And User Login Successfully

	Scenario: Select Role
		Then User select Creator at CDA
		Then click Confirm button

	Scenario: User going create Cheque page
		And User Click Cheque button
		Then User Click Create Cheque button
		Then User Click Transfer button
		Then User Click Transfer Selection and Amount Selection button
		
#For Inter Buisness Unit Transfer Type
	Scenario: For Inter Buisness Unit Transfer Type
		Then User Click Transfer type field and select "Inter Business Unit Transfer" 
		Then User Click Transfer payment type field and Select "Transfer By Cheque"
		Then User enters "5" into Amount field
	
		Scenario: User Fillup Bank Information section
			Then User Click Bank Select and select "Trust Bank"
			Then User Click Account No field and select "0210589481"
			Then User Select Project To and select "KWASA"
			Then User Click Bank To and select "NCCBL"
			Then User Click Bank To Account No and select "00050210018475"	
			
		Scenario: User Fillup Cheque Information section
			Then User Click select Chequebook and select "1122"
			Then User Click Beneficiary Name and select "Asad & Co"
			Then User Click Cheque Category field and select Bearer Cheque
			Then User Click Cheque Auditor field and select "ERP Admin"
			Then User Click Signatory Authority field and select "ERP Admin"
			Then User Click Transfer Submit button
			
		Scenario: Verify Data of Transfer Cheque
			Then User Collect Total Amount Data and Verify
			Then User Collect Beneficiary Name and Verify
			Then User Collect Bank name and Verify
			Then User Collect Account Data and Verify
			Then User Collect "Check Request Created" Status and Verify
		
		Scenario: Approve Transfer Cheque
			When User Click Select User button for Auditor
			#1scrollDown
			Then User Click Review button
			#1Scrollup
			Then User Collect "Cheque Request Reviewed" Status and Verify
			When User Click Select User button for Creator
			#1scrollDown
			Then User Click Print button
			Then User Close New Tab
			Then User Click Confirm button
			Then User Collect "Cheque Printed" Status and Verify
			When User Click Select User button for Cheque Approver
			#1scrollDown
			Then User Click Approve button
			Then User Collect "Cheque Request Approved" Status and Verify
			#1scrollUp
			When User Click Select User button for Creator
			#2scrollDown
			Then User Click Deliver button
			Then User enters "Asif" into Cheque Recever name field
			Then User enters "01899999999" into Recever phone Number field
			Then User Click Confirm Delevery button
			Then User Collect "Check Delivered" Status and Verify
			Then User Click Complete button
			
			
#For Inter Bank Account Transfer Type
Scenario: For Inter Buisness Unit Transfer Type
		Then User Click Transfer type field and select "Inter Bank Account Transfer" 
		Then User Click Transfer payment type field and Select "Transfer By Cheque"
		Then User enters "5" into Amount field
	
		Scenario: User Fillup Bank Information section
			Then User Click Bank Select and select "Trust Bank"
			Then User Click Account No field and select "0210589481"
			Then User Click Bank To and select "UCBL"
			Then User Click Bank To Account No and select "02136548356"	
			
		Scenario: User Fillup Cheque Information section
			Then User Click select Chequebook and select "1122"
			Then User Click Beneficiary Name and select "Asad & Co"
			Then User Click Cheque Category field and select Bearer Cheque
			Then User Click Cheque Auditor field and select "ERP Admin"
			Then User Click Signatory Authority field and select "ERP Admin"
			Then User Click Transfer Submit button
			
		Scenario: Verify Data of Transfer Cheque
			Then User Collect Total Amount Data and Verify
			Then User Collect Beneficiary Name and Verify
			Then User Collect Bank name and Verify
			Then User Collect Account Data and Verify
			Then User Collect "Check Request Created" Status and Verify
		
		Scenario: Approve Transfer Cheque
			When User Click Select User button for Auditor
			#1scrollDown
			Then User Click Review button
			#1Scrollup
			Then User Collect "Cheque Request Reviewed" Status and Verify
			When User Click Select User button for Creator
			#1scrollDown
			Then User Click Print button
			Then User Close New Tab
			Then User Click Confirm button
			Then User Collect "Cheque Printed" Status and Verify
			When User Click Select User button for Cheque Approver
			#1scrollDown
			Then User Click Approve button
			Then User Collect "Cheque Request Approved" Status and Verify
			#1scrollUp
			When User Click Select User button for Creator
			#2scrollDown
			Then User Click Deliver button
			Then User enters "Asif" into Cheque Recever name field
			Then User enters "01899999999" into Recever phone Number field
			Then User Click Confirm Delevery button
			Then User Collect "Check Delivered" Status and Verify
			Then User Click Complete button	

		
#For Head Office to Project Office Transfer Type
Scenario: For Inter Buisness Unit Transfer Type
		Then User Click Transfer type field and select "Head Office to Project Office Transfer" 
		Then User Click Transfer payment type field and Select "Transfer By Cheque"
		Then User Click ID button
		Then User enters "5" into Amount Total field
	
		Scenario: User Fillup Bank Information section
			Then User Click Bank Select and select "Trust Bank"
			Then User Click Account No field and select "0210589481"
			Then User Select Project To and select "KWASA"
			Then User Click Bank To and select "NCCBL"
			Then User Click Bank To Account No and select "0210589481"	
			
		Scenario: User Fillup Cheque Information section
			Then User Click select Chequebook and select "1122"
			Then User Click Beneficiary Name and select "Asad & Co"
			Then User Click Cheque Category field and select Bearer Cheque
			Then User Click Cheque Auditor field and select "ERP Admin"
			Then User Click Signatory Authority field and select "ERP Admin"
			Then User Click Transfer Submit button
			
		Scenario: Verify Data of Transfer Cheque
			Then User Collect Total Amount Data and Verify
			Then User Collect Beneficiary Name and Verify
			Then User Collect Bank name and Verify
			Then User Collect Account Data and Verify
			Then User Collect "Check Request Created" Status and Verify
		
		Scenario: Approve Transfer Cheque
			When User Click Select User button for Auditor
			#1scrollDown
			Then User Click Review button
			#1Scrollup
			Then User Collect "Cheque Request Reviewed" Status and Verify
			When User Click Select User button for Creator
			#1scrollDown
			Then User Click Print button
			Then User Close New Tab
			Then User Click Confirm button
			Then User Collect "Cheque Printed" Status and Verify
			When User Click Select User button for Cheque Approver
			#1scrollDown
			Then User Click Approve button
			Then User Collect "Cheque Request Approved" Status and Verify
			#1scrollUp
			When User Click Select User button for Creator
			#2scrollDown
			Then User Click Deliver button
			Then User enters "Asif" into Cheque Recever name field
			Then User enters "01899999999" into Recever phone Number field
			Then User Click Confirm Delevery button
			Then User Collect "Check Delivered" Status and Verify
			Then User Click Complete button	