Feature: Homepage

		A  title should be available

Scenario: I open the homepage, and should see a title
	Given I open the homepage
	Then I should see "coding-challenge" as page title

Scenario: Main title
	Given I open the homepage
	Then the main title should be "Welcome to Your Vue.js + TypeScript App"