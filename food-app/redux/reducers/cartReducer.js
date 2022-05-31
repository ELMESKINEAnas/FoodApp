
let defaultState = {
  selectedItems: { items: [], categoryName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };

      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");

        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          categoryName: action.payload.categoryName,
        };
      } else {
        console.log("REMOVE FROM CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.name !== action.payload.name
            ),
          ],
          categoryName: action.payload.categoryName,
        };
      }
      console.log(newState, "👉");

      // {
      //   desserts: [],
      //   drinks: [],
      //   appetizers: [],
      // }
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;