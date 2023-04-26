import { clearInput } from "./clearInputs/clearInput.js";
import { setActivePage } from "./displaySetup/setupDisplay.js";

export function confirmDialogBox(e) {
    const message = confirm("This product doesn't exist, do you want to add it?");
    if (message) {
        setActivePage('add-new-food');
    } else {
        setActivePage('start-page');
        clearInput();
    }
}