// need to write javascript to update the spacing, blur, base colour
// select all three of the inputs so when they change, we can update the css variables

// selects all the inputs on the page
// this outputs a nodeList (but looks like an array)
// array: has all kinds of methods/prototypes dealing with an array like map, reduce
// nodeList: only has a couple of prototypes: entries, keys, values
const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {
    // console.log(this.value);
    // get the values out of it
    // dataset is an obj that contains all the data attributes from that specific element
    const suffix = this.dataset.sizing || '';
    // console.log(this.dataset);
    // console.log(suffix);
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// listen for a 'change' event on each of the input
// loop over each input
// listen for a change event, and when that is called,
// we run the handleUpdate function
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// as we drag the inputs around, it doesn't record the change
// so we can use mousemove; so when we move over, it triggers a change every time
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));