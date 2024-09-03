import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch';


const List = ({catId , subCatVizSelected, upperPriceLimit, sort }) => {
    



  const { data , loading , error} = useFetch( `/products?populate=*&[filters][category][id]=${catId}${subCatVizSelected.map((item)=>(`&filters[sub_categories][id][$eq]=${item}`))}&[filters][newprice][$lte]=${upperPriceLimit}&sort=newprice:${sort}` )  //subCatVizSelected is an array which changes according to our options which are checked

  return (
    <div>
      <div className='flex relative mx-auto my-[50px] justify-center gap-[50px] flex-wrap xl:flex-nowrap'>
        {error ? 'Something went wrong' : loading ? 'Loading..'
          : data.map((item)=>{
            return(<Card item={item} key={item.id}/>)
        })}
      </div>
    </div>
  )
}

export default List
