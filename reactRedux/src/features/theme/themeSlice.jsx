import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: '#ebc8b3',
  bgColor: '#8A6729'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTextColor: (state, action) => {
      state.color = action.payload
    },
    changeBg: (state, action) => {
      state.bgColor = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeTextColor, changeBg } = themeSlice.actions

export default themeSlice.reducer