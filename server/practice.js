import { Router } from "express";

const data = {
  "school": {
    "name": "Silverthorn Academy of Arcane Arts",
    "foundedYear": 1423,
    "location": {
      "region": "Eldermist Valley",
      "country": "Valoria",
      "setting": "Hidden in a mountain range, accessible only by enchanted bridge"
    },
    "headmaster": {
      "name": "Alaric Moonveil",
      "title": "Archmage",
      "specialty": "Astral Magic"
    },
    "houses": [
      {
        "name": "Emberfall",
        "trait": "Courage",
        "element": "Fire"
      },
      {
        "name": "Verdantia",
        "trait": "Wisdom",
        "element": "Earth"
      },
      {
        "name": "Zephyra",
        "trait": "Curiosity",
        "element": "Air"
      },
      {
        "name": "Nocturne",
        "trait": "Ambition",
        "element": "Shadow"
      }
    ],
    "students": {
      "total": 480,
      "ageRange": "12-18",
      "notableStudents": [
        {
          "name": "Lyra Windwhisper",
          "year": 5,
          "house": "Zephyra",
          "affinity": "Stormcalling"
        },
        {
          "name": "Dorian Ashvale",
          "year": 7,
          "house": "Emberfall",
          "affinity": "Pyromancy"
        }
      ]
    },
    "courses": [
      {
        "name": "Elemental Manipulation",
        "difficulty": "Intermediate"
      },
      {
        "name": "Potion Brewing",
        "difficulty": "Beginner"
      },
      {
        "name": "Runic Magic",
        "difficulty": "Advanced"
      },
      {
        "name": "Beast Taming",
        "difficulty": "Intermediate"
      }
    ],
    "facilities": [
      "Grand Library of Spells",
      "Alchemy Labs",
      "Astral Observatory",
      "Enchanted Forest Grounds",
      "Dueling Arena"
    ],
    "rules": [
      "No spellcasting in dormitories after midnight",
      "Forbidden magic strictly prohibited",
      "Students must carry a focus wand at all times"
    ],
    "events": [
      {
        "name": "Arcane Tournament",
        "season": "Spring"
      },
      {
        "name": "Festival of Lumina",
        "season": "Winter"
      }
    ]
  }
}

const router = Router();

router.get("/", (request, response) => {
    response.send("Practice is working!")
})

router.get("/foundedyear", (request, response) => {
    response.json(data.school.foundedYear)
})

router.get("/houses", (request, response) => {
    response.json(data.school.houses)
})

// Create a route for events
router.get("/events", (request, response) => {
    response.json(data.school.events)
})

// Create a route for notable students
router.get("/notableStudents", (req, res) => {
    res.json(data.school.students.notableStudents)
})

export default router;