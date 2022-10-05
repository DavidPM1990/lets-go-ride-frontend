function Searchbar({ eventsCopy, setevents }) {

    const search = (e) => {
        let text = e.target.value
        let results = eventsCopy.filter(event => event.name.toLowerCase().includes(text.toLowerCase()))
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