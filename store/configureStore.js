import reducer from './cache';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import toast from './middleware/toast';
import api from './middleware/api';

export default function() {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            toast,
            api
        ]
    })
} 