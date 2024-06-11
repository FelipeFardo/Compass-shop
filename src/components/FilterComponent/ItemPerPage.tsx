interface ItemsPerPageProps {
  ItemsPerPage: number
}

export function ItemsPerPage({ ItemsPerPage }: ItemsPerPageProps) {
  return (
    <div>
      Show <span>{ItemsPerPage}</span>
    </div>
  )
}
