import { shallowMount } from '@vue/test-utils'
import List from '@/views/List.vue'
import mockData from './mock.json';

describe('List.vue', () => {
	const wrapper = shallowMount(List);
	const data = mockData;
	
  it('renders scrollList', () => {
    expect(wrapper.html()).toContain('scrollList');
	})

	it('renders with data',async () => {
		wrapper.setData({
			data: data,
			savedList:data,
			unsavedList:data,
			error: '',
			loading: true,
			page: 1,
		})
		await wrapper.vm.$nextTick();
		expect(wrapper.html()).toContain('listitem-stub');
	})
})
