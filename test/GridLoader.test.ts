import { mount } from '@vue/test-utils';
import Grid from '@/components/Grid';

describe('HelloWorld', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Grid);
    expect(wrapper.vm).toBeTruthy();
  });
});
