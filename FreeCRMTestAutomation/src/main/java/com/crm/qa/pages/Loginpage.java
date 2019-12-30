package com.crm.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.crm.qa.base.Testbase;

public class Loginpage extends Testbase {


// page factory -OR
	
	@FindBy(name="username")
	WebElement username;
	
	@FindBy(name="password")
	WebElement password;
	
	@FindBy(xpath="//input[@type='submit']")
	WebElement loginbtn;
	
	
	
   @FindBy(xpath="//a[contains(text(),'Sign Up')]")
   WebElement signupbtn;
   
   @FindBy(xpath="//a[@class='navbar-brand']//img[@class='img-responsive']")
   WebElement crmlogo;
   
   //Initializing the page objects 
   public Loginpage()
   {
	   
	   PageFactory.initElements(driver, this);
	   
   }
   
  //btn btn-small 
   
   
   
   public String validateLoginpagetitle() {
	   
	   
	   return driver.getTitle();
	   
   }

 public boolean validatecrmimage() {
	 
	 return crmlogo.isDisplayed();
	 
 }
 
 public void login(String un , String pwd)
 {
	 username.sendKeys(un);
	 System.out.println("Entered the username");
	 password.sendKeys(pwd);
	 System.out.println("Entered the password");
	 //loginbtn.click();
	// System.out.println("Clicked on login button");
	 //driver.findElement(By.xpath("//input[@class='btn btn-small']")).click();
	// driver.findElement(By.xpath("//input[@type='submit']"));
	 JavascriptExecutor js = (JavascriptExecutor)driver;
	 js.executeScript("arguments[0].click();", loginbtn);
	 
	 
	 
	 
 }







}
