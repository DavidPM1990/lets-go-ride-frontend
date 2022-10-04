import { useEffect } from "react"

function Searchbar({ eventsCopy, setevents }) {

    const search = (e) => {
        let text = e.target.value
        let results = eventsCopy.filter(event => event.name.includes(text))
        setevents(results)
    }

    useEffect(() => {
        console.log(eventsCopy)
    }, [])

    return (
        <div>
            <h1>Barra navegacion</h1>
            <input onChange={search} type="text" />
        </div>
    )
}

export default Searchbar;