const mongoose = require("mongoose");
const db = require("../models");


// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/reactdares"
);


const dareSeed = [
    {
        type: "Truth",
        author: "john",
        details:
            "Of the people in this room, who do you want to trade lives with?",
        id: 1
    },
    {
        type: "Dare",
        author: "john",
        details:
            "Dance with no music for 1 minute.",
        id: 2
    },
    {
        type: "Truth",
        author: "john",
        details:
            "You’re in a public restroom and just went #2, then you realized your stall has no toilet paper. What do you do?",
        id: 3
    },
    {
        type: "Dare",
        author: "john",
        details:
            "Give someone your phone and let them send one text to anyone in your contacts.",
        id: 4
    },
    {
        type: "Truth",
        author: "john",
        details:
            "Who do you like the least in this room and why?",
        id: 5
    },
    {
        type: "Dare",
        author: "john",
        details:
            "Eat five spoonfuls of a condiment.",
        id: 6
    },
    {
        type: "Truth",
        author: "john",
        details:
            "Have you ever tasted ear wax?",
        id: 7
    },
     {
        type: "Dare",
        author: "john",
        details:
            "Sniff the armpits of everyone in the room.",
        id: 8
    }, {
        type: "Truth",
        author: "john",
        details:
            "Have you ever posted something on social media that you regret?",
        id: 9
    },
    {
        type: "Dare",
        author: "john",
        details:
            "Kiss the person to your left.",
        id: 10
    },
    {
        type: "Truth",
        author: "john",
        details:
            "Do you have any silly nicknames?",
        id: 11
    },
    {
        type: "Dare",
        author: "john",
        details:
            "Walk on your hands from one side of the room to the other. You can ask someone to hold your legs if necessary.",
        id: 12
    },
    {
        type: "Truth",
        author: "john",
        details:
            "When was the last time you wet the bed?",
        id: 13
    }, {
        type: "Dare",
        author: "john",
        details:
            "Spin an imaginary hula hoop around your waist for 3 minutes while the game continues.",
        id: 14
    },
    {
        type: "Truth",
        author: "john",
        details:
            "Have you ever eaten something off the floor?",
        id: 15
    },
    {
        type: "Dare",
        author: "john",
        details:
            "Take a shower with your clothes on.",
        id: 16
    }, {
        type: "Truth",
        author: "john",
        details:
            "What ‘As seen on TV’ product do you secretly want to buy?",
        id: 17
    }, {
        type: "Dare",
        author: "john",
        details:
            "Drag your butt on the carpet like a dog from one end of the room to the other. You’ll need to be wearing shorts or pants for this one.",
        id: 18
    }, {
        type: "Truth",
        author: "john",
        details:
            "What is something that no one else knows about you?",
        id: 19
    }, {
        type: "Dare",
        author: "john",
        details:
            "Let the group look through your phone for 2 minutes.",
        id: 20
    }

]

    db.Dare
    .remove({})
    .then(() => db.Dare.collection.insertMany(dareSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  