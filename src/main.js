import Vue from 'vue';
import App from './App.vue';

import './assets/css/style.css'

console.log('SEARCHME');
var array = [1,2,3];
Array.from(array).forEach(($item) => {
 console.log($item);
})

new Vue({
  el: '#app',
  render: h => h(App)
})
