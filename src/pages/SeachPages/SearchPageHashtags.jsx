import React from 'react'
import SearchNavbar from '../../components/Search/SearchNavbar'
import Subscriptions from '../../components/UI/subscriptions/SubscriptionsList'
import SearchList from '../../components/Search/SearchList'

const SearchPageHashtags = () => {
  return (
    <div>
      <SearchNavbar />
      <Subscriptions />
      <SearchList />
    </div>
  )
}

export default SearchPageHashtags