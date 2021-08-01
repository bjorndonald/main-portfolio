const toast = store => next => action  => {
    console.log(action.type)
    if(action.type==="cacheRequestFailed")
        console.error("Toastify: ", action.payload.message)
    else
        return next(action);
}

export default toast;