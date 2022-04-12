import InputSec from "./InputSec";

function AddNewContact({closeModel}) {
    return (
        <div className="modelContainer">
            <div id="app" className="shadow-lg p-3 mb-5 bg-white rounded modelBackground">
                <line>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                    closeModel(false)
                }}></button>
                <div>
                    <div className="big-text">Add New Contact</div>
                </div>
                </line>

                <div className="input-group">
                    <input type="text" className="form-control rounded" placeholder="Contact's Username"/>
                    <button className="btn btn-primary big-text" type="submit" onClick={() => {
                        closeModel(false)
                    }}>Add</button>
                </div>

            </div>

        </div>

    )
}

export default AddNewContact;