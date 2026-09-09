import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const Breadcrum = ({ title }) => {
  return (
    <div className='max-w-6xl mx-auto my-6'>
      <nav className='flex items-center gap-2 text-sm text-muted flex-wrap'>
        <Link to='/' className='hover:text-primary transition font-medium'>Home</Link>
        <ChevronRight size={14} />
        <Link to='/products' className='hover:text-primary transition font-medium'>Products</Link>
        <ChevronRight size={14} />
        <span className='text-gray-900 font-semibold line-clamp-1 max-w-[300px]'>{title}</span>
      </nav>
    </div>
  )
}

export default Breadcrum
