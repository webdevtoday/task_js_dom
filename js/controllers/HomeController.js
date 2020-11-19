export default class {
    constructor() {
        console.log('Home Controller is ready');
    }

    get() {
        return `
            <h1 class='title title--underline'>Welcome to:</h1>
            
            <h2 class='title'>Task: JS DOM</h2>
            <p>Any text</p>
        `;
    }
}