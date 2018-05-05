import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  count: 0,
  posts: [
    {
      author: {
        avatar: '../assets/logo.png',
        name: 'name',
        id: '',
        from: 'from'
      },
      text: `In many interviews you might have encountered a lot of questions about interfaces, abstract classes, delegates and other features related to object-oriented programming along with the design patterns related questions. Once you understand the design patterns it makes you very comfortable in attending any interviews as well as it helps you in applying these features in your projects or applications. We should note the point that implementing design patterns in applications are proven and tested.
            To make your applications to be scalable, reliable and easily maintainable you should Write the code aligning with design patterns.
            Now let's understand what design patterns are`,
      photos: [
        'https://wflixu.github.io/assets/img/bg1.jpg',
      ],
      love: 300
    },
    {
      author: {
        avatar: '../assets/logo.png',
        name: 'name',
        id: '',
        from: 'from'
      },
      text: `In many interviews you might have encountered a lot of questions about interfaces, abstract classes, delegates and other features related to object-oriented programming along with the design patterns related questions. Once you understand the design patterns it makes you very comfortable in attending any interviews as well as it helps you in applying these features in your projects or applications. We should note the point that implementing design patterns in applications are proven and tested.
            To make your applications to be scalable, reliable and easily maintainable you should Write the code aligning with design patterns.
            Now let's understand what design patterns are`,
      photos: [
        'https://wflixu.github.io/assets/img/bg2.jpg',
        'https://wflixu.github.io/assets/img/bg3.jpg',
      ],
      
      love: 300
    },
    {
      author: {
        avatar: '../assets/logo.png',
        name: 'name',
        id: '',
        from: 'from'
      },
      text: `In many interviews you might have encountered a lot of questions about interfaces, abstract classes, delegates and other features related to object-oriented programming along with the design patterns related questions. Once you understand the design patterns it makes you very comfortable in attending any interviews as well as it helps you in applying these features in your projects or applications. We should note the point that implementing design patterns in applications are proven and tested.
      To make your applications to be scalable, reliable and easily maintainable you should Write the code aligning with design patterns.
      Now let's understand what design patterns are`,
      photos: [
        'https://wflixu.github.io/assets/img/bg4.jpg',
        'https://wflixu.github.io/assets/img/bg5.jpg',
      ],

      love: 300
    },
    {
      author: {
        avatar: '../assets/logo.png',
        name: 'name',
        id: '',
        from: 'from'
      },

      text: `In many interviews you might have encountered a lot of questions about interfaces, abstract classes, delegates and other features related to object-oriented programming along with the design patterns related questions. Once you understand the design patterns it makes you very comfortable in attending any interviews as well as it helps you in applying these features in your projects or applications. We should note the point that implementing design patterns in applications are proven and tested.
            To make your applications to be scalable, reliable and easily maintainable you should Write the code aligning with design patterns.
            Now let's understand what design patterns are`,
      photos: [
        'https://wflixu.github.io/assets/img/bg6.jpg',
      ],
      love: 300
    }
  ],
  history: []
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store;
