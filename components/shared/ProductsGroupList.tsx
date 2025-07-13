'use client'
import { Title } from '@/components/shared/Title'
import { ProductCard } from '@/components/shared/ProductCard'
import { cn } from '@/lib/utils'
import { useIntersection } from 'react-use'
import { type RefObject, useEffect, useRef } from 'react'
import { useCategoryStore } from '@/app/store/categories'

interface Props {
  title: string
  items: any[]
  categoryId: number
  listClassName?: string
  className?: string
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, categoryId, listClassName, className }) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = useRef<HTMLDivElement>(null)
  const intersection = useIntersection(intersectionRef as RefObject<HTMLElement>, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [intersection?.isIntersecting, title])
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={i}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            //price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}
