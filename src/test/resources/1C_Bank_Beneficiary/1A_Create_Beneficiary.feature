#Author: abuasif.nyk@gmail.com

Feature: User Create New Beneficiary
		
  Scenario: User going to Create New Beneficiary of Vendor Type
  	When User Click Beneficiary button
  	Then User Click Create Beneficiary button
  	
  	Then User Click Exixting Vendor field
  	
  	Then User Click Gazipur Polish Store button
  	And User Select "ERP Admin" At Approver Option
  	Then User enters "AsifBenificiary-Vendor" into Beneficiary Name field
  	Then User enters "asifbeneficiary@gmail.com" into Beneficiary Email field
  	Then User enters "01799999999" into beneficiary Phone field
  	
  Scenario: User going to Add Beneficiary Bank Account for Vendor Type
  	When User Clicks Add Beneficiary Bank Account button
  	Then User Clicks Bank Name button and Select or Click UCBL
  	Then User enters "UCBL, Mohakhali-DOHS" into Branch Name field
  	Then user enters "11001100" into Account Number field
  	Then User Click Submit button
  	
  Scenario: User going to Create New Beneficiary of Non Vendor Type
  	When User Click Benificiary Type field
  	Then User select Non Vendor Type
  	And User Select "ERP Admin" At Approver Option
  	Then User enters "AsifBenificiary-NonVendor" into Beneficiary Name field
  	Then User enters "asifbeneficiary@gmail.com" into Beneficiary Email field
  	Then User enters "01799999999" into beneficiary Phone field
  	
  Scenario: User going to Add Beneficiary Bank Account for Non Vendor Type
  	When User Clicks Add Beneficiary Bank Account button
  	Then User Clicks Bank Name button and Select or Click UCBL
  	Then User enters "UCBL, Mohakhali-DOHS" into Branch Name field
  	Then user enters "11001100" into Account Number field
  	Then User Click Submit button
  	
  Scenario: User going to Create New Beneficiary of TDS Type
  	When User Click Benificiary Type field
  	Then User select TDS Type	
  	And User Select "ERP Admin" At Approver Option
  	Then User enters "AsifBenificiary-TDS" into Beneficiary Name field
  	Then User enters "asifbeneficiary@gmail.com" into Beneficiary Email field
  	Then User enters "01799999999" into beneficiary Phone field
  	
  Scenario: User going to Add Beneficiary Bank Account for TDS Type
  	When User Clicks Add Beneficiary Bank Account button
  	Then User Clicks Bank Name button and Select or Click UCBL
  	Then User enters "UCBL, Mohakhali-DOHS" into Branch Name field
  	Then user enters "11001100" into Account Number field
  	Then User Click Submit button
  	
  	