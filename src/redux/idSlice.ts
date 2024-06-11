import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IdState {
  componentId: string;
}

const initialState: IdState = {
  componentId: "",
};

const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    setComponentId(state, action: PayloadAction<string>) {
      state.componentId = action.payload;
    },
    clearComponentId(state) {
      state.componentId = "";
    },
  },
});

export const { setComponentId, clearComponentId } = idSlice.actions;

export default idSlice.reducer;
