//SET INITIAL STATE
const initialState = {
   firstName: 'test'
   , lastName: 'test2'
   , gender: ''
   , hairColor: ''
   , eyeColor: ''
   , hobby: ''
   , birthDay: ''
   , birthMonth: ''
   , birthYear: ''
}

//REDUCER
export default function reducer(state = initialState, action) {
   switch(action.type) {

      default:
         return state;
   }
}