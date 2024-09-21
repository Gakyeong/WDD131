const themeSelector = document.querySelector('#select')
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
const current = themeSelector.value;
// if the value is dark then:
if (current === 'Dark'){
// add the dark class to the body
    document.body.classList.add('Dark')
// change the source of the logo img to point to the white logo.
    document.querySelector('footer img').src = 'byui-logo_white.png';
}
// otherwise
else{
// remove the dark class
    document.body.classList.remove('Dark')
// make sure the logo src is the blue logo.
    document.querySelector('footer img').src = "byui-logo_blue.webp";

}
}
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);