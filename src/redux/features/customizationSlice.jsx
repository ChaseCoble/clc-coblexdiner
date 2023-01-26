import { createSlice } from "@reduxjs/toolkit";
import selectFromCatalogue from '../../../helpers/selectChatbotDialogue' 

export const chatbotSlice = createSlice({
    name: "chatbotSlice",
    initialState: {
        menuState: '',
        subMenuState: '',
        content: '',
        isLoading: true            
    }
})

export default chatbotSlice.reducer;