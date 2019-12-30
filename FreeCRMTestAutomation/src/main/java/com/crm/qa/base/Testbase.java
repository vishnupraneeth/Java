package com.crm.qa.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.crm.qa.util.Testutil;

//Extracting the contents from properties file ,opening the browser , launching the url
public class Testbase {
	
	
	public static WebDriver driver;
	public static Properties prop;
	
	public Testbase() {
		try {
		
		prop=new Properties();
		FileInputStream fis=new FileInputStream("C:\\Users\\vishn\\eclipse-workspace\\FreeCRMTestAutomation\\src\\main\\java\\com\\crm\\qa\\config\\config.properties");
		
		prop.load(fis);
		
		
		}
		
		catch(Exception e) {
			System.out.println(e);
		}
		
		
		
	}
	
public static void initialization()
{
	
	if(prop.getProperty("browser").equals("chrome")) {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\vishn\\Desktop\\java and selen"
				+ "ium pgms\\chromedriver.exe");
		
	
	   driver=new ChromeDriver();
	   
	   
	
	
	
	}
		else if (prop.getProperty("browser").equals("FF")) {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\vishn\\Desktop\\java and selen"
					+ "ium pgms\\chromedriver.exe");
			
			driver=new ChromeDriver();
		}
		
		
		
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(5,TimeUnit.MINUTES);
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.MINUTES);
		driver.get("https://www.crmpro.com/");
		
	}
	
	
	
	
}

