//package stepDefinations;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//
//public class LoginStepDefiantion {
//	WebDriver driver ;
//	@Given("^User is already in login page$")
//	public void user_is_already_in_login_page() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    
//	    
//	  System.setProperty("webdriver.chrome.driver", "C:\\Users\\vishn\\Desktop\\java and selenium pgms\\chromedriver.exe");
//	  
//	   driver=new ChromeDriver();
//	   driver.get("https://www.crmpro.com/");
//	   
//	    
//	    
//	}
//	
//	@Then("^Enter the \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void enter_the_and(String un, String pwd) throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	 
//		driver.manage().window().maximize();
//		  driver.manage().timeouts().pageLoadTimeout(2000,TimeUnit.SECONDS);
//		  driver.manage().timeouts().implicitlyWait(20000, TimeUnit.SECONDS);
//		  driver.findElement(By.name("username")).sendKeys(un);
//		  driver.findElement(By.name("password")).sendKeys(pwd);
//		}
//
//
//	/*
//	 * @Then("^Enter the username and password$") public void
//	 * enter_the_username_and_password() throws Throwable { // Write code here that
//	 * turns the phrase above into concrete actions
//	 * driver.manage().window().maximize();
//	 * driver.manage().timeouts().pageLoadTimeout(2000,TimeUnit.SECONDS);
//	 * driver.manage().timeouts().implicitlyWait(20000, TimeUnit.SECONDS);
//	 * driver.findElement(By.name("username")).sendKeys("vishnu95");
//	 * driver.findElement(By.name("password")).sendKeys("test@123"); }
//	 */
//
//	@Then("^Click on login button$")
//	public void click_on_login_button() throws Throwable {
//	    // Write code here that turns the phrase above into concrete ations
//	  WebElement loginbtn= driver.findElement(By.xpath("//input[@type='submit']"));
//		JavascriptExecutor js=(JavascriptExecutor)driver;
//		 js.executeScript("arguments[0].click();", loginbtn);
//		
//	}
//
//	@Then("^Close the browser$")
//	public void close_the_browser() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    
//	
//	driver.quit();
//	}
//
//	
//	
//
//}
