import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  photo: string | null;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email?: string; // optional, can be added later
  birthday: string | null; // store as ISO string for persistence
}

const initialState: UserState = {
  photo: null,
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  email: undefined, // initially no email set
  birthday: null, // initially no birthday set
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState, // optional: reset user state
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;




// import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// interface UserState {
//     photo:string|null;
//     firstName:string;
//     lastName:string;
//     address:string;
//     phone:string;
// }

// const initialState:UserState={
//     photo:null,
//     firstName:'',
//     lastName:'',
//     address:'',
//     phone:''
// }

// const userSlice= createSlice({
//     name:'user',
//     initialState,
//     reducers:{
//         setUser:(state, action: PayloadAction<Partial<UserState>>) => {
//             return { ...state, ...action.payload};
//         },
//     },
// });

// export const {setUser} =userSlice.actions;
// export default userSlice.reducer;