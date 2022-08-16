import "./ItemContact.scss";

const ItemContact = (props) => {
    return(
        <li className="item-contact">
            <div className="client">
                <p className="phone">{props.phone}</p>
                <span className="name">{props.firstName} {props.lastName}</span>
            </div>
            { props.favorite 
            ? 
                <div className={props.favorite ? "favorite" : "not"}>
                    <div className="icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.33863 1.28355L4.74245 4.51989L1.17123 5.04055C0.530809 5.13343 0.27415 5.92296 0.73858 6.37517L3.32228 8.89287L2.71118 12.4494C2.60119 13.0923 3.27828 13.5738 3.84537 13.2732L7.04016 11.5939L10.235 13.2732C10.802 13.5714 11.4791 13.0923 11.3691 12.4494L10.758 8.89287L13.3417 6.37517C13.8062 5.92296 13.5495 5.13343 12.9091 5.04055L9.33787 4.51989L7.74169 1.28355C7.4557 0.706681 6.62706 0.699348 6.33863 1.28355Z" fill="#FFC754"/></svg></div>
                </div> 
            : 
                false
            }
            <div className="get-call">
                <div className="icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 0.960383L15.2106 0.0228834C14.7692 -0.0786792 14.3161 0.15179 14.1364 0.565852L12.2614 4.94085C12.0973 5.32367 12.2067 5.77288 12.5309 6.0346L14.8981 7.9721C13.4919 10.9682 11.0348 13.4604 7.97624 14.894L6.03874 12.5268C5.77311 12.2026 5.3278 12.0932 4.94499 12.2573L0.569987 14.1323C0.152018 14.3159 -0.0784506 14.769 0.023112 15.2104L0.960612 19.2729C1.05827 19.6948 1.43327 19.9994 1.87467 19.9994C11.8786 19.9994 19.9997 11.894 19.9997 1.87445C19.9997 1.43695 19.6989 1.05804 19.2731 0.960383Z" fill="currentColor"/></svg></div>
            </div>
        </li>
    )
}

export default ItemContact;