package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;

public class Contactslogin {
	WebDriver driver;
	
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
		  System.setProperty("webdriver.chrome.driver", "C:\\Users\\vishn\\Desktop\\java and selenium pgms\\chromedriver.exe");
	  
	   driver=new ChromeDriver();
	   driver.get("https://www.crmpro.com/");
	
	}

	@When("^title of login page in free crm$")
	public void title_of_login_page_in_free_crm() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
		String title=driver.getTitle();
		//Assert.assertEquals(title, "CRMPRO  - CRM software for customer relationship management, sales, and support.");
		
		
	}

	@Then("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String un, String pwd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  driver.manage().window().maximize();
	  driver.manage().timeouts().pageLoadTimeout(2000,TimeUnit.SECONDS);
	  driver.manage().timeouts().implicitlyWait(20000, TimeUnit.SECONDS);
	  driver.findElement(By.name("username")).sendKeys(un);
	  driver.findElement(By.name("password")).sendKeys(pwd);
	}
		
	   
	

	@Then("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
		WebElement loginbtn= driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginbtn);
		
		
		
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	 String title = driver.getTitle();
	 System.out.println("Home Page title ::"+ title);
     
	}

	@Then("^user moves to new contacts page$")
	public void user_moves_to_new_contacts_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	driver.switchTo().frame("mainpanel");
	Actions action = new Actions(driver);
    action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
    driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	
	}

	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and(String firstname, String lastname, String position) throws Throwable {
		
		
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("first_name")).sendKeys(firstname);
	    driver.findElement(By.id("surname")).sendKeys(lastname);
        driver.findElement(By.id("company_position")).sendKeys(position);
        driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	 
	
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	driver.close();
	
	}


	
	
}
