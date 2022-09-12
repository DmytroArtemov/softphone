import ItemCall from "./ItemCall/ItemCall";
import "./ListCalls.scss";

const ListCalls = (props) => {
    
    let callsElements = props.callsList.map( el => 
        <ItemCall 
            key = {el.id} 
            name = {el.contact_name} 
            phone = {el.phone}
            destinationType = {el.destination_type}
            type = {el.type}
            status = {el.status}
            date = {el.date}
        />
    );

    return(
        <div className="calls-list-section">
            <ul className="users-call">
                {callsElements}
            </ul>
            
            <div className="link-pbx">
                <a href="/">View all on PBX</a>
            </div>
        </div>
    )
}

export default ListCalls;