import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            
            setAuthHeader(response.data.token);

            return response.data;
        } catch ({ response }) {

            if (response.status === 400) {
                toast.error("User creation error! Please try again!");
                } else if (response.status === 500) {
                toast.error("Server error! Please try later!");
                } else {
                toast.error("Something went wrong!");
                }
                
            return thunkAPI.rejectWithValue(response.status);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);

            setAuthHeader(response.data.token);

            return response.data;
        } catch ({ response }) {

            if (response.status === 400) {
                toast.error("User login error! Please try again!");
                } else if (response.status === 500) {
                toast.error("Server error! Please try later!");
                } else {
                toast.error("Something went wrong!");
                }

            return thunkAPI.rejectWithValue(response.status );
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const { token } = thunkAPI.getState().auth;
        
        if (!token) {
            return thunkAPI.rejectWithValue('No valid token');
        }

        setAuthHeader(token);
        try {
            const response = await axios.get('/users/current');

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);