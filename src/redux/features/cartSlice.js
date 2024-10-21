import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carts: []
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) =>{

      
      const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
      console.log(ItemIndex);
      
      if(ItemIndex >= 0){
        state.carts[ItemIndex].qnty +=1

      }else{
        const temp = {...action.payload, qnty: 1}
        state.carts = [...state.carts, temp]

      }

      // only adding data
      // state.carts = [...state.carts, action.payload]

    },

    removeToCart: (state, action) =>{
      const data = state.carts.filter((ele) =>ele.id  !== action.payload)
      state.carts = data;
    },


    // for decrement of single item
    removeSingleItem: (state, action) =>{
      const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id)
      
      if( state.carts[ItemIndex_dec].qnty >=1)
      {
        state.carts[ItemIndex_dec].qnty -=1

      }


    },


    // clear all
    emptycartItem: (state, action) =>{
      state.carts = [];
    },


  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeToCart, removeSingleItem,emptycartItem } = cartSlice.actions

export default cartSlice.reducer