import axios from "axios"
import React from "react"





const Job = () => {
    const [jobs, setjobs] = React.useState()

    const fetchjobs = async () => {
        try {
            const api = await axios.get("https://jobs.github.com/positions.json")
            console.log(api);

        } catch (error) {
            console.log(error.message);
        }
    }

    React.useEffect(() => {
        fetchjobs()
    }, [])

    return null
}

export default Job