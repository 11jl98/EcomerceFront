import * as mutationsTypes from "./mutations-types";

export default {
  registerWidth({ commit }, widthCards) {
    return commit(mutationsTypes.REGISTER_WIDTH, widthCards);
  },
};
