
export const periodNames = ["Quarter 1", "Quarter 2", "Quarter 3", "Final"];
export const teams = [{name:"Chiefs", icon:"/images/kc.svg"}, {name:"49ers", icon:"/images/sf.svg"}];
export let questions = [
    {
        question: "National Anthem",
        extrainfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci a magna bibendum cursus. Donec semper diam et dui suscipit, ut blandit purus pharetra. Maecenas vitae est sed nisl finibus dictum. Aliquam maximus risus at turpis mattis, at fermentum lacus fringilla. Nunc lectus erat, aliquet ut mauris vel, consectetur gravida est. Morbi metus arcu, efficitur nec dictum non, porttitor eu nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lacus neque, mattis et ornare sed, aliquam porttitor mi. Curabitur ut leo tellus.",
        config: {
            placeholder: "H:M"
        }
    },
    {
        question: "How old are you?"
    },
    {
        question: "Where do you live?"
    },
    {
        question: "What will the opening coin toss land on?", 
        short: 'Coin Toss', 
        options: [{ name: "Heads", score: 1 }, { name: "Tails", score: 1 }]
    },
    {
        question: "What will Gladys Knight wear while singing the national anthem?", 
        short: 'Gladys Knight Wear', 
        options: [{ name: "Dress or Skirt", score: 1 }, { name: "Pants or shorts", score: 2 }]
    },
    {
        question: "What song will Maroon 5 open with during the halftime show?", 
        short: 'HT Opening Song', 
        options: [{ name: "One More Night", score: 3 }, { name: "Makes Me Wonder", score: 3 }, { name: "Animals", score: 5 }, { name: "Don't Wanna Know", score: 6 }, { name: "Girls Like You", score: 6 }, { name: "Other", score: 5 }]
    },
    {
        question: "Will Adam Levine (lead singer for Maroon 5) wear a leather jacket during the halftime show?", 
        short: 'Adam Levine Leather Jacket', 
        options: [{ name: "Yes", score: 1 }, { name: "No", score: 2 }]
    },
    {
        question: "What will the last score of the game be?", 
        short: 'Last Score', 
        options: [{ name: "Touchdown", score: 1 }, { name: "Field Goal or Safety", score: 2 }]
    },
    {
        question: "What will the the first scoring play of the game be?", 
        short: 'First Scoring Play', 
        options: [{ name: "Chiefs Field Goal", score: 2, image:"/images/kc.svg" }, { name: "Chiefs Offensive TD", score: 2, image:"/images/kc.svg" }, { name: "Chiefs Defensive TD", score: 6, image:"/images/kc.svg" }, { name: "49ers Field Goal", score: 2, image:"/images/sf.svg" }, { name: "49ers Offensive TD", score: 2, image:"/images/sf.svg" }, { name: "49ers Defensive TD", score: 6, image:"/images/sf.svg" }]
    },
    {
        question: "During the first Doritos commercial, what color will the first bag shown be?", 
        short: 'Doritos Bag Color', 
        options: [{ name: "Red", score: 1 }, { name: "Blue", score: 1 }, { name: "Purple", score: 2 }, { name: "Yellow", score: 3 }, { name: "Other", score: 2 }]
    },
    {
        question: "Will the phrase 'Greatest of All Time' be said by Jim Nantz or Tony Romo during the game?", 
        short: '"Greatest of All Time" Said', 
        options: [{ name: "Yes", score: 1 }, { name: "No", score: 1 }]
    },
    {
        question: "Who will win Super Bowl LIV MVP?", 
        short: 'MVP', 
        options: [{ name: "Patrick Mahomes (KC QB)", image: "/images/mahomes.png", score: 110 }, { name: "Jimmy Garoppolo (SF QB)", image: "/images/garoppolo.png", score: 200 }, { name: "Raheem Mostert (SF RB)", image: "/images/mostert.png", score: 500 }, { name: "Tyreek Hill (KC WR)", image: "/images/hill.png", score: 1600 }, { name: "Travis Kelce (KC TE)", image: "/images/kelce.png", score: 1600 }, { name: "Other", image: "/images/other.png", score: 1200 }]
    }
];