export function clearTotal() {
    document
        .querySelectorAll('#total tbody td')
        .forEach(el => el.remove());
}