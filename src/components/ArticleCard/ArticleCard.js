import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'
import { createClip, deleteClip } from '../../flux/actions/ClipAction'
import { ClipContext } from '../../App'
import './ArticleCard.scss'

const ArticleCard = ({ article }) => {
  const { clipState, clipDispatch } = useContext(ClipContext)

  // すでにWebクリップされた記事かどうかを判定
  const isClipped = () => {
    return clipState.clipArticles.some(
      (clipArticle) => clipArticle.url === article.url
    )
  }

  // Webクリップをチェックした際の処理
  const handleClip = () => {
    if (isClipped()) {
      clipDispatch(deleteClip({ clipArticle: article }))
    } else {
      clipDispatch(createClip({ clipArticle: article }))
    }
  }

  return (
    <div className='card'>
      <div
        className='image'
        style={{ backgroundImage: `url(${article.urlToImage})` }}
      />

      <div className='title'>
        <a href={article.url} target='_blank' rel='noopener noreferrer'>
          {article.title.slice(0, 80)}...
        </a>
      </div>

      <div className='clip' onClick={handleClip}>
        後で読む
        <FontAwesomeIcon icon={isClipped() ? faCheckSquare : faSquare} />
      </div>
    </div>
  )
}

export default ArticleCard
