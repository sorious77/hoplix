export default function MovieCredit({ credit }: { credit: ICredit }) {
  return (
    <div>
      <img
        src={credit.profile_path}
        alt={credit.name}
        className='rounded-2xl h-5/6'
      />
      <div className='text-sm mt-2'>{credit.character}</div>
      <div className='text-xs text-gray-400 mb-2'>{credit.name}</div>
    </div>
  )
}
