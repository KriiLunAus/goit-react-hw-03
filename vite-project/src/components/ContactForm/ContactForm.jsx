const ContactForm = ({onAdd}) => {

    const handleSubmit = evt => {
        evt.preventDefault();
        onAdd({
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
            id: Date.now()
        })  
        evt.target.reset();
    }
    
    return (    
        <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input id="name" type="text" />
        <label htmlFor="number"></label>
        <input id="number" type="text" />
        <button type="submit">Add contact</button>
    </form>
</> 
    )
}

export default ContactForm;