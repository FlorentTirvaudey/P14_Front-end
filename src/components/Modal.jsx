function Modal({ content, closeModal, buttonStyle, modaleStyle }) {

    return (
        <>
            <div className="overlay"></div>
            <div className={modaleStyle}>
                <span>{content}</span>
                <button className={buttonStyle} onClick={closeModal}>X</button>
            </div>
        </>
    )
};

export default Modal;