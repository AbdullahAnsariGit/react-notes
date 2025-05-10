// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// export const fetchUsers = createAsyncThunk(
//   "users/fetchUsers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       console.log("response", response);
//       if (!response.ok) throw new Error("Failed to fetch users");
//       return await response.json();
//     } catch (error) {
//       console.log("error", error);
//       return rejectWithValue(error.message);
//     }
//   }
// );
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("response----", response);
      return response.data;
    } catch (error) {
      console.log("error----", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loader: false,
    status: "idle",
    errorMsg: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "api calling";
      state.loader = true;
      state.errorMsg = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.loader = false;
      state.users = action.payload;
      state.errorMsg = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loader = false;
      state.errorMsg = "Api Is Not Working!";
    });
  },
});

export default usersSlice.reducer;
