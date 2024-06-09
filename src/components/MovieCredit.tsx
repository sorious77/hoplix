export default function MovieCredit({ credit }: { credit: ICredit }) {
  return (
    <div>
      <img
        src={credit.profile_path}
        alt={credit.name}
        className='rounded-2xl h-5/6'
      />
      <div className='text-sm'>{credit.name}</div>
    </div>
  )
}
