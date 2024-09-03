// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

function slideOutHorizontalOpenNav(elementId) {
    let element = document.getElementById(elementId);
    element.style.width = '100vw';
}
function slideOutHorizontalCloseNav(elementId) {
    let element = document.getElementById(elementId);
    element.style.width = '0vw';
}
function slideOutVerticalOpenNav(elementId) {
    let element = document.getElementById(elementId);
    element.style.height = '100vh';
}
function slideOutVerticalCloseNav(elementId) {
    let element = document.getElementById(elementId);
    element.style.height = '0vh';
}
function slideOutFromCornerOpenNav(elementId) {
    let element = document.getElementById(elementId);
    element.style.width = '100vw';
    element.style.height = '100vh';
}
function slideOutFromCornerCloseNav(elementId) {
    let element = document.getElementById(elementId);
    element.style.width = '0vw';
    element.style.height = '0vh';
}
const __default = {
    slideOutHorizontalOpenNav,
    slideOutHorizontalCloseNav,
    slideOutVerticalOpenNav,
    slideOutVerticalCloseNav,
    slideOutFromCornerOpenNav,
    slideOutFromCornerCloseNav
};
export { slideOutHorizontalOpenNav as slideOutHorizontalOpenNav };
export { slideOutHorizontalCloseNav as slideOutHorizontalCloseNav };
export { slideOutVerticalOpenNav as slideOutVerticalOpenNav };
export { slideOutVerticalCloseNav as slideOutVerticalCloseNav };
export { slideOutFromCornerOpenNav as slideOutFromCornerOpenNav };
export { slideOutFromCornerCloseNav as slideOutFromCornerCloseNav };
export { __default as default };

