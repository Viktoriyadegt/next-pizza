import type { Ingredient } from '@prisma/client'
import { axiosInstance } from '@/shared/services/instance'
import { ApiRoutes } from './constants'

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}
