function Loady () {

const elem = "The current time is:"
let timey = new Date().toLocaleTimeString();

elem = elem + timey;

ReactDOM.render(
elem,
document.getElementById('root')
);
}