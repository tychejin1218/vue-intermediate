import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


/*
화살표 함수 실습

- ES5
var arr = [1, 2, 3];
arr.forEach(function(value){
	console.log(value);
});

- ES6
var arr = [1, 2, 3];
arr.forEach((value) => {
	console.log(value);
});

- ES5
var sum = function() {
  return 10 + 20;
};

- ES6
var sum = () => {
  return 10 + 20;
};
*/