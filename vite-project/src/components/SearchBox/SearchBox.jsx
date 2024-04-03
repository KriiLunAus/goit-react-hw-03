const SearchBox = ({value, onFilter}) => {
    
    return (
        <>
            <label htmlFor="findContact">Find contacts by name</label>
            <input type="text" id="findContact" value={value} onChange={(evt) => onFilter(evt.target.value)} />
        </>
    )
}
export default SearchBox;