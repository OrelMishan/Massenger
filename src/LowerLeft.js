import Contact from "./Contact";

function LowerLeft({data, setContact}) {
    const dataList = data.map((contact) => {
            return <Contact contact={contact} setContact={setContact}/>;
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