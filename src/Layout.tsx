import { Link, Outlet, useLocation } from 'react-router-dom';

import GoBackIconSvg from './shared/components/atom/icons/GoBackIcon';
import HomePageIconSvg from './shared/components/atom/icons/HomePageIcon';
import MoviePageIconSvg from './shared/components/atom/icons/MoviePageIcon';
import MypageIconSvg from './shared/components/atom/icons/MyPageIcon';
import NotificationPageIconSvg from './shared/components/atom/icons/NotificationPageIcon';
import SearchPageIconSvg from './shared/components/atom/icons/SearchPageIcon';

import './App.scss';
const titleMapping: { [key: string]: string } = {
  '/search': '검색',
  '/result': '검색결과',
  '/movie': '영화 정보',
  '/movie/detail': '영화 상세정보',
  '/mypage': '마이페이지',
  '/timeline': '타임라인',

  // Add more routes and titles as needed
};
function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const title = titleMapping[currentPath];
  return (
    <>
      <div className="navigate-bar">
        <Link to={'/timeline'}>
          <div className="menu-icon home">
            <HomePageIconSvg />
          </div>
        </Link>
        <Link to={'/search'}>
          <div className="menu-icon search">
            <SearchPageIconSvg />
          </div>
        </Link>
        <Link to={'/movie'}>
          <div className="menu-icon movie">
            <MoviePageIconSvg />
          </div>
        </Link>
        <div className="menu-icon alert">
          <NotificationPageIconSvg />
        </div>
        <Link to={'/mypage'}>
          <div className="menu-icon mypage">
            <MypageIconSvg />
          </div>
        </Link>
      </div>

      <div className="contents-wrap">
        <div className="contents-title-wrap">
          <div className="contents-title">
            <div className="arrow-holder">
              <GoBackIconSvg />
            </div>
            <div>{title}</div>
            <div className="arrow-holder"></div>
          </div>
        </div>
        <div className="contents">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
