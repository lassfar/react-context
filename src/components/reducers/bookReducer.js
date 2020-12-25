

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      console.log("added : ", action.new_book);
      return [...state, action.new_book];
    case 'REMOVE_BOOK':
      console.log("deleted : ", action.id);
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}
