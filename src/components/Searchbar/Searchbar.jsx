import "./Searchbar.css";

function Searchbar({ eventsCopy, setevents }) {

    const search = (e) => {
        let text = e.target.value
        let results = eventsCopy.filter(event => event.name.toLowerCase().includes(text.toLowerCase()))
        setevents(results)
    }

    return (

        <div class="search-box">
            <button class="btn-search"><i class="fas fa-search">🔍</i></button>
            <input type="text" class="input-search" onChange={search} placeholder="Type to Search..." />
        </div>

        // <div className='searchbar'>
        //     <input placeholder="search..." className='searchbarSet' onChange={search} type="text" />
        // </div>
    )
}
export default Searchbar;

