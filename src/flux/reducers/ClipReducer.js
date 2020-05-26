// Webクリップの追加と削除を制御するReducer
const clipReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_CLIP':
      return { ...state, clipArticles: [...state.clipArticles, action.article] }
    case 'DELETE_CLIP':
      return {
        ...state,
        clipArticles: state.clipArticles.filter(
          (clipArticle) => clipArticle.url !== action.article.url
        ),
      }
    default:
      return state
  }
}

export default clipReducer
