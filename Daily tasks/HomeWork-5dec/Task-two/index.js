let age = window.prompt('Enter your age');
let underage = React.createElement(
    'h1', null, ` You are underage. you will be adult after ${18 - age}`

);

let normal = React.createElement(
    'h1', null, `you are adult`
);

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(age >= 18 ? normal : underage);