import React from 'react'
import Scrollspy from 'react-scrollspy'
import EntryForm from "../components/entryform"
import Layout from '../components/layout'


let qs = [
    {question: "National Anthem", extrainfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut orci a magna bibendum cursus. Donec semper diam et dui suscipit, ut blandit purus pharetra. Maecenas vitae est sed nisl finibus dictum. Aliquam maximus risus at turpis mattis, at fermentum lacus fringilla. Nunc lectus erat, aliquet ut mauris vel, consectetur gravida est. Morbi metus arcu, efficitur nec dictum non, porttitor eu nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lacus neque, mattis et ornare sed, aliquam porttitor mi. Curabitur ut leo tellus.", config: {placeholder: "H:M"}}, 
    {question: "How old are you?"}, 
    {question: "Where do you live?"},
    {question: "What will the opening coin toss land on?", short: 'Coin Toss', options: [{name: "Heads", score: 1}, {name: "Tails", score: 1}]},
    {question: "What will Gladys Knight wear while singing the national anthem?", short: 'Gladys Knight Wear', options: [{name: "Dress or Skirt", score: 1}, {name: "Pants or shorts", score: 2}]},
    {question: "What song will Maroon 5 open with during the halftime show?", short: 'HT Opening Song', options: [{name: "One More Night", score: 3}, {name: "Makes Me Wonder", score: 3}, {name: "Animals", score: 5}, {name: "Don't Wanna Know", score: 6}, {name: "Girls Like You", score: 6}, {name: "Other", score: 5}]},
    {question: "Will Adam Levine (lead singer for Maroon 5) wear a leather jacket during the halftime show?", short: 'Adam Levine Leather Jacket', options: [{name: "Yes", score: 1}, {name: "No", score: 2}]},
    {question: "What will the last score of the game be?", short:'Last Score', options: [{name: "Touchdown", score: 1}, {name: "Field Goal or Safety", score: 2}]},
    {question: "What will the the first scoring play of the game be?", short: 'First Scoring Play', options: [{name: "Patriots Field Goal", score: 2}, {name: "Patriots Offensive TD", score: 2}, {name: "Patriots Defensive TD", score: 6}, {name: "Rams Field Goal", score: 2}, {name: "Rams Offensive TD", score: 2}, {name: "Rams Defensive TD", score: 6}, {name: "Either team safety", score: 8}]},
    {question: "During the first Doritos commercial, what color will the first bag shown be?", short: 'Doritos Bag Color', options: [{name: "Red", score: 1}, {name: "Blue", score: 1}, {name: "Purple", score: 2}, {name: "Yellow", score: 3}, {name: "Other", score: 2}]},
    {question: "Will the phrase 'Greatest of All Time' be said by Jim Nantz or Tony Romo during the game?", short: '"Greatest of All Time" Said', options: [{name: "Yes", score: 1}, {name: "No", score: 1}]},
    {question: "Who will win Super Bowl LIII MVP?", short: 'MVP', options: [{name: "Tom Brady (NE QB)", score: 1}, {name: "Jared Goff (LAR QB)", score: 1}, {name: "Sony Michel (NE RB)", score: 7}, {name: "Todd Gurley (LAR RB)", score: 7}, {name: "Aaron Donald (LAR DL)", score: 10}, {name: "Julian Edelman (NE WR)", score: 10}, {name: "Other", score: 6}]}
];

const Home = () => (
    <Layout>
        <div className="jumbotron jumbotron-fluid bg-primary text-white">
            <div className="container">
                <h1 className="display-4">Entry Form</h1>
            </div>
        </div>

        <div className="container mt-3">
            <div className="row">
                <div className="col-3">
                    <div id="form-sidebar" className="flex-column list-group" style={{position: "sticky", top: "75px"}}>
                        <Scrollspy items={ [{question: "Score"}, {question: "Yards"}, ...qs].map(q => `${q.question.toLowerCase().replace(/( |\W)/g, '')}`) } currentClassName="active">
                            {[{question: "Score"}, {question: "Yards"}, ...qs].map(q => (
                                <a className="list-group-item list-group-item-action" href={`#${q.question.toLowerCase().replace(/( |\W)/g, '')}`}>{!!q.short ? q.short : q.question}</a>
                            ))}
                        </Scrollspy>
                    </div>
                </div>
                <div className="col">
                    <EntryForm questions={qs} />
                </div>
            </div>
            
        </div>

        
    </Layout>
)

export default Home
