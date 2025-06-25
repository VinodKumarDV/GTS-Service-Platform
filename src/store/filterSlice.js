import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  industry: '',
  location: '',
  subscription: '',
  search: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setIndustry:     (s,a)=>{s.industry=a.payload;},
    setLocation:     (s,a)=>{s.location=a.payload;},
    setSubscription: (s,a)=>{s.subscription=a.payload;},
    setSearch:       (s,a)=>{s.search=a.payload;},
    clearFilters: () => initialState,
  },
});

export const {
  setIndustry, setLocation, setSubscription, setSearch, clearFilters
} = filterSlice.actions;

export default filterSlice.reducer;
