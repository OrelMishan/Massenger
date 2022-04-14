import Contact from "./Contact";

function LowerLeft({data, setContact,setListMessage}) {
    const dataList = data.map((contact,key) => {
            return <Contact contact={contact} setContact={setContact} setListMessage={setListMessage} key={key}/>;
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