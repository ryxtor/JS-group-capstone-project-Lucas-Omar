/**
 * @jest-environment jsdom
 */

describe('testing the comments counts', () => {
  test('fisrt test', () => {
    document.body.innerHTML = `
    <h3 data-item-id="1">Comments (0)</h3>
      <ul data-id="1">
        <li>comment 1</li>
        <li>comment 2</li>
        <li>comment 3</li>
      </ul>
    `;
    const ul = document.querySelector('[data-id="1"]');
    expect(ul.childElementCount).toBe(3);
  });
});
