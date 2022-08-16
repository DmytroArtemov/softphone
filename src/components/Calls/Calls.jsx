import React from "react";
import './Calls.scss';
import Search from "../UI/Search/Search";
import ListCalls from "./ListCalls/ListCalls";
import ProfileCalls from "./ProfileCalls/ProfileCalls";

const Calls = (props) => {
    return(
        <>
            <section className="left-bar">
                <Search/>
                <ListCalls callsList={props.callsList} addCalls={props.addCalls} />
            </section>

            <ProfileCalls />
        </>
    )
}

export default Calls;