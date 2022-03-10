/**
 * @jest-environment jsdom
 */

import { countCards } from '../modules/countCards.js';

describe('Test the cards counter', () => {
  test('Test counter with 3 cards', () => {
    document.body.innerHTML = `
    <div id="container">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
    `;
    const counter = countCards();
    expect(counter).toBe(3);
  });

  test('Test counter with 4 cards', () => {
    document.body.innerHTML = `
    <div id="container">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
    `;
    const counter = countCards();
    expect(counter).toBe(4);
  });
});