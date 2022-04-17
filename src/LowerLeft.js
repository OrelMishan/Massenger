import Contact from "./Contact";

function LowerLeft({user, setContact, setListMessage, prevContact, listMessage}) {
    const dataList = user.data.map((contact, key) => {
            return <Contact contact={contact} setContact={setContact} setListMessage={setListMessage}
                            prevContact={prevContact} username={user.username} listMessage={listMessage} key={key}/>;
        }
    )
    return (
        <div>

            <ul className="lower-left list-group list-group-flush">
                {dataList}
            </ul>
        </div>
    )
}

export default LowerLeft