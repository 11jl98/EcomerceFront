import * as mutationsTypes from "./mutations-types";

export default {
  [mutationsTypes.REGISTER_WIDTH](state, widthCards) {
    state.widthCards = widthCards;
  },
};
