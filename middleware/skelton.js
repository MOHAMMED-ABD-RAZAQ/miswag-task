export default function ({ store }) {
    if (!process.server) {
        store.commit('loader/SET_LOADING', false)
    }
}