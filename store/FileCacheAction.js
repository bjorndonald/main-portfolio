import {createAction} from '@reduxjs/toolkit';

export const RequestFileCache = createAction("RequestFileCache");
export const BeginFileCache = createAction("BeginFileCache");
export const CompleteFileCache = createAction("CompleteFileCache");
export const FailFileCache = createAction("FailFileCache");
export const RemoveFileCache = createAction("RemoveFileCache");
export const FileUrl = "cache.funds";