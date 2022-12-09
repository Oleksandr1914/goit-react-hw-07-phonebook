import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://63921765b750c8d178d697de.mockapi.io/contacts`
      );
      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://63921765b750c8d178d697de.mockapi.io/contacts/${id}`,
        { method: 'DELETE' }
      );
      if (!response.ok) {
        throw new Error('Can not delete task.Server Error');
      }
      dispatch(deleteTask(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/deleteContac',
  async function (obj, { rejectWithValue, dispatch }) {
    try {
      const contact = {
        name: obj.name,
        phone: obj.number,
      };
      const response = await fetch(
        `https://63921765b750c8d178d697de.mockapi.io/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      );
      if (!response.ok) {
        throw new Error('Can not added task.Server Error');
      }
      const data = await response.json();

      dispatch(addTask(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    deleteTask(state, action) {
      state.items = state.items.filter(el => action.payload !== el.id);
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addTask, deleteTask } = contactSlice.actions;
export default contactSlice.reducer;
