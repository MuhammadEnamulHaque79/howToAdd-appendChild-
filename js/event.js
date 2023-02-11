// console.log('Yes, you can! go ahead');

// function makeRed() {
//     document.body.style.backgroundColor = 'yellow';
// }
//important;
function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}
//options-3;
const colorized = document.getElementById('makePurple');
// console.log(colorized);
colorized.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

const redButton = document.getElementById('makeRed');
redButton.onclick = function () {
    document.body.style.backgroundColor = 'red';
};

const makeGreen = document.getElementById('makeGreen');
makeGreen.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

//final event;
document.getElementById('makeGolden').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})