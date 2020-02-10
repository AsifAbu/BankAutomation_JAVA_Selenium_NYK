#Author: abuasif.nyk@gmail.com

Feature: User create Advance Slip Cheque
	Scenario: User going create Cheque page
			And User Click Cheque button
			Then User Click Create Cheque button
			Then User Click Purchase button
		
	Scenario: User Fillup Vendor & Amount Selection section
			Then User Click Vendor & Amount Selection button
			Then User Click Purchase Bill type field and select "Advance Slip" 
			Then User Click Vendor List field and select "Gazipur Polish Store"
			Then User Click Bill SL button
			Then User enters "1" in first row TDS field in Purchase Bill
			Then User enters "2" in first row VDS field Purchase Bill
			Then User enters "5" in first row Amount field Purchase Bill
			#3 Scroll down
	
		Scenario: User Fillup Bank Information section
			Then User Click Bank Select and select "Trust Bank"
			Then User Click Account No field and select "0210589481"
			Then User Click select Chequebook and select "1122"
			
		Scenario: User Fillup Cheque Information section
			Then User Click Beneficiary Name and select "Asad & Co"
			Then User Click Cheque Category field and select Bearer Cheque
			Then User Click Cheque Auditor field and select "ERP Admin"
			Then User Click Signatory Authority field and select "ERP Admin"
			Then User Click Advance Slip Submit button
			
		Scenario: Verify Data of Advance Slip Cheque
			Then User Collect Total Amount Data and Verify
			Then User Collect Beneficiary Name and Verify
			Then User Collect Bank name and Verify
			Then User Collect Account Data and Verify
			Then User Collect "Check Request Created" Status and Verify
		
		Scenario: Approve Advance Slip Cheque
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