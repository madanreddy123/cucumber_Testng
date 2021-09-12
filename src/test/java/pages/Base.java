package pages;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.Parameters;



public class Base 

{
	
	   DesiredCapabilities cap;
	
	   @Parameters("browsers")

	
		   public RemoteWebDriver Gd(WebDriver driver,String Br) throws MalformedURLException, InterruptedException
		   {
		   
	  
			   if (Br.equalsIgnoreCase("firefox"))
			   {
				   cap=new DesiredCapabilities();
				   cap.setBrowserName("firefox");
				   cap.setPlatform(Platform.MAC);
				    	
		    	}
			   
			   else if (Br.equalsIgnoreCase("chrome"))
			   {
				   cap=new DesiredCapabilities();
				   cap.setBrowserName("chrome");
				   cap.setPlatform(Platform.ANY);
				   
			}
		   
		
		    	
		   RemoteWebDriver driver1=new RemoteWebDriver(new URL("http://192.168.0.120:4444/wd/hub"),cap);
		   
		    driver1.manage().window().maximize();
			driver1.get("http://122.175.8.158/ranford2/home.aspx");
			
			return driver1;
		   }
			

}
