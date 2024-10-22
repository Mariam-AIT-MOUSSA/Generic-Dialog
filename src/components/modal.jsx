import { useState } from "react";
import CustomDialog from "../utilities/customDialog";
import '../styles/styles.css'

export default function ModalSample() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }
    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <>
            <button className="normal-button" onClick={openModal}>Open blocking modal</button>

            <CustomDialog
                isOpen={isModalOpen}
                isModal={true}
                footer={
                    <div className="footer-buttons">
                        <button className="normal-button" >No</button>
                        <button className="blue-button" onClick={closeModal}>Yes</button>
                    </div>
                }
            >
                <p>
                    this is a blocking dialog; it is NOT possible to continue working on the page behind!
                    you want to turn back to the page ? 
                </p>
            </CustomDialog>
        </>
    )
}