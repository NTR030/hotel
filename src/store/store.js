import { createStore } from "vuex";

import hotelModule from "./hotelModule";

const store = createStore({
  modules: {
    hotel: hotelModule,
  },
});

export default store;
