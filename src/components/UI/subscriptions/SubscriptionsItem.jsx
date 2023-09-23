import React from 'react'
import style from './Subscription.module.css'

import profile from '../../../img/Profile.svg'

const SubscriptionsItem = () => {
  return (
    <>
      <div className={style.sub__item}>
        <div className={style.sub__logo_wrapper}>
          <img className={style.sub__logo} src={profile} alt="profile logo" />
        </div>
        <h5 className={style.sub__name}>qryow</h5>
      </div>
    </>
  )
}

export default SubscriptionsItem