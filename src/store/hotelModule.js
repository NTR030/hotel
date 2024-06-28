const hotelModule = {
  namespaced: true,
  state() {
    return {
      hotel: [
        {
          name: "",
          des: "",
          start: [],
          roomList: [
            {
              name: "",
              img: "",
              price: 11,
            },
          ],
          appraise: [
            {
              name: "",
              des: {
                type: "",
                content: "",
              },
            },
          ],
        },
      ],
    };
  },
};

export default hotelModule;
