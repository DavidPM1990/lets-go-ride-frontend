function Freestyle({ freestyle }) {
    if (freestyle) {
        return (<>
            <h5>Freestyle ✓</h5>
        </>)
    } else {
        return (<>
            <h5>Freestyle ✗</h5>
        </>)
    }
}

export default Freestyle