import React from "react"
import Job from "./Job"
import Search from "./Search"



const Home = () => {
    return (
        <React.Fragment>
        <h1>Pro Jobs</h1>
        <Search/>
        <Job/>
        </React.Fragment>
    )
}




export default Home