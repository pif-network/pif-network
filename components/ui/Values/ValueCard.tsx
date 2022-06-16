export interface Card {
  title: string
  content: string
  url: string
}
function ValueCard({ Card }: { Card: Partial<Card> }) {
  return (
    <div
      className="rounded-xl relative md:mt-4 overflow-hidden md:h-[298px] md:w-[525px] "
      style={{
        background: `url(${Card.url}) no-repeat`,
        backgroundSize: 'contain',
      }}
    >
      <div className="bg-gradient-to-b from-[#170330] absolute top-0 right-0 left-0 bottom-1/2"></div>
      <div className="absolute left-[36px] top-[29px] font-lora">
        <h4 className="font-medium text-white text-heading pb-1">{Card.title}</h4>
        <p className="text-white font-manrope font-regular text-sub-heading">
          {Card.content}
        </p>
      </div>
    </div>
  )
}

export default ValueCard
