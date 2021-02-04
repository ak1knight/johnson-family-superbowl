
export const periodNames = ["Quarter 1", "Quarter 2", "Quarter 3", "Final"];
export const tiebreakers = {"2021": {"Quarter 1": "Chiefs Passing Yards", "Quarter 2": "Buccaneers Rushing Yards", "Quarter 3": "Combined Penalty Yards"}}
export const teams = { "2020": [{ name: "Chiefs", icon: "/images/kc.svg" }, { name: "49ers", icon: "/images/sf.svg" }], "2021": [{ name: "Chiefs", icon: "/images/kc.svg" }, { name: "Buccaneers", icon: "/images/tb.svg" }] };
export let questions = {
    "2020": [
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
            options: [{ name: "Chiefs Field Goal", score: 200, image: "/images/kc.svg" }, { name: "Chiefs Offensive TD", score: 200, image: "/images/kc.svg" }, { name: "Chiefs Defensive TD", score: 600, image: "/images/kc.svg" }, { name: "49ers Field Goal", score: 200, image: "/images/sf.svg" }, { name: "49ers Offensive TD", score: 200, image: "/images/sf.svg" }, { name: "49ers Defensive TD", score: 600, image: "/images/sf.svg" }]
        },
        {
            question: "Which will be higher?",
            short: 'James Harden',
            extrainfo: 'James Harden has averaged 36 points per game for the Houston Rockets so far this season. San Francisco has avaraged 15 points per half, while Kansas City has averaged 14.',
            options: [{ name: "James Harden Total Points vs the New Orleans Pelicans", score: 100 }, { name: "Total points scored in the first half by both teams", score: 300 }]
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
            options: [
                { name: "Patrick Mahomes (KC QB)", image: "/images/mahomes.png", score: 110 }, 
                { name: "Jimmy Garoppolo (SF QB)", image: "/images/garoppolo.png", score: 200 }, 
                { name: "Raheem Mostert (SF RB)", image: "/images/mostert.png", score: 500 }, 
                { name: "Tyreek Hill (KC WR)", image: "/images/hill.png", score: 1600 }, 
                { name: "Travis Kelce (KC TE)", image: "/images/kelce.png", score: 1600 }, 
                { name: "Other", image: "/images/other.png", score: 1200 }
            ]
        }
    ],
    "2021": [
        
        {
            question: "How long will it take Eric Church and Jazmine Sullivan to sing the National Anthem?",
            short: "National Anthem",
            extrainfo: `For just the second time in the history of the big game the Star Spangled Banner will be a duet with Jazmine Sullivan and Eric Church.
        Jazmine Sullivan has sung the Anthem for sporting events on a couple of occasions, both clocking in well under 2 minutes. Eric Church, meanwhile, has not performed the song previously.
        Having a duet also brings a new wrinkle to predicting the song length and it's not clear how the two singers will split the responsibility.
        The only other anthem duet with Aretha Franklin and Aaron Neville went a longer 2:10 with both singers trading lines.
        The anthem has been shorter than 2 minutes for 3 straight super bowls after a string of 2+ minute performances.`,
            config: {
                placeholder: "M:SS"
            }
        },
        {
            question: "What will the opening coin toss land on?",
            short: 'Coin Toss',
            extrainfo: 'Since the first Super Bowl, HEADS has come up 25 times and TAILS 28. The winner of the Super Bowl has won the coin toss 24 times with HEADS coming up 12 times.',
            options: [{ name: "Heads", score: 100 }, { name: "Tails", score: 100 }]
        },
        {
            question: "What will the the first play of the game be?",
            short: 'First Play',
            options: [{ name: "Run", score: 85 }, { name: "Pass", score: 100 }]
        },
        {
            question: "Which team will score first?",
            short: 'First Score',
            options: [{ name: "Kansas City", score: 90, image: "/images/kc.svg" }, { name: "Tampa Bay", score: 100, image: "/images/tb.svg" }]
        },
        {
            question: "What will be mentioned first?",
            short: 'Tom Brady',
            extrainfo: 'Excludes halftime and commercials.',
            options: [{ name: "Tom Brady's Age (43)", score: 105 }, { name: "Tom Brady’s 10th Super Bowl", score: 90 }]
        },
        {
            question: "What will happen to the price of Bitcoin during the Super Bowl?",
            short: 'Bitcoin',
            extrainfo: 'Bet is on the Price at the beggining of the game compared to the price at games end, bitcoinaverage.com will be used to settle disputes.',
            options: [{ name: "Price of Bitcoin goes up", score: 90 }, { name: "Price of Bitcoin goes down", score: 100 }]
        },
        {
            question: "What song will be sung first during the halftime show?",
            short: 'HT Opening Song',
            extrainfo: 'Warning: Music videos may contain explicit content',
            options: [
                { name: "Starboy", score: 225, embed: "https://www.youtube.com/embed/34Na4j8AVgA" },
                { name: "Blinding Lights", score: 250, embed: "https://www.youtube.com/embed/4NRXx6U8ABQ" },
                { name: "Can't Feel My Face", score: 265, embed: "https://www.youtube.com/embed/KEI4qSrkPAs" },
                { name: "In Your Eyes", score: 275, embed: "https://www.youtube.com/embed/dqRZDebPIGs" },
                { name: "Other", score: 250 }
            ]
        },
        {
            question: "Will Ariana Grande be on stage during the halftime show?",
            short: 'Ariana Grande',
            extrainfo: `The Weeknd is featured in "Off the Table" from Ariana Grande's latest album, released in October`,
            options: [{ name: "Yes", score: 205 }, { name: "No", score: 80 }]
        },
        {
            question: "Will Any TD Be Overturned By Replay?",
            short: 'Replay',
            extrainfo: 'In 2018 49% of all plays challenged by coaches were overturned. In the NFL all scoring plays are automatically reviewed by replay officials without needing to be challenged.',
            options: [{ name: "Yes", score: 140 }, { name: "No", score: 90 }]
        },
        {
            question: "Who will win Puppy Bowl XVII?",
            short: 'Puppy Bowl',
            options: [{ name: "Team Fluff", score: 100 }, { name: "Team Ruff", score: 100 }]
        },
        {
            question: "Who will win Super Bowl LV MVP?",
            short: 'MVP',
            options: [
                { name: "Patrick Mahomes (KC QB)", image: "/images/mahomes2.webp", score: 95 }, 
                { name: "Tom Brady (TB QB)", image: "/images/brady.webp", score: 150 }, 
                { name: "Other", score: 200 }
            ]
        }
    ]
};