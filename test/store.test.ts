import { createLocalVue } from '@vue/test-utils';
import axios from 'axios';
import Vuex, { Store } from 'vuex';
import * as storeIndex from '@/store/grid';


const localVue = createLocalVue();
localVue.use(Vuex);

describe('store data test', () => {
  let store: any;

  beforeEach(() => {
    // @ts-ignore
    store = new Store(storeIndex);

    store.$axios = axios;
  });

  test('api request', async (done) => {
    // @ts-ignore
    await store.dispatch('fetchApi');

    // Test no data in content
    expect(store.getters.content).toBe([]);
    done();
  });
});
