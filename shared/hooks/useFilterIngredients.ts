'use client'
import type { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Api } from '@/shared/services/api-client'

interface ReturnProps {
  ingredients: Ingredient[]
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll()
        setIngredients(ingredients)
      } catch (err) {
        console.log(err)
      }
    }

    fetchIngredients()
  }, [])
  return { ingredients }
}
