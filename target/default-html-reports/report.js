$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/contacts.feature");
formatter.feature({
  "name": "Contacts page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Menu Options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactsStepDefs.the_user_logged_in_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see following options",
  "rows": [
    {
      "cells": [
        "Fleet"
      ]
    },
    {
      "cells": [
        "Customers"
      ]
    },
    {
      "cells": [
        "Activities"
      ]
    },
    {
      "cells": [
        "Systems"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefs.the_user_should_see_following_options(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});