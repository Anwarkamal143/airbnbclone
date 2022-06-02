import type { RootState } from "@redux"
import { createSlice } from "@reduxjs/toolkit"

// declaring the types for our state
export type SearchState = {
    noGuests: number | string
    startDate: Date | string | null
    endDate: Date | string | null
    location: string | null
    searchResults: []
}

const initialState: SearchState = {
    noGuests: 0,
    startDate: null,
    endDate: null,
    location: "",
    searchResults: [],
}

export const searchSlice = createSlice({
    name: "searchFilters",
    initialState,

    reducers: {
        setSearchFilters: (
            state,
            action: { type: string; payload: Partial<SearchState> }
        ) => {
            console.log(action)
            return { ...state, ...action.payload }
        },
        setSearchResults: (state, action: { type: string; payload: [] }) => {
            return { ...state, searchResults: action.payload }
        },
    },
})
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { setSearchFilters, setSearchResults } = searchSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectSearchFilters = (state: RootState) => state.searchFilters

// exporting the reducer here, as we need to add this to the store
export default searchSlice.reducer
