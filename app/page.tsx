import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className={'flex flex-col gap-16'}>
              <ProductsGroupList
                categoryId={1}
                title={'Пиццы'}
                items={[
                  {
                    id: 11,
                    name: 'Kokolapa',
                    imageUrl:
                      'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: 'Kokolapa',
                    imageUrl:
                      'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: 'Kokolapa',
                    imageUrl:
                      'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: 'Kokolapa',
                    imageUrl:
                      'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 15,
                    name: 'Kokolapa',
                    imageUrl:
                      'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 16,
                    name: 'Kokolapa',
                    imageUrl:
                      'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList categoryId={2} title={'Комбо'} items={[1, 2, 3, 4, 5]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
