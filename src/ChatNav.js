function ChatNav({name}) {
    return (
        <nav className="navbar-light px-3 sticky-sm-top chat-nav fw-bolder big-text" id="chatNav">
            <img src={"face.jpg"} className="rounded-circle chat-pic" alt="not found image"/>
            {name}
        </nav>
    )
}

export default ChatNav;