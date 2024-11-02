function Modal({ content, closeModal, buttonStyle, modaleStyle, textStyle, overlayStyle }) {

    return (
        <>
            <div className={overlayStyle}></div>
            <div className={modaleStyle}>
                <span className={textStyle}>{content}</span>
                <button className={buttonStyle} onClick={closeModal}>X</button>
            </div>
        </>
    )
};

export default Modal;