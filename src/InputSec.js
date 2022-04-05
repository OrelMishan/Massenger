function InputSec({text, type, id}) {
    return (
        <div className="big-text">
            <span>{text}</span>
            <input type={type} className="form-control" id={id}></input>
        </div>
    )
}

export default InputSec;