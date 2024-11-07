import React, { lazy } from 'react'
const History = lazy(() => import("../../components/history/history"));

const Home = () => {
  return (
    <div>
      <History />
    </div>
  )
}

export default Home
