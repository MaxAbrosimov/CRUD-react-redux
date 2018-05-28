import { CHANGE_GENRE } from '../constants/actionTypes'
import genres from '../constants/genre'
import books from '../constants/books'


const initialState = {
    products: books,
    genres: genres,
    selectedGenre: 0,
};

const selectWIthChildren = (items, selected) => {
  const genreWithChildren = new Set();
  items.forEach(g => {
    if (g.id === selected) {
      genreWithChildren.add(g.id);
      if (g.children && g.children.length) {
        g.children.forEach(child => {
          genreWithChildren.add(child.id);
          if (child.children) {
            child.children.forEach(c => {
              genreWithChildren.add(c.id);
            })
          }
        })
      }
    } else
    if (g.children && g.children.length) {
      selectWIthChildren(g.children, selected).forEach(c => {
        genreWithChildren.add(c)
      });
    }
  });
  return genreWithChildren;
};

export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case CHANGE_GENRE:
        const genreWithChildren = selectWIthChildren(genres, action.selected);
        console.log(genreWithChildren);
        return {
          ...state,
          selectedGenre: action.selected,
          products: books.filter(b => [...genreWithChildren].some(g => b.genres.includes(g)))
        };
        default:
            return state
    }
}