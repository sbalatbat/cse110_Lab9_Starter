let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }
    catch (error) {
        console.error(error);
        alert(`${error.name}: ${error.message}`);
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here

const container = document.querySelector("#error-btns");
const label = "Grouped logs";
const arr = [
    {
        name: 'Mary',
        item: 'Lamb'
    },
    {
        name: 'Sarah',
        item: 'Knife'
    },
    {
        name: 'Hannah',
        item: 'Sun'
    }
];
const timer = "Timer";
const first = () => { second(); };
const second = () => { third(); };
const third = () => { fourth(); };
const fourth = () => { console.trace(); };

container.addEventListener('click', event => {
    switch (event.target.innerText) {
        case 'Console Log':
            console.log("Testing log functionality.");
            break;
        case 'Console Error':
            console.error("An error has been triggered.");
            break;
        case 'Console Count':
            console.count("Count demo");
            break;
        case 'Console Warn':
            console.warn("A warning has been issued.");
            break;
        case 'Console Assert':
            let firstNum = document.querySelector('#first-num').value;
            let secondNum = document.querySelector('#second-num').value;
            let reason = "Unequal input numbers.";
            console.assert(firstNum == secondNum, {firstNum, secondNum, reason});
            break;
        case 'Console Clear':
            console.clear();
            break;
        case 'Console Dir':
            console.dir(document.head);
            break;
        case 'Console dirxml':
            console.dirxml(document);
            break;
        case 'Console Group Start':
            console.group(label);
            break;
        case 'Console Group End':
            console.groupEnd(label);
            break;
        case 'Console Table':
            console.table(arr);
            break;
        case 'Start Timer':
            console.log("Starting timer...");
            console.time(timer);
            break;
        case 'End Timer':
            console.timeEnd(timer);
            break;
        case 'Console Trace':
            first();
            break;
        // case 'Trigger a Global Error':
    }
})