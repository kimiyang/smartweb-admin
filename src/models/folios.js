import dva from 'dva';

export default {
  namespace: 'folios',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};