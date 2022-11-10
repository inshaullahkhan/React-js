import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Products = () => {
  const [searchParams] = useSearchParams();
  console.log(Object.fromEntries([...searchParams])) 
  return (

    <div>Products

      {searchParams.get("sort")}
    </div>

  )
}

export default Products