import Vue from 'vue';
import { AxiosRequestConfig } from 'axios';


export interface GridInterface {
    id: string;
    properties: {
        cols: Number,
        rows: Number,
        outer_left_right_margins: Number,
        outer_top_bottom_margins: Number,
        inner_left_right_spacing: Number,
        inner_top_bottom_spacing: Number,
        direction: string,
    };
    content: object[];
    type: string;
}


export interface ItemsInterface {
    item: GridInterface;
}

/**
 * state
 */
export const state = (): ItemsInterface => ({
    item: {
        id: '',
        properties: {
            cols: 0,
            rows: 0,
            outer_left_right_margins: 0,
            outer_top_bottom_margins: 0,
            inner_left_right_spacing: 0,
            inner_top_bottom_spacing: 0,
            direction: '',
        },
        content: [],
        type: '',
    },
});

/**
 * getters
 */
export const getters = {
    content(state: any): [] | undefined {
        return state.item.content;
    },
    properties(state: any): object | undefined {
        return state.item.properties;
    },
};

/**
 * mutations
 */
export const mutations = {
    SET_ITEMS(state: ItemsInterface, apiResult: GridInterface): void {
        state.item = apiResult;
    },
};

/**
 * actions
 */
export const actions = {
    async getItems(
        this: Vue,
        { _, commit }: any
    ): Promise<void> {
        try {
            const { data }: any = await this.$axios.get(
                '/home',
                {} as AxiosRequestConfig
            );
            commit('SET_ITEMS', data);
        } catch (err: any) {
            console.log(err.message);
        }
    },
};
