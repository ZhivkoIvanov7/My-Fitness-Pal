
const navbarSelector = "#navigation";

const searchBtnSelector = '#search-form';

const pages = {
    "start-page": {
        selector: "#start-page",
        display: "block",
        navbarVisible: true,
        searchBtnVisible: true
    },
    "add-food-page": {
        selector: "#add-food-page",
        display: "block",
        navbarVisible: false,
    },
    "add-new-food": {
        selector: "#addNewFood-form",
        display: "flex",
        navbarVisible: false
    },
    "diary-page": {
        selector: "#diary-page",
        display: "block",
        navbarVisible: true
    },
    "newsfeed-page": {
        selector: "#newsfeed-page",
        display: "block",
        navbarVisible: true
    },
    "plans-page": {
        selector: "#plans-page",
        display: "block",
        navbarVisible: true
    }

}

let activePage = "start-page";

function displayPage(page) {
    if (pages[page]) {
        document.querySelector(pages[activePage].selector).style.display = 'none';
        document.querySelector(pages[page].selector).style.display = pages[page].display;

        if (pages[page].navbarVisible) {
            document.querySelector(navbarSelector).style.display = 'block';
        } else {
            document.querySelector(navbarSelector).style.display = 'none';
        }

        if(pages[page].searchBtnVisible){
            document.querySelector(searchBtnSelector).style.display = 'block';
        } else {
            document.querySelector(searchBtnSelector).style.display = 'none';
        }

        return true;
    } 

    console.error(`Invalid page name: ${page}`);
    return false;
}

export function setActivePage(page) {
    if (displayPage(page)) {
        window.history.pushState(activePage, activePage);

        activePage = page;
    }
}

function onPopState(event) {
    const page = event.state ?? "start-page";

    displayPage(page);

    activePage = page;
}

addEventListener("popstate", onPopState);