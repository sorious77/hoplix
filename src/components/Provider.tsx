export default function Provider(provider: IProvider) {
  return (
    <div className='mt-2'>
      <img
        src={
          provider.logo_path.indexOf('https://image.tmdb.org') >= 0
            ? provider.logo_path
            : `https://image.tmdb.org/t/p/w300${provider.logo_path}`
        }
        alt={provider.provider_name}
        width={100}
        className='rounded-xl'
      />
      <span className='text-sm pl-1'>{provider.provider_name}</span>
    </div>
  )
}
