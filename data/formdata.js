
export const periodNames = ["Quarter 1", "Quarter 2", "Quarter 3", "Final"];
export const teams = [{name:"Chiefs", icon:"/images/kc.svg"}, {name:"49ers", icon:"/images/sf.svg"}];
export let questions = [
    {
        question: "How long will it take Demi Lovato to sing the National Anthem?",
        short: "National Anthem",
        extrainfo: `Demi Lovato is no stranger to singing the anthem at huge sporting events, you can find many examples on YouTube.
        Her most recent high-profile anthem performance came during the Conor McGregor-Floyd Mayweather boxing match in 2016, where she took 2:12.
        She also sang for Game 4 of the 2015 World Series between the New York Mets and Kansas City Royals, where she clocked out at 1:58 and even held the “brave” for a few seconds to milk the clock.
        The past two super bowls have both gone under 2 minutes.`,
        config: {
            placeholder: "M:SS"
        }
    },
    {
        question: "Will any scoring drive take less time than it takes Demi Lovato to sing the national anthem?", 
        short: 'Drive vs. Anthem',
        extrainfo: "Kansas City had 31% of their scoring drives last less than 2:15, while San Francisco had 28%",
        options: [{ name: "Yes", score: 300 }, { name: "No", score: 100 }]
    },
    {
        question: "What will the opening coin toss land on?", 
        short: 'Coin Toss',
        extrainfo: 'Since the first Super Bowl, HEADS has come up 25 times and TAILS 28. The winner of the Super Bowl has won the coin toss 24 times with HEADS coming up 12 times.',
        options: [{ name: "Heads", score: 100 }, { name: "Tails", score: 100 }]
    },
    {
        question: "Which commercial will be shown first, Mountain Dew or Toyota?", 
        short: 'Mtn. Dew vs Toyota', 
        options: [{ name: "Mountain Dew", score: 150 }, { name: "Toyota", score: 150 }]
    },
    {
        question: "Which commercial will be shown first, Audi or Porsche?", 
        short: 'Audi vs Porsche', 
        options: [{ name: "Audi", score: 150 }, { name: "Porsche", score: 150 }]
    },
    {
        question: "Which commercial will be shown first, Donald Trump or Michael Bloomberg?", 
        short: 'Trump vs Bloomberg', 
        options: [{ name: "Trump", score: 150 }, { name: "Bloomberg", score: 150 }]
    },
    {
        question: "What will the the first scoring play of the game be?", 
        short: 'First Scoring Play', 
        options: [{ name: "Chiefs Field Goal", score: 2, image:"/images/kc.svg" }, { name: "Chiefs Offensive TD", score: 2, image:"/images/kc.svg" }, { name: "Chiefs Defensive TD", score: 6, image:"/images/kc.svg" }, { name: "49ers Field Goal", score: 2, image:"/images/sf.svg" }, { name: "49ers Offensive TD", score: 2, image:"/images/sf.svg" }, { name: "49ers Defensive TD", score: 6, image:"/images/sf.svg" }]
    },
    {
        question: "What song will be sung first during the halftime show?", 
        short: 'HT Opening Song', 
        options: [
            { name: "Whenever, Wherever (Shakira)", score: 300, embed: "https://www.youtube.com/embed/weRHyjj34ZE" }, 
            { name: "Let's Get Loud (J-Lo)", score: 400, embed: "https://www.youtube.com/embed/Q91hydQRGyM" }, 
            { name: "On The Floor (J-Lo)", score: 500, embed: "https://www.youtube.com/embed/t4H_Zoh7G5A" }, 
            { name: "Dare (Shakira)", score: 600, embed: "https://www.youtube.com/embed/XkYAxGt-aUs" }, 
            { name: "Live It Up (J-Lo)", score: 650, embed: "https://www.youtube.com/embed/BofL1AaiTjo" }, 
            { name: "Other", score: 500 }
        ]
    },
    {
        question: "Will Pitbull Make an Appearance During the Halftime Show?", 
        short: 'Pitbull', 
        options: [{ name: "Yes", score: 100 }, { name: "No", score: 300 }]
    },
    {
        question: "What will the last score of the game be?", 
        short: 'Last Score', 
        options: [{ name: "Touchdown", score: 150 }, { name: "Field Goal or Safety", score: 200 }]
    },
    {
        question: "Who will win Super Bowl LIV MVP?", 
        short: 'MVP', 
        options: [{ name: "Patrick Mahomes (KC QB)", image: "/images/mahomes.png", score: 110 }, { name: "Jimmy Garoppolo (SF QB)", image: "/images/garoppolo.png", score: 200 }, { name: "Raheem Mostert (SF RB)", image: "/images/mostert.png", score: 500 }, { name: "Tyreek Hill (KC WR)", image: "/images/hill.png", score: 1600 }, { name: "Travis Kelce (KC TE)", image: "/images/kelce.png", score: 1600 }, { name: "Other", image: "/images/other.png", score: 1200 }]
    }
];