import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import DbSettings from '@/components/DbSettings.vue'
import Vue from 'vue'

describe('HelloWorld.vue', () => {
  it('renders the correct thing', () => {
    // const msg = 'new message'
    // const wrapper = shallowMount(DbSettings, {
    //   propsData: { msg }
    // })
    // expect(wrapper.text()).to.include(msg)
    const Constructor = Vue.extend(DbSettings)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).to.be('')
  })
})
