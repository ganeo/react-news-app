import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Header.scss'

const Header = ({ location }) => {
  const path = location.pathname

  return (
    <div className='header'>
      <Link className={path === '/' ? 'active' : 'inactive'} to='/'>
        ニュース一覧
      </Link>

      <Link className={path === '/clip' ? 'active' : 'inactive'} to='/clip'>
        後で読む記事
      </Link>
    </div>
  )
}

// App.jsでHeaderコンポーネントはRouteを経由していないためwithRouterでラップしてパスを取得
export default withRouter(Header)
