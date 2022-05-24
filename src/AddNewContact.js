import {useRef} from "react";

function AddNewContact({closeModel, setContactList, user}) {
    const textInput = useRef(null);
    const server = useRef(null);
    const addContact = async () => {
        if (user === textInput.current.value) {
            textInput.current.value = "";
            alert("Username is not valid, please try again");
            return;
        }
        let res = await fetch('http://'+server.current.value+'/api/invitations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: user,
                to: textInput.current.value,
                server: 'localhost:5108'
            })
        });
        if (res.ok) {
            res = await fetch('http://localhost:5108/api/contacts?username=' + user, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: textInput.current.value,
                    name: textInput.current.value,
                    server: server.current.value
                })
            });
            if (res.ok) {
                res = await fetch('http://localhost:5108/api/contacts?username=' + user, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await res.json();
                setContactList(data);
                closeModel(false);
            } else alert("Username already exist, please try again");
        } else {
            alert("Username does not exist, please try again")
        }

    }

    // const addPhoto = (event) => {
    //     event.preventDefault();
    //     urlPhoto = URL.createObjectURL(event.target.files[0]);
    // }

    return (
        <div className="modelContainer">
            <div id="" className="shadow-lg p-3 mb-5 rounded modelBackground">
                <line>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                        closeModel(false)
                    }}/>
                    <div>
                        <div className="big-text">Add New Contact</div>
                    </div>
                </line>

                <div className="input-group">
                    <div>
                        {/*<input type="file" accept="image/*" hidden={true} ref={fileInput} onChange={addPhoto}/>*/}
                        {/*<button className="btn btn-primary" id="transparent-btn"*/}
                        {/*        onClick={() => {*/}
                        {/*            fileInput.current.click();*/}
                        {/*        }}>*/}
                        {/*    <i className="bi bi-paperclip"/>*/}
                        {/*</button>*/}
                    </div>
                    <input type="text" className="form-control rounded" placeholder="Contact's Username"
                           ref={textInput}/>
                    <input type="text" className="form-control rounded" placeholder="Contact's Server"
                           ref={server}/>
                    <button className="btn btn-primary big-text" type="submit" onClick={addContact}>Add
                    </button>
                </div>

            </div>

        </div>

    )
}

export default AddNewContact;