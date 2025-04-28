import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  return data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Potresti aggiungere qui reducers per modifiche locali (es. toggle, delete) se necessario
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        console.log("fetchTodos.pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log("fetchTodos.fulfilled", action.payload);
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log("fetchTodos.rejected", action.error.message);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Non ho bisogno di azioni locali per ora, ma potrei aggiungerle in futuro
// export const {} = todosSlice.actions;

export default todosSlice.reducer;