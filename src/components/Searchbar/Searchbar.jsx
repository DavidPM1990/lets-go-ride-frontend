function Searchbar({ events, setevents }) {

    const search = (e) => {
        console.log(e.target.value)
        let text = e.target.value

        let results = events.filter(event => event.name.includes(text))
        console.log(results)

        setevents(results)
    }

    return (
        <div>
            <h1>Barra navegacion</h1>
            <input onChange={search} type="text" />
        </div>
    )
}

export default Searchbar;