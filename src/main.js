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

/*
Enhanced Object Literals - 향상된 객체 리터럴
1) 객체의 속성을 메서드로 사용할 때 function 예약어를 생략하고 생성 가능
- ES5
var dictionary = {
  lookup: function() {
    console.log('found sth');
  }
}

- ES6
var dictionary1 = {
  lookup() {
    console.log('found sth');
  }
}

2) 객체의 속성명과 값 명이 동일할 때 아래와 같이 축약 가능
var figures = 10;
- ES5
var dictionary = {
  figures: figures
}

- ES6
var dictionary1 = {
  figures
}
*/