const Contact = ({id,name, number, onDelete}) => {
    return (<>
    <li id={ id }>
        <p>{ name }</p>
        <p>{ number }</p>
    </li>
    <button onClick={()=> onDelete(id)}>Delete</button>
    </>)
}

export default Contact;