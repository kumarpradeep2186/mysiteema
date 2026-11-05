/*
 * Weather Block
 * A row of forecast tiles. Each block row is one day:
 * day | temperature | optional details (e.g. wind, humidity)
 */

export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const [day, temp, details] = [...row.children];
    const li = document.createElement('li');
    if (day) {
      day.className = 'weather-day';
      li.append(day);
    }
    if (temp) {
      temp.className = 'weather-temp';
      li.append(temp);
    }
    if (details && details.textContent.trim()) {
      details.className = 'weather-details';
      li.classList.add('weather-detailed');
      li.append(details);
    }
    ul.append(li);
  });
  block.replaceChildren(ul);
}
