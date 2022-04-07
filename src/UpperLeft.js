function UpperLeft() {
    return (
        <div className="upper-left-main in">
            <div className="sticky-sm-top upper-left big-text">
                <img src={require("./face.jpg")} className="rounded-circle my-photo" alt="not found image"/>
                David Monheit
                <button className="new-contact"><i className="bi bi-person-plus-fill"></i></button>
            </div>
            <div className="input-group my-search">
                <input type="text" className="form-control rounded" placeholder="Search"/>
                <button className="btn btn-primary big-text" type="submit">Search</button>
            </div>
        </div>
    );
}
export default UpperLeft