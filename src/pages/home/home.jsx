import React, { lazy } from 'react'
import DravantiToken from '../../components/dravantiToken/dravantiToken';
const History = lazy(() => import("../../components/history/history"));

const Home = () => {
  return (
    <div>
      <History />
      <DravantiToken />
    </div>
  )
}

export default Home
