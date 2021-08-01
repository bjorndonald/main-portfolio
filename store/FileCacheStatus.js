import {createAction} from '@reduxjs/toolkit';

export const FileCacheRequested = createAction("FileCacheRequested");
export const FileCacheInProgress = createAction("FileCacheInProgress");
export const FileCacheSucceeded = createAction("FileCacheSucceeded");
export const FileCacheFailed = createAction("FileCacheFailed");
export const fileUrl = "cache.funds"; 