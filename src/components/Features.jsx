import React from 'react'
import { Truck,Lock,RotateCcw,Clock } from 'lucide-react'

const feautures =[
   { icon: Truck, text: "Free Shipping", subtext: "On order over $100" },
  { icon: Lock, text: "Secure Payment", subtext: "100% secure payment" },
  { icon: RotateCcw, text: "Easy Return", subtext: "30 days return policy" },
  { icon: Clock, text: "24/7 Support", subtext: "Anytime support" },
]

const Features = () => {
  return (
    <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feautures.map((f, i) => (
            <div
                key={i}
                className="flex items-center gap-4 p-6 rounded-xl
                bg-white shadow-md hover:shadow-xl
                hover:-translate-y-1 transition-all duration-300"
            >
                <f.icon className="w-10 h-10 text-red-500" />
                <div>
                <p className="font-semibold text-gray-900">{f.text}</p>
                <p className="text-sm text-gray-500">{f.subtext}</p>
                </div>
            </div>
            ))}
        </div>
</div>

  )
}

export default Features
