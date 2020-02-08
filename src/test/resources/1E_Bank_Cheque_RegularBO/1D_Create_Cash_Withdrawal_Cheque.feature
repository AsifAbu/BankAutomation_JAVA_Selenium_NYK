#Author: abuasif.nyk@gmail.com

Feature: User create Cash Withdrawal Cheque
		
	Scenario: User going create Cheque page
		And User Click Cheque button
		Then User Click Create Cheque button
		Then User Click Regular BO button
		
	Scenario: User Fillup Vendor & Amount Selection section
		Then User Click Vendor & Amount Selection button
		Then User Click Requisition type field and select "Cash Withdrawal" 
		Then User enters "5" in Check Amount field
		Then User enters "ID:19600 Cash in Hand Site" in Account Cash Head field
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
		Then User Click Cash Withdrawal Submit button
		
	Scenario: Verify Data of Cash Withdrawal Cheque
		Then User Collect Total Amount Data and Verify
		Then User Collect Beneficiary Name and Verify
		Then User Collect Bank name and Verify
		Then User Collect Account Data and Verify
		Then User Collect "Check Request Created" Status and Verify
	
	Scenario: Approve Cash Withdrawal Cheque
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
		
		#Edit in Later Update
		#Dive scroll work does not work
		
		#Then User Collect "Cheque Request Completed" Status and Verify
		
		
		
		