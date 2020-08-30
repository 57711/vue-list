import { shallowMount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'

describe('ListItem.vue', () => {
  it('renders proper content', () => {
    const data = {
            "path": "https://news.163.com/20/0830/08/FL8VMG2E0001899O.html",
            "image": "http://cms-bucket.ws.126.net/2020/0830/66face3bp00qfup0000mic000s600e3c.png?imageView&thumbnail=140y88&quality=85",
            "title": "山西襄汾＂8.29＂饭店坍塌事故救援结束：共29人遇难",
            "passtime": "2020-08-30 10:00:42"
        }
    const result='2020-08-30 10:00:42 山西襄汾＂8.29＂饭店坍塌事故救援结束：共29人遇难    Check to save this news'
    const wrapper = shallowMount(ListItem, {
      propsData: { data }
    });
    expect(wrapper.text()).toMatch(result);
  })
})
