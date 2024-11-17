function Modal({ content, closeModal, buttonStyle, modaleStyle, textStyle, overlayStyle }) {

    return (
        <>
            <div className={overlayStyle}></div>
            <div role="dialog" aria-labelledby="modal-title" className={modaleStyle}>
                <span className={textStyle}>{content}</span>
                <button className={buttonStyle} onClick={closeModal}>X</button>
            </div>
        </>
    )
};

export default Modal;