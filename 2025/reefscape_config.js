var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025wasno",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2025/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "6 7 18 19 30 31 42 43 54 55 66 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "ans",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "tns",
      "type": "counter"
    },
    { "name": "Clear Algae Off Reef",
      "code": "caor",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Parked, failed climb<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Failed to Score Coral (>2)",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Failed to Score Algae (>2)",
      "code": "da",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
