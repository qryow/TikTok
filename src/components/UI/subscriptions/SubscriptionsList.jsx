import React from 'react'
import SubscriptionsItem from './SubscriptionsItem'
import style from './Subscription.module.css'
import { useDarkMode } from '../../DarkMode/DarkMode'

const SubscriptionsList = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); 
  return (
    <>
      <div className={isDarkMode ? `${style.sub__block} ${style.sub__block_light}` : `${style.sub__block}`}>
        <div className={style.sub__content}>
          <h3 className={style.sub__title}>Account subscriptions</h3>

          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
          <SubscriptionsItem />
        </div>
      </div>
    </>
  )
}

export default SubscriptionsList