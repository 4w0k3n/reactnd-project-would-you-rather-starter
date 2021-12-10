export const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('Action: ' , action);
    console.log('New State:', store.getState());
    console.groupEnd();

    return next(action);
}