import { clearInput } from "./clearInputs/clearInput.js";
import { setupInitialDisplay } from "./displaySetup/setupInitialDisplay.js";
import { setupAddNewFoodDisplay } from "./displaySetup/setupAddNewFoodDisplay.js";

export function confirmDialogBox(e) {
    const message = confirm("This product doesn't exist, do you want to add it?");
    if (message) {
        setupAddNewFoodDisplay();
    } else {
        setupInitialDisplay();
        clearInput();
    }
}