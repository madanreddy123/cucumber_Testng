$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "education form",
  "description": "",
  "id": "education-form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke,"
    },
    {
      "line": 3,
      "name": "@regression,"
    },
    {
      "line": 3,
      "name": "@end"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"\u003cprimary_School\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"\u003csecondary_School\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"\u003cintermediate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"\u003cengineering\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"\u003cintermediate_Percentage\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "education-form;enter-the-education-form;",
  "rows": [
    {
      "cells": [
        "primary_School",
        "secondary_School",
        "intermediate",
        "engineering",
        "University",
        "intermediate_Percentage"
      ],
      "line": 15,
      "id": "education-form;enter-the-education-form;;1"
    },
    {
      "cells": [
        "model mission high school",
        "model mission high school",
        "sri chaitanya",
        "pulla reddy engineering college",
        "JNTU",
        "Intermediate Percentage"
      ],
      "line": 16,
      "id": "education-form;enter-the-education-form;;2"
    },
    {
      "cells": [
        "model mission high school",
        "model mission high school",
        "sri chaitanya",
        "pulla reddy engineering college",
        "JNTU",
        "Intermediate Percentage"
      ],
      "line": 17,
      "id": "education-form;enter-the-education-form;;3"
    },
    {
      "cells": [
        "model mission high school",
        "model mission high school",
        "sri chaitanya",
        "pulla reddy engineering college",
        "JNTU",
        "Intermediate Percentage"
      ],
      "line": 18,
      "id": "education-form;enter-the-education-form;;4"
    },
    {
      "cells": [
        "model mission high school",
        "model mission high school",
        "sri chaitanya",
        "pulla reddy engineering college",
        "JNTU",
        "Intermediate Percentage"
      ],
      "line": 19,
      "id": "education-form;enter-the-education-form;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3802129340,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@end"
    },
    {
      "line": 3,
      "name": "@Smoke,"
    },
    {
      "line": 3,
      "name": "@regression,"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"model mission high school\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"model mission high school\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"sri chaitanya\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"pulla reddy engineering college\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"Intermediate Percentage\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 35
    }
  ],
  "location": "Steps.i_enter_the_name_a_Primary_School(String)"
});
formatter.result({
  "duration": 360920609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_name_a_Secondary_School(String)"
});
formatter.result({
  "duration": 238998968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri chaitanya",
      "offset": 33
    }
  ],
  "location": "Steps.i_enter_the_name_a_Intermediate(String)"
});
formatter.result({
  "duration": 140673940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pulla reddy engineering college",
      "offset": 32
    }
  ],
  "location": "Steps.i_enter_the_name_a_Engineering(String)"
});
formatter.result({
  "duration": 180544910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuniversity\u003e",
      "offset": 31
    }
  ],
  "location": "Steps.i_enter_the_name_a_University(String)"
});
formatter.result({
  "duration": 121743197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Intermediate Percentage",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_intermediate_Percentage(String)"
});
formatter.result({
  "duration": 339685479,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_gender()"
});
formatter.result({
  "duration": 65235905,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 289805627,
  "status": "passed"
});
formatter.after({
  "duration": 182072707,
  "status": "passed"
});
formatter.before({
  "duration": 3238697021,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@end"
    },
    {
      "line": 3,
      "name": "@Smoke,"
    },
    {
      "line": 3,
      "name": "@regression,"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"model mission high school\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"model mission high school\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"sri chaitanya\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"pulla reddy engineering college\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"Intermediate Percentage\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 35
    }
  ],
  "location": "Steps.i_enter_the_name_a_Primary_School(String)"
});
formatter.result({
  "duration": 202678719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_name_a_Secondary_School(String)"
});
formatter.result({
  "duration": 157737199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri chaitanya",
      "offset": 33
    }
  ],
  "location": "Steps.i_enter_the_name_a_Intermediate(String)"
});
formatter.result({
  "duration": 128545602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pulla reddy engineering college",
      "offset": 32
    }
  ],
  "location": "Steps.i_enter_the_name_a_Engineering(String)"
});
formatter.result({
  "duration": 235329693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuniversity\u003e",
      "offset": 31
    }
  ],
  "location": "Steps.i_enter_the_name_a_University(String)"
});
formatter.result({
  "duration": 119716421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Intermediate Percentage",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_intermediate_Percentage(String)"
});
formatter.result({
  "duration": 301604109,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_gender()"
});
formatter.result({
  "duration": 70508600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 271096960,
  "status": "passed"
});
formatter.after({
  "duration": 147220485,
  "status": "passed"
});
formatter.before({
  "duration": 3667559712,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@end"
    },
    {
      "line": 3,
      "name": "@Smoke,"
    },
    {
      "line": 3,
      "name": "@regression,"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"model mission high school\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"model mission high school\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"sri chaitanya\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"pulla reddy engineering college\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"Intermediate Percentage\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 35
    }
  ],
  "location": "Steps.i_enter_the_name_a_Primary_School(String)"
});
formatter.result({
  "duration": 203301999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_name_a_Secondary_School(String)"
});
formatter.result({
  "duration": 140896347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri chaitanya",
      "offset": 33
    }
  ],
  "location": "Steps.i_enter_the_name_a_Intermediate(String)"
});
formatter.result({
  "duration": 137446127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pulla reddy engineering college",
      "offset": 32
    }
  ],
  "location": "Steps.i_enter_the_name_a_Engineering(String)"
});
formatter.result({
  "duration": 174130742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuniversity\u003e",
      "offset": 31
    }
  ],
  "location": "Steps.i_enter_the_name_a_University(String)"
});
formatter.result({
  "duration": 124324885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Intermediate Percentage",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_intermediate_Percentage(String)"
});
formatter.result({
  "duration": 300521089,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_gender()"
});
formatter.result({
  "duration": 64790280,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 267198651,
  "status": "passed"
});
formatter.after({
  "duration": 142857171,
  "status": "passed"
});
formatter.before({
  "duration": 3230126716,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "enter the education form",
  "description": "",
  "id": "education-form;enter-the-education-form;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@end"
    },
    {
      "line": 3,
      "name": "@Smoke,"
    },
    {
      "line": 3,
      "name": "@regression,"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the name a Primary_School \"model mission high school\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the name a Secondary_School \"model mission high school\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the name a Intermediate \"sri chaitanya\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the name a Engineering \"pulla reddy engineering college\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the name a University \"\u003cuniversity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the intermediate_Percentage \"Intermediate Percentage\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on gender",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 35
    }
  ],
  "location": "Steps.i_enter_the_name_a_Primary_School(String)"
});
formatter.result({
  "duration": 207661515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "model mission high school",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_name_a_Secondary_School(String)"
});
formatter.result({
  "duration": 144639966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri chaitanya",
      "offset": 33
    }
  ],
  "location": "Steps.i_enter_the_name_a_Intermediate(String)"
});
formatter.result({
  "duration": 199619333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pulla reddy engineering college",
      "offset": 32
    }
  ],
  "location": "Steps.i_enter_the_name_a_Engineering(String)"
});
formatter.result({
  "duration": 180513404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuniversity\u003e",
      "offset": 31
    }
  ],
  "location": "Steps.i_enter_the_name_a_University(String)"
});
formatter.result({
  "duration": 134790898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Intermediate Percentage",
      "offset": 37
    }
  ],
  "location": "Steps.i_enter_the_intermediate_Percentage(String)"
});
formatter.result({
  "duration": 312957350,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_gender()"
});
formatter.result({
  "duration": 66991893,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 274265465,
  "status": "passed"
});
formatter.after({
  "duration": 139977956,
  "status": "passed"
});
});