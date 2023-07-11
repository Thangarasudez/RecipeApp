import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  recipe: [],
  recipeById: [],
  error: "",
};

export const getRecipes = createAsyncThunk("getRecipes", async (query) => {
  return await axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    )
    .then((response) => response.data);
});

export const getRecipesById = createAsyncThunk("getRecipesById", async (id) => {
  return await axios
    .get(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
    )
    .then((response) => response.data);
});

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.recipe = action.payload;
      state.error = "";
    });
    builder.addCase(getRecipes.rejected, (state, action) => {
      state.loading = false;
      state.recipe = [];
      state.error = action.error.message;
    });
    builder.addCase(getRecipesById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRecipesById.fulfilled, (state, action) => {
      state.loading = false;
      state.recipeById = action.payload;
      state.error = "";
    });
    builder.addCase(getRecipesById.rejected, (state, action) => {
      state.loading = false;
      state.recipeById = [];
      state.error = action.error.message;
    });
  },
});

export default recipeSlice.reducer;
