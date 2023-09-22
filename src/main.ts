import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

const mountPoint = (() => {
  const chart = document.createElement('div');
  chart.id = "pmtk-chart-mark";
  chart.className = "chart";
  
  const mark = document.getElementById("mark");
  if (mark != undefined) {
    const origin = mark.children[0];
    origin.id = "origin-chart-mark";
    origin.setAttribute("style", "display: none;");
    mark.appendChild(chart);
  }

  return chart;
})();

app.use(pinia);
app.mount(mountPoint);
