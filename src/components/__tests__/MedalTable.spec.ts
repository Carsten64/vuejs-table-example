import 'jest';
import { shallowMount } from '@vue/test-utils';
// @ts-ignore
import MedalTable from '../Medal-table.vue';

describe('Medal-table.vue', () => {
  test('renders props.title when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(MedalTable, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
