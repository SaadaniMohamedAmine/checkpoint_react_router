import React from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom'
import './App.css'

const Home = () => {
    return (
        <div className='App-header'>
            <h3>Welcome in our application !</h3>
            <div>
                <Link to='/moviesList'><button className="btnbtn">Catalogue</button></Link>
                <Link to='/appPolitics'><button className="btnbtn">App politics</button></Link>
            </div>
        </div>
    )
}

export default Home
