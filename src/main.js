import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDkYcITJHznTlVqbroQbZBqDk8UTivrWrA",
  authDomain: "for-test-firebase.firebaseapp.com",
  databaseURL: "https://for-test-firebase.firebaseio.com",
  projectId: "for-test-firebase",
  storageBucket: "for-test-firebase.appspot.com",
  messagingSenderId: "951272108176"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
