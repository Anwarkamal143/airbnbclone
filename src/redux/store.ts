import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import airbnblocationsReducer from "./slices/airbnb_locatons"
import locationsSlice from "./slices/locationsSlice"
import searchFilters from "./slices/searchSlice"

// let stores: any
const createStore = (preloadedState: Record<string, any>) => {
    return configureStore({
        devTools: process.env.NODE_ENV === "development",

        reducer: {
            airbnblocations: airbnblocationsReducer,
            locations: locationsSlice,
            searchFilters: searchFilters,
        },
        preloadedState,
    })
}
// export const  = configureStore({
//     devTools: process.env.NODE_ENV === "development",
//     reducer: {
//         locations: airbnblocationsReducer,
//     },
// })
// export const initialiseStore = (
//     preloadedState?: Record<string, any>
// ): ReturnType<typeof createStore> => {
//     let _store = stores ?? createStore(preloadedState || {})
//     console.log({
//         stores: stores?.getState(),
//         isServer: typeof window === "undefined",
//     })
//     if (preloadedState && stores) {
//         _store = createStore({ ...stores.getState(), ...preloadedState })
//         stores = undefined
//     }

//     // For SSG and SSR always create a new store
//     if (typeof window === "undefined") return _store
//     // Create the store once in the client
//     if (!stores) stores = _store

//     return _store
// }
export const store = createStore({})
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export const wrapper = createWrapper<AppStore>(createStore)
