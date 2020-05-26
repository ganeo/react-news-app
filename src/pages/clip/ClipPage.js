import React, { useContext } from 'react'
import { ClipContext } from '../../App'
import ArticleList from '../../components/ArticleList/ArticleList'
import './ClipPage.scss'

const ClipPage = () => {
  const { clipState } = useContext(ClipContext)

  return <ArticleList articles={clipState.clipArticles} />
}

export default ClipPage
