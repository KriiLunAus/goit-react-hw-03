import Contact from "../Contact/Contact";

const ContactList = ({contacts, onDelete}) => {
    return (
        <>
        <ul>
                
                {contacts.map(contact => {
                    return (
                        <Contact key={contact.id} {...contact} onDelete={onDelete} />
                    
                )
            })}
                
        </ul>
        </>
    )
}

export default ContactList;