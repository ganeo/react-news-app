// Webクリップの追加アクション
export const createClip = ({ clipArticle }) => {
  return { type: 'CREATE_CLIP', article: clipArticle }
}

// Webクリップの削除アクション
export const deleteClip = ({ clipArticle }) => {
  return { type: 'DELETE_CLIP', article: clipArticle }
}
