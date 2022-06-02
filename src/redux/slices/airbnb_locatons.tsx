import type { RootState } from "@redux"
import { createSlice } from "@reduxjs/toolkit"
// declaring the types for our state
export type AirbnbState = {
    value: number
    nearBy: []
    liveAway: []
}

const initialState: AirbnbState = {
    value: 0,
    nearBy: [],
    liveAway: [],
}

export const airbnblocationSlice = createSlice({
    name: "airbnblocations",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions.
    // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app.
    // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
    reducers: {
        nearBy: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers.
            // It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes
            // console.log("called", { action: action.payload })
            state.nearBy = action.payload
            return state
        },
        liveAway: (state, action) => {
            state.liveAway = action.payload
            return state
        },
    },
})
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { nearBy, liveAway } = airbnblocationSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectAirbnbLocations = (state: RootState) => state.airbnblocations

// exporting the reducer here, as we need to add this to the store
export default airbnblocationSlice.reducer
