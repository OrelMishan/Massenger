function LowerLeft() {

    return (
        <div>

            <div className="lower-left">

                <div className="list-group">
                    <a className="list-group-item">
                        <div className="d-flex w-100 justify-content-between"><a href="#">
                            <img className="rounded-circle contact-pic"
                                 src={require("./face.jpg")}></img>
                        </a>
                            <h5 className="mb-1 big-text">David</h5>
                            <small className="text-muted date-text">This will be the date</small>
                        </div>
                        <p className="mb-1 message-peak-text">This will be the message</p>
                    </a>



                    <a className="list-group-item">
                        <div className="d-flex w-100 justify-content-between"><a href="#">
                            <img className="rounded-circle contact-pic"
                                 src={require("./face.jpg")}></img>
                        </a>
                            <h5 className="mb-1 big-text">David</h5>
                            <small className="text-muted date-text">This will be the date</small>
                        </div>
                        <p className="mb-1 message-peak-text">This will be the message</p>
                    </a>

                </div>


            </div>
        </div>
    )
}
export default LowerLeft