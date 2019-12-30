package com.crm.qa.testcases;

import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.crm.qa.base.Testbase;
import com.crm.qa.pages.Loginpage;

public class Loginpagetest extends Testbase {

	Loginpage loginpage;

	public Loginpagetest() {

		super();

	}

	@BeforeMethod
	public void setup() {

		initialization();
		loginpage = new Loginpage();

	}

	 @Test(priority=1) 
	 public void loginpagetitle() {
		  
		  String title=loginpage.validateLoginpagetitle(); 
		  Assert.assertEquals(title,"CRMPRO - CRM software for customer relationship management, sales, and support."
		  ); System.out.println(title);
		  
		  }
		  
		  
		  
		  
		  @Test(priority=2) 
		  public void crmlogoimg() {
		  //driver.manage().timeouts().implicitlyWait(500000, TimeUnit.SECONDS);
		  boolean flag=loginpage.validatecrmimage(); System.out.println(flag);
		  Assert.assertTrue(flag);
		  
		  }
	
	
	@Test(priority = 3)
	public void logintest() {
		 
		loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
		
	}

	
	 @AfterMethod 
	 public void Teardown() { driver.close();
	 
	 }
	 
}
