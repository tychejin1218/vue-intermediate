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


/*
Vuex란?
  - 무수히 많은 컴포넌트의 데 이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
  - React의 Flux 패턴에서 기인함
  - Vue.js 중고급 개발자로 성장하기 위한 필수 관문

Flux란?
  - MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴 (Unidirectional data flow)
    Action -> Dispatcher -> Model -> View
    1. action : 화면에서 발생하는 이벤트 또는 사용자의 입력 
    2. dispatcher : 데이터를 변경하는 방법, 메서드
    3. model : 화면에 표시할 데이터
    4. view : 사용자에게 비취지는 화면

MVC 패턴과 Flux 패턴 비교
  1. MVC 패턴
    Controller -> Model <-> view
  2. Flux 패턴
    Action -> Dispatcher -> Model -> View

MVC 패턴의 문제점
  - 기능 추가 및 변경에 따라 생기는 문제점을 예측할 수 없음. (예) 페이스북 채팅 화
  - 앱이 복잡해지면서 생기는 업데이트 루프

Flux 패턴의 단방향 데이터 흐름
  - 데이터의 흐름이 여러 갈래로 나뉘지 않고 단방향으로만 처리
*/

/*
Vuex가 왜 필요할까?
  - 복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트 간에 데이터 전달이 어려워진다.

이벤트 버스로 해결?
  - 어디서 이벤트를 보냈는지 혹은 어디서 이벤트를 받았는지 알기 어려움
  - 컴포넌트 간 데이터 전달이 명시적이지 않음

Vuex로 해결할 수 있는 문제
  1. MVC 패턴에서 발생하는 구조적 오류
  2. 컴포넌트 간 데이터 전달 명시
  3. 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 대 동기화 문제

Vuex 컨셉
  - State : 컴포넌트 간에 공유하는 데이터 data() 
  - View : 데이터를 표시하는 화면 template
  - Action : 사용자의 입력에 따라 데이터를 변경하는 methods

Vuex 구조
  - 컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태
*/