import { Container } from '@/components/shared/Container'
import { Categories } from '@/components/shared/Categories'
import { SortPopup } from '@/components/shared/SortPopup'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg sahdow-black/5 z-10', className)}>
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}
