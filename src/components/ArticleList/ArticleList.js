import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticleList.scss'

const ArticleList = ({ articles }) => {
  return (
    <div className='article-list'>
      {articles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
