#Author: abuasif.nyk@gmail.com

Feature: User create Arranger Commission Cheque	
	Scenario: User going create Cheque page
			And User Click Cheque button
			Then User Click Create Cheque button
			Then User Click LC Payments button
			
			Then User Click Amount Selection button
			Then User Click Type field and select "Arranger Commission"
			Then User Click Vendor List field and select "Gazipur Polish Store" 
			Then User Click Arranger Commission NO field and search "55"
			#Then User enters "1" in first row TDS field in LC Arranger Commission
			Then User enters "5" in first row Amount field LC Arranger Commission
		
			Scenario: User Fillup Bank Information section
				Then User Click Bank Select and select "Trust Bank"
				Then User Click Account No field and select "0210589481"
				Then User Click select Chequebook and select "1122"	
				
			Scenario: User Fillup Cheque Information section
				Then User Click Beneficiary Name and select "Asad & Co"
				Then User Click Cheque Category field and select Bearer Cheque
				Then User Click Cheque Auditor field and select "ERP Admin"
				Then User Click Signatory Authority field and select "ERP Admin"
				Then User Click C&F Payment Submit button
				
			Scenario: Verify Data of C&F Payment Cheque
				Then User Collect Total Amount Data and Verify
				Then User Collect Beneficiary Name and Verify
				Then User Collect Bank name and Verify
				Then User Collect Account Data and Verify
				Then User Collect "Check Request Created" Status and Verify
			
			Scenario: Approve C&F Payment Cheque
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