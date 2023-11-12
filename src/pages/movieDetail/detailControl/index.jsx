import classNames from 'classnames'
import React from 'react'

export const DetailInfoControl = ({detailName, infoTitle, tagline}) => {
    return (
    <>
    {
    detailName  ?
     <p className='col-span-1'>{infoTitle}: {<span className={classNames('',{"text-red-700" : tagline})}>{detailName}</span>}</p>  
     :
    <p className='text-sm text-red-400'>{infoTitle} bilgisine ulaşılamadı</p>
    }
    </>
  )
}
