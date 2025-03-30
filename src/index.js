import Counter from "./components/Counter";
import './components/theme-switch'

const counter = new Counter("count-el");
const saveEl = document.getElementById("save-el");
document.getElementById("increment-btn").addEventListener("click", () => counter.increment());
document.getElementById("decrement-btn").addEventListener("click", () => counter.decrement());
document.getElementById("increment-plusbtn").addEventListener("click", () => counter.incrementBy5());
document.getElementById("save-btn").addEventListener("click", () => counter.save(saveEl));
document.getElementById("reset-btn").addEventListener("click", () => counter.reset());
document.getElementById("reset-all-btn").addEventListener("click", () => counter.resetAll());


