#Author: abuasif.nyk@gmail.com

Feature: User is on LogIn page

  Scenario: Unsuccessful Login with Invalid Username and Valid Password
    Given User is on Login page
    When User enters "mithukhan18@yahoo.com" into Username field
    And User enters "123" into Password field
    And User Click LogIn button
    And Login Denied With Alert Message "Invalid Email or Password"

  Scenario: Unsuccessful Login with Valid Username and Invalid Password
    Given User is on Login page
    When User enters "fahadbilla@yahoo.com" into Username field
    And User enters "123d34593234556" into Password field
    And User Click LogIn button
    And Login Denied With Alert Message "Invalid Email or Password"
   

  Scenario: Unsuccessful Login with Blank Username and Blank Password
    Given User is on Login page
    When User enters "" into Username field
    And User enters "" into Password field
    And User Click LogIn button
    And Login Denied With Alert Message "Please enter valid email address"

  Scenario: Unsuccessful Login with Blank Username and Valid Password
    Given User is on Login page
    When User enters "" into Username field
    And User enters "123" into Password field
    And User Click LogIn button
    And Login Denied With Alert Message "Please enter valid email address"

  Scenario: Unsuccessful Login with Valid Username and Blank Password
    Given User is on Login page
    When User enters "fahadbillah@yahoo.com" into Username field
    And User enters "" into Password field
    And User Click LogIn button
    And Login Denied With Alert Message "Please enter password"

	Scenario: Successful Login with Valid Credentials
		Given User is on Login page
		When User enters "erp.maxgroup@gmail.com" into Username field
    And User enters "123" into Password field
    And User Click LogIn button
    And User Login Successfully

	Scenario: Select Role
		Then User select Creator at CDA
		Then click Confirm button
		