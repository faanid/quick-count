import { formatNumber } from "../utils/format.js";
import { saveCount, loadCount, saveHistory, loadHistory } from "../utils/storage.js";

export default class Counter {
  constructor(elementId, storageKey = "counterValue", formatFn = formatNumber, historyKey = "saveHistory") {
    this.countEl = document.getElementById(elementId);
    this.storageKey = storageKey;
    this.historyKey = historyKey;
    this.formatFn = formatFn;
    this.count = loadCount(this.storageKey);
    this.history = loadHistory(this.historyKey);

    this.updateDisplay();
    this.loadSavedHistory();
  }

  increment() {
    this.count++;
    this.updateDisplay();
    saveCount(this.count, this.storageKey);
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
    this.updateDisplay();
    saveCount(this.count, this.storageKey);
  }

  save(saveEl) {
    const formattedCount = this.formatFn(this.count);
    saveEl.textContent += formattedCount + " - ";
    this.history.push(formattedCount);
    saveHistory(this.history, this.historyKey);
    this.reset();
  }

  reset() {
    this.count = 0;
    this.updateDisplay();
    saveCount(this.count, this.storageKey);
  }

  updateDisplay() {
    this.countEl.textContent = this.formatFn(this.count);
    this.countEl.style.color = this.count > 0 ? "darkgreen" : "black";
  }

  loadSavedHistory() {
    const saveEl = document.getElementById("save-el");
    saveEl.textContent = this.history.map((num) => num + " - ").join("");
  }
}
