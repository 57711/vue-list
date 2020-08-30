import { shallowMount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'
import mockData from './mock.json';

describe('ListItem.vue', () => {
  it('renders proper content', () => {
    const data = mockData[0];
    const result='2020-08-30 10:00:42 山西襄汾＂8.29＂饭店坍塌事故救援结束：共29人遇难    Check to save this news'
    const wrapper = shallowMount(ListItem, {
      propsData: { data }
    });
    expect(wrapper.text()).toMatch(result);
  })
})
