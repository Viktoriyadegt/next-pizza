'use client'
import type { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Api } from '@/shared/services/api-client'

interface ReturnProps {
  ingredients: Ingredient[]
  loading: boolean
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true)
        const ingredients = await Api.ingredients.getAll()
        setIngredients(ingredients)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchIngredients()
  }, [])
  return { ingredients, loading }
}
