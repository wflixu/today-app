import Vue from 'vue';
import 'babel-polyfill';
import HelloWorld from '@/components/HelloWorld';
import { expect } from 'chai'
import { shallow } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(HelloWorld)
    expect(wrapper.find('.hello h1').text()).equal('Welcome to Your Vue.js App')
  });
});
