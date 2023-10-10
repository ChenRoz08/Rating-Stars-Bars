import { reviews } from "./reviews.js";

const dataDisplay = document.querySelector("#dataDisplay");
const barsDisplay = document.querySelector("#barsDisplay");

const rates = [...reviews.map((r) => r.rate)];
const sum = rates.reduce((a, b) => (a += b));
const average = Math.round((sum / reviews.length) * 10) / 10;
dataDisplay.textContent = `Average Rating: ${average} (Total of ${reviews.length} votes)`;

for (let i = 1; i < 6; i++) {
  const div = document.createElement("div");
  div.classList.add("single-bar");

  const votes = reviews.filter((vote) => vote.rate === i);
  const percent = Math.round((votes.length / reviews.length) * 100);

  div.innerHTML = `
  <div class="count">${i} &#9733; (${votes.length} votes)</div>
  <div class="bar">
  <div class="progress-bar" style="width: ${percent}%"></div>
  </div>
  <div class="percentage">${percent}%</div>
  `;

  barsDisplay.appendChild(div);
}
