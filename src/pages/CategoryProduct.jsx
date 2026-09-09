import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import load from "../assets/Loading4.webm"
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../components/ProductListView'


const CategoryProduct = () => {
  const [productData, setproductData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { category } = useParams()
  const navigate = useNavigate()

  const getFiltercdata = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      )
      setproductData(res.data.products)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getFiltercdata()
  }, [category])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px]">
        <video muted autoPlay loop className="w-40">
          <source src={load} type="video/webm" />
        </video>
        <p className="text-gray-500 mt-4">Loading products...</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-800 mb-5 text-white px-3 py-2 rounded-md flex gap-1 items-center"
      >
        <ChevronLeft /> Back
      </button>

      {productData.length > 0 ? (
        productData.map((product) => (
          <ProductListView key={product.id} product={product} />
        ))
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl font-semibold text-gray-500">No products found in "{category}"</p>
          <p className="text-gray-400 mt-2">Try exploring another category.</p>
        </div>
      )}
    </div>
  )
}

export default CategoryProduct
