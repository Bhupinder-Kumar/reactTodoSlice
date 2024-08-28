import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTodos = createAsyncThunk("fetchTodos", async (obj)=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, { payload })=> {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
            console.log(payload,"payload");
        })
        builder.addCase(fetchTodos.rejected, (state, { payload }) => {
            console.log('Error', payload);
            state.isError = true;
        })
    }
});


export default todoSlice.reducer;