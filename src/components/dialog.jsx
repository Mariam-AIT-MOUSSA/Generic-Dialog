import { useState } from "react"
import CustomDialog from "../utilities/customDialog";
import '../styles/styles.css'

export default function DialogExample(){
    const [isDialogOpen, setIsDialogOpen] = useState(false); 

    const [dialogParagraph, setDialogParagraph] = useState('this is a non-blocking dialog; it is possible to continue working on the page behind!')

    function openDialog() {
        setIsDialogOpen(true);
    }
    function closeDialog() {
        setIsDialogOpen(false);
    }

    return (
        <>
            <button className="normal-button" onClick={ openDialog }>Open non-blocking dialog</button>
            <input type="text" class="input-field" placeholder="Enter your text here" onChange={(e) => setDialogParagraph(e.target.value)}/>

            <CustomDialog 
                isOpen={isDialogOpen}
                onClose={closeDialog}
                isModal={false}
                dialogTitle={'dialog example'}
                footer= {
                    <button className="normal-button" onClick={closeDialog}>Save edits (close)</button>
                }
            >
                <p>
                     {dialogParagraph}
                </p>
            </CustomDialog>
        </>
    )
}