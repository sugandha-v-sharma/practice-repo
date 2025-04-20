import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios"

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  })

  type User = {
    id: number
    name: string
    email: string
  }

  interface UsersState {
    users: User[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
  }

  const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: null,
  }

  const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message ?? 'Something went wrong'
        })
    },
  })
  
  export default usersSlice.reducer