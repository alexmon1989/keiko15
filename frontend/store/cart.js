export const state = () => ({
  list: [
    {id: 1, title: 'Мидии в азиатском стиле', quantity: 1, price: 399},
    {id: 2, title: 'Бородинские гренки', quantity: 2, price: 250},
  ]
});

// getters
export const getters = {

  cartProducts: state => {
    return state.list.map(p => {
      return {
        id: p.id,
        title: p.title,
        quantity: p.quantity,
        price: p.quantity * p.price
      };
    });
  }

};

// actions
export const actions = {

  add({commit}, product) {
    commit('ADD_TO_CART', product)
  },

  remove({commit}, product) {
    commit('REMOVE_FROM_CART', product)
  },

  delete({commit}, product) {
    commit('DELETE_FROM_CART', product)
  },

};

// mutations
export const mutations = {

  ['ADD_TO_CART'](state, product) {
    const record = state.list.find(p => p.id === product.id);

    if (!record) {
      state.list.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  ['REMOVE_FROM_CART'](state, product) {
    const record = state.list.find(p => p.id === product.id);

    if (record && record.quantity > 0) {
      record.quantity--;

      if (record.quantity === 0) {
        state.list.splice(state.list.indexOf(record), 1);
      }
    }
  },

  ['DELETE_FROM_CART'](state, product) {
    const record = state.list.find(p => p.id === product.id);

    if (record) {
      state.list.splice(state.list.indexOf(record), 1);
    }
  }

};
