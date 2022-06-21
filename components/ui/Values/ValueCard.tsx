export interface Card {
  id: number
  title: string
  content: string
  url: string
  url2: string
}
function ValueCard({ card }: { card: Partial<Card> }) {
  return (
    <div
      className="rounded-xl relative sm:mt-4 overflow-hidden md:h-[298px] md:w-1/2 -mx-[4px]"
      style={{
        background: `url(${card.url}) no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute top-0 right-0 left-0 bottom-0 value-card--text-mask"></div>
      <div className="absolute left-[36px] top-[29px] font-lora">
        <h5 className="font-medium text-white text-heading pb-1 word-[-4px]">
          {card.title}
        </h5>
        <p className="text-white font-manrope font-regular text-sub-heading">
          {card.content}
        </p>
      </div>
    </div>
  )
}

export default ValueCard
