import '../styles/dialogStyles.css';

export default function CustomDialog({ isOpen, onClose, isModal, dialogTitle, footer, children }) {

    if (!isOpen) return null;

    return (
        <>
            <div id="dialog" class={isModal ? "dialog" : "floating-dialog"}>
                <div class="dialog-content">
                    {!isModal && <div className='dialog-header'>
                        <h1 className="modal-title">{dialogTitle}</h1>
                        <button onClick={onClose} className='dialog-close'>&times;</button>
                    </div>}
                    {children}
                    {footer}
                </div>
            </div>
        </>
    )
}