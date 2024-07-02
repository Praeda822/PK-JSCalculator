"use strict";

class Calculator {
  constructor(displayElementId) {
    this.displayElement = document.getElementById(displayElementId);
    this.init();
  }

  appendToDisplay(input) {
    this.displayElement.value += input;
  }

  clearDisplay() {
    this.displayElement.value = "";
  }

  calculate() {
    try {
      this.displayElement.value = eval(this.displayElement.value);
    } catch (err) {
      this.displayElement.value = "Error";
    }
  }

  init() {
    document.querySelectorAll(".number-btn").forEach((button) => {
      button.addEventListener("click", () =>
        this.appendToDisplay(button.textContent)
      );
    });

    document.querySelectorAll(".operator-btn").forEach((button) => {
      button.addEventListener("click", () =>
        this.appendToDisplay(button.textContent)
      );
    });

    document
      .getElementById("equals-btn")
      .addEventListener("click", () => this.calculate());
    document
      .getElementById("clear-btn")
      .addEventListener("click", () => this.clearDisplay());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Calculator("display");
});
