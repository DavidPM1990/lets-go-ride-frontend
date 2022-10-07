import "./Searchbar.css";

function Searchbar({ eventsCopy, setevents }) {

    const search = (e) => {
        let text = e.target.value
        let results = eventsCopy.filter(event => event.name.toLowerCase().includes(text.toLowerCase()))
        setevents(results)
    }

    return (

        <div className="search-box">
            <button className="btn-search"><i className="fas fa-search">🔍</i></button>
            <input type="text" className="input-search" onChange={search} placeholder="Type to Search..." />
        </div>
    )
}
export default Searchbar;

