import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import EntryForm from "../components/entryform"
import Question from "../components/question"

let qs = [{question: "How old are you?"}, {question: "Where do you live?"}];

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
    crossorigin="anonymous" />
    </Head>

    <Nav />

    <div className="container mt-3">
        <EntryForm questions={qs} />
    </div>
  </div>
)

export default Home
