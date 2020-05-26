import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import ArticleList from '../../components/ArticleList/ArticleList'
import Category from '../../components/Category/Category'
import { categories } from '../../categoryList'
import news from '../../news.json'
import './HomePage.scss'

export const handleCategoryContext = createContext()

// News APIのAPIキー
const API = '2c7d89cf94b6413bad934d91e624c489'

const HomePage = () => {
  const [category, setCategory] = useState(categories[0])
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchArticles()
  }, [category])

  // News APIから特定カテゴリーのニュースデータを取得
  const fetchArticles = async () => {
    try {
      setLoading(true)
      const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=${category}&apiKey=${API}`
      const res = await axios.get(URL)
      setArticles(res.data.articles)
      // テスト用にローカルに保存したNewsデータを利用する場合は、下3行のコメントを外し上3行をコメントアウト
      // let data = JSON.stringify(news)
      // data = JSON.parse(data)
      // setArticles(data.articles)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err)
      console.error(err)
    }
  }

  return (
    <div className='home-page'>
      {/* 子コンポーネントにカテゴリー情報とコールバック関数を渡すためにコンテキストを利用 */}
      <handleCategoryContext.Provider
        value={{
          category: category,
          handleCategory: (children) => setCategory(children),
        }}
      >
        <Category />
      </handleCategoryContext.Provider>
      {loading ? (
        <h1>
          <FontAwesomeIcon icon={faSpinner} />
          データ取得中...
        </h1>
      ) : !error ? (
        <ArticleList articles={articles} />
      ) : (
        <h1>データを取得できませんでした。</h1>
      )}
    </div>
  )
}

export default HomePage
