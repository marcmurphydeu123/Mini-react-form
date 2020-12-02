export const updateState = (key, value) =>{
    return {
        type: 'UPDATE_STATE',
        payload: {[key]: value}
    }
};

