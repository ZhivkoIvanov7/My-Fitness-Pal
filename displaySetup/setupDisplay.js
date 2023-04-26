const pages = {
    "start-page": {
        selector: "#start-page",
        display: "block"
    },
    "add-new-food": {
        selector: "#addNewFood-form",
        display: "flex"
    }
}

let activePage = 'start-page';

function displayPage(page) {
    if (pages[page]) {
        document.querySelector(pages[activePage].selector).style.display = 'none';
        document.querySelector(pages[page].selector).style.display = pages[page].display;

        return true;
    } 

    console.error(`Invalid page name: ${page}`)
    return false;
}

export function setActivePage(page) {
    if (displayPage(page)) {
        window.history.pushState(activePage, activePage);

        activePage = page;
    }
}

function onPopState(event) {
    displayPage(event.state ?? 'start-page')

    activePage = event.state;
}

addEventListener("popstate", onPopState)
