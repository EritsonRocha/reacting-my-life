
import React from 'react'
import tecnologiasJSON from '@/app/data/tecnologias.json';

interface Tecnologia {
  title: string;
  image: string;
  description: string;
  rating: number;
}

const tecnologias: Tecnologia[] = JSON.parse(JSON.stringify(tecnologiasJSON));

export default function page() {
  return (
    <div className="p-8">

      <h2 className="text-3xl font-bold mb-6">
        Tecnologias Exploradas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {tecnologias.map((tecnologia) => (
          <div
            key={tecnologia.title}
            className="bg-white rounded-xl shadow-md border p-5"
          >

            <img
              src={`/tecnologias/${tecnologia.image}`}
              alt={tecnologia.title}
              className="w-20 h-20 object-contain mb-4"
            />

            <h3 className="text-xl font-bold mb-2">
              {tecnologia.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {tecnologia.description}
            </p>

            <p className="font-semibold">
              Rating: {tecnologia.rating}/5
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}
