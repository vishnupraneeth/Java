Feature: Free CRM automation 
	Scenario Outline: CRM Login page Scenario
	Given User is already in login page
	Then Enter the "<username>" and "<password>"
	Then Click on login button
	Then Close the browser 
	
	Examples:
	       |username | password   |
	       |vishnu95 |  test@123  |
	       |vishnu96 |test@123    |