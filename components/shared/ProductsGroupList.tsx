import { Title } from '@/components/shared/Title'
import { ProductCard } from '@/components/shared/ProductCard'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  items: any[]
  listClassName?: string
  className?: string
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, listClassName, className }) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
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
