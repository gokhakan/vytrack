package com.vytrack.step_definitions;

import com.vytrack.pages.ContactsPage;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class NavigationMenuStepDefs {
    @Then("default page number should be {int}")
    public void default_page_number_should_be(Integer expectedPageNum) {
       ContactsPage contactsPage = new ContactsPage();
       Integer actualNumber = Integer.parseInt(contactsPage.pageNumber.getAttribute("value"));
        Assert.assertEquals(expectedPageNum, actualNumber);
    }
}
