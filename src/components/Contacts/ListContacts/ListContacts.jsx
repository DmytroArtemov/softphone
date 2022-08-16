import ItemContact from "./ItemContact/ItemContact";
import "./ListContacts.scss";

const ListContacts = (props) => {

    let contactElements = props.contactsList.map( el => 
        <ItemContact 
            key = {el.id} 
            firstName = {el.first_name} 
            lastName = {el.last_name}
            phone = {el.phone}
            favorite = {el.favorite}
        />
    );

    return(
        <div className="contacts-list-section">
            <ul className="list-contacts">
                {contactElements}
            </ul>
        </div>
    )
}

export default ListContacts;