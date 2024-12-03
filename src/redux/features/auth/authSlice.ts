import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {

    token: string | null;
    user: object | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<{ token: string; user: object }>) {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.loading = false;
            state.error = null;
        },
        clearAuthData(state) {
            state.token = null;
            state.user = null;
        },
        setLoading(state) {
            state.loading = true;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    }

});
export const { setAuthData, clearAuthData, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;