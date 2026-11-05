/*
 * Tabs Block
 * Each block row is one tab:
 * tab label | panel content | optional panel media (e.g. a map image)
 */

let tabsCount = 0;

function selectTab(tabs, panels, index, focus = false) {
  tabs.forEach((tab, i) => {
    const selected = i === index;
    tab.setAttribute('aria-selected', selected);
    tab.tabIndex = selected ? 0 : -1;
    panels[i].hidden = !selected;
  });
  if (focus) tabs[index].focus();
}

export default function decorate(block) {
  tabsCount += 1;
  const tablist = document.createElement('div');
  tablist.className = 'tabs-list';
  tablist.setAttribute('role', 'tablist');

  const tabs = [];
  const panels = [];
  [...block.children].forEach((row, i) => {
    const [label, content, media] = [...row.children];
    const id = `tabs-${tabsCount}-${i + 1}`;

    // decorate tab button; paragraphs become spans as buttons only allow phrasing content
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'tabs-tab';
    tab.id = `${id}-tab`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', `${id}-panel`);
    [...label.children].forEach((el) => {
      const line = document.createElement('span');
      line.className = el.querySelector('.icon') ? 'tabs-tab-icon' : 'tabs-tab-text';
      line.append(...el.childNodes);
      tab.append(line);
    });
    if (!tab.children.length) tab.textContent = label.textContent.trim();

    // decorate tab panel
    const panel = document.createElement('div');
    panel.className = 'tabs-panel';
    panel.id = `${id}-panel`;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
    if (content) {
      content.className = 'tabs-panel-content';
      panel.append(content);
    }
    if (media && media.children.length) {
      media.className = 'tabs-panel-media';
      panel.append(media);
    }

    tabs.push(tab);
    panels.push(panel);
    tablist.append(tab);
  });

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tabs, panels, i));
    tab.addEventListener('keydown', (e) => {
      const keys = {
        ArrowRight: (i + 1) % tabs.length,
        ArrowLeft: (i - 1 + tabs.length) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      };
      if (e.key in keys) {
        e.preventDefault();
        selectTab(tabs, panels, keys[e.key], true);
      }
    });
  });
  selectTab(tabs, panels, 0);

  block.replaceChildren(tablist, ...panels);
}
