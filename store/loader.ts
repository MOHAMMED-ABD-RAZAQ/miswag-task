
export interface LoadingInterface {
    status: boolean
}

/**
 * state
 */
export const state = (): LoadingInterface => ({
    status: false
});

/**
 * getters
 */
export const getters = {
    status(state: any): [] | undefined {
        return state.status;
    },
};

/**
 * mutations
 */
export const mutations = {
    SET_LOADING(state: LoadingInterface, status: boolean): void {
        state.status = status;
    },
};
