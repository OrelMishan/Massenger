function ChatNav({name, image}) {
    let hide = true;
    if (image !== "") {
        hide = false;
    }
    return (
        <nav className="navbar-light px-3 sticky-sm-top chat-nav fw-bolder big-text" id="chatNav">
            <img src={image} className={`rounded-circle chat-pic`} hidden={hide} alt="not found image "/>
            {name}
        </nav>
    )
}

export default ChatNav;
