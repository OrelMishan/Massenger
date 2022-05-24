import Contact from "./Contact";

function LowerLeft({user,contactList, setContact, setListMessages, prevContact, listMessages}) {

    const dataList = contactList.map((contact, key) => {
            return <Contact contact={contact} setContact={setContact} setListMessages={setListMessages}
                            prevContact={prevContact} username={user} listMessages={listMessages} />;
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