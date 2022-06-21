import ValueCard from './ValueCard'
import { Card } from './ValueCard'

const ValueCards = ({ value }: { value: Card[] }) => {
  return (
    <>
      <div className="hidden md:flex flex-wrap md:items-center lg:gap-4 justify-between">
        {value.map((item) => (
          <ValueCard key={item.id} card={item} />
        ))}
      </div>
    </>

  )
}
export default ValueCards
