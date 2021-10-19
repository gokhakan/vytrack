package com.vytrack.step_definitions;

import com.vytrack.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hooks {
    @Before
    public void setUp(){

        Driver.get().manage().window().maximize();
    }


    @After

    //I am taking a screenshot of the UI if the test fails

    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            final byte [] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
        }

        Driver.closeDriver();

    }


}