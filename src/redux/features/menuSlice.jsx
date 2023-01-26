import { createSlice } from "@reduxjs/toolkit";
import selectFromCatalogue from '../../../helpers/selectFromCatalogue' 

export const menuSlice = createSlice({
    name: "menuStateSlice",
    initialState: {
        menuState: '',
        subMenuState: '',
        content: selectFromCatalogue(menuState , subMenuState),
        isLoading: true            
    }
})

export default menuSlice.reducer;

