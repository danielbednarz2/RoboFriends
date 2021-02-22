import React, { useState, useEffect } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'

const App = () => {
    const [ search, setSearch ] = useState("");
    const [ robots, setRobots ] = useState([])

    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setRobots(users))
      }, [])

    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(search.toLowerCase())
    })

    return (!robots.length) ?
        <h1>Loading...</h1> :
        (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox value = {search} searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
}

export default App