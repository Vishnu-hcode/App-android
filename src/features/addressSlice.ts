import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddressState {
  flat: string;
  area: string;
  landmark: string;
  state: string;
  city: string;
  pincode: string;
}

const initialState: AddressState = {
  flat: '',
  area: '',
  landmark: '',
  state: 'Maharashtra',
  city: 'Nagpur',
  pincode: '',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<Partial<AddressState>>) => {
      return { ...state, ...action.payload };
    },
    clearAddress: () => initialState,
  },
});

export const { setAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
