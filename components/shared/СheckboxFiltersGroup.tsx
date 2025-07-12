'use client'

import { Input } from '@/components/ui'
import { FilterCheckbox, type FilterCheckboxProps } from '@/components/shared/FilterCheckbox'
import { type ChangeEvent, useState } from 'react'

type Item = FilterCheckboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  searchInputPlaceholder?: string
  className?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const list = showAll
    ? items.filter((item: Item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : defaultItems?.slice(0, limit)

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchValue}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list?.map((item, index) => (
          <FilterCheckbox
            key={index}
            onCheckedChange={console.log}
            checked={false}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3 cursor-pointer">
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  )
}
