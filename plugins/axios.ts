import { Plugin } from '@nuxt/types';
import { AxiosError } from 'axios';
import { Store } from 'vuex';
import * as storeIndex from '@/store/grid';

const axiosPlugin: Plugin = ({ $axios }): void => {

  // @ts-ignore
  let store: any = new Store(storeIndex);
  $axios.onRequest(() => {
    store.commit('loader/SET_LOADING', true)
  })
  $axios.onResponse(() => {
    store.commit('loader/SET_LOADING', false)
  })

  $axios.onResponseError((response: AxiosError): void => {
    console.log('$axios.onResponseError');
    if (!response.response) {
      return;
    }

    const { status } = response.response;

    // 404
    if (status === 404) {

    }
  });
};

export default axiosPlugin;
