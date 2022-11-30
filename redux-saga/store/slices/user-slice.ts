import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  firstName?: string;
  lastName?: string;
  username: string;
  id: number;
};

const initialState: UserState = {
  firstName: "John",
  lastName: "Doe",
  username: "jhdoe",
  id: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Pick<UserState, "id" | "username">>) {
      state.username = action.payload.username;
      state.id = action.payload.id;
    },
    asyncSetUser(state) {
      return state;
    },
    reset() {
      return initialState;
    },
  },
});

export const { setUser, asyncSetUser, reset } = userSlice.actions;
export function selectUser(state: { user: UserState }) {
  return state.user;
}

export default userSlice.reducer;
