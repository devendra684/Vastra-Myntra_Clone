import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../../Components/mensPage/Product/ProductData";

export const counterSlice = createSlice({
  initialState: {
    value: { data: ProductData, wishlist: [], cart: [], filterData: [] },
    filters: [
      {
        name: "Men",
        active: false,
      },
      {
        name: "Women",
        active: false,
      },
      {
        name: "Boys",
        active: false,
      },
      {
        name: "Girls",
        active: false,
      },
    ],
    categories: [
      {
        name: "Shirts",
        active: false,
      },
      {
        name: "Sleep Shirts",
        active: false,
      },
      {
        name: "Dog shirts",
        active: false,
      },
    ],
    brands: [
      {
        name: "Zara",
        active: false,
      },
      {
        name: "Parx",
        active: false,
      },
      {
        name: "Roadster",
        active: false,
      },
      {
        name: "Harvard",
        active: false,
      },
      {
        name: "Wrogn",
        active: false,
      },
    ],
    sortArray: [
      {
        name: "htl",
        active: false,
      },
      {
        name: "lth",
        active: false,
      }
    ],
    wishlist: [],
    cart: [],

  },

  name: "appData",

  reducers: {
    //Reducer which contains function for FILTERS , SORTING
    filter: (state, action) => {
      // let filterData = [];
      console.log(action);
      const { payload } = action;
      let allProducts = [...state.value.data]
      let filteredProducts = [...state.value.filterData]
      switch (payload.type) {

        // Reducer for filtering the data from the database
        case "FILTER":
          const filters = filteredProducts.length === 0 ? state.value.data.map((currData) => {
            //   console.log(currData);
            if (action.payload.value === currData.filter) {
              return { ...currData, visible: true };
            } else {
              return { ...currData, visible: false };
            }
          }) : filteredProducts.filter(currData => payload === currData.filter);

          console.log(filters);
          state.value.data = filters;
          filteredProducts = filters
          console.log(filteredProducts)
          break;


        case "CATEGORY":
          // action.payload = ['zara','wrong'];
          const categories = filteredProducts.length === 0 ? allProducts.map((currData) => {
            console.log("first")
            if (
              action.payload.value.find(
                (category) => category === currData.category
              )
            ) {
              return { ...currData, visible: true };
            } else {
              return { ...currData, visible: false };
            }
          }) : filteredProducts.filter(currData => currData.category === payload.value[0], console.log("second"));
          console.log(allProducts);
          filteredProducts = [...filteredProducts, categories]
          state.value.data = categories;
          break;


        case "BRAND":
          // action.payload = ['zara','wrong'];

          const brands = filteredProducts.length === 0 ? allProducts.map((currData) => {
            // in this function we will find all the brands selected present in the data ad show them visible as true
            if (
              action.payload.value.find((brand) => brand === currData.pname)
            ) {
              return { ...currData, visible: true };
            } else {
              return { ...currData, visible: false };
            }
          }) : filteredProducts.filter(currData => action.payload === currData.pname);
          console.log(brands);
          state.value.data = brands;
          break;

        // action type == search -- action to get search data from database
        case "SEARCH":
          const search = action.payload.value
          const searchData = state.value.data.map((item) => {
            if (item.product == search) {
              return { ...item, visible: true }
            } else {
              return { ...item, visible: false }
            }
          })
          state.value.data = searchData;
          break;


        //Reducer for sorting products 
        case "LTH":

          // const allProducts = [...state.value.data]
          // const filteredProducts = [...state.value.filterData]

          const data = filteredProducts.length === 0 ? allProducts.sort((a, b) =>
            a.price - b.price)

            : filteredProducts.sort((a, b) => a.price - b.price);
          console.log(data);
          state.value.data = data;
          break;

        case "HTL":

          // const allProducts = [...state.value.data]
          // const filteredProducts = [...state.value.filterData]

          const data1 = filteredProducts.length === 0 ? allProducts.sort((a, b) =>
            b.price - a.price)

            : filteredProducts.sort((a, b) => b.price - a.price, console.log("hemlo"));
          console.log(allProducts);
          state.value.data = data1;
          break;

        case "DEFAULT":

          const data2 = filteredProducts.length === 0 ? allProducts

            : filteredProducts;
          console.log(allProducts);
          state.value.data = data2;
          break;

        default:
          break;
      }

      // action.payload will contain the value that should be used to filter the data.
    },

    //Reducer function for adding product to whishlist
    addToWishlist: (state, action) => {
      const wishlistItmes = state.value.wishlist;
      const id = action.payload.id
      console.log([...wishlistItmes, action.payload]);

      if (state.value.wishlist.filter((elem) => elem.id == id).length == 0) {
        state.value.wishlist = [...wishlistItmes, action.payload];
      }
    },

    //Reducer funtion to remove products from whislist
    removeFromWishList: (state, action) => {
      const wishlistedData = state.value.wishlist.filter(
        ({ id }) => id !== action.payload.id
      );
      console.log(wishlistedData);
      state.value.wishlist = wishlistedData;

    },

    //Reducer function to add products to cart
    addToCart: (state, action) => {
      const cartItems = state.value.cart;
      const id = action.payload.id
      if (state.value.cart.filter((elem) => elem.id == id).length == 0) {
        state.value.cart = [...cartItems, action.payload];
      }

    },

    //Reducer function to remove products from cart
    removeFromCart: (state, action) => {
      const cartData = state.value.cart.filter(({ id }) => id !== action.payload.id);
      state.value.cart = cartData;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

  },


});

// Action creators
export const {
  incrementByAmount,
  filter,
  sort,
  addToWishlist,
  removeFromWishList,
  addToCart,
  removeFromCart,
  getSortedData
} = counterSlice.actions;

export default counterSlice.reducer;
