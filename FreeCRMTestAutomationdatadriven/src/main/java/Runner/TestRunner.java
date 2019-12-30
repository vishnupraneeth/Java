package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="C:\\Users\\vishn\\eclipse-workspace\\FreeCRMTestAutomationdatadriven\\src\\main\\java\\features\\contacts.feature",
		glue= {"stepDefinations"},
		format= {"pretty" , "html:test-output" , "json:json-output/cucumber.json" , "junit:junit-xml/cucumber.xml"},
		strict=true,
		monochrome=true,
		dryRun=false
		
		
		)








public class TestRunner {
	

}
