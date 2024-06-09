type ProviderKey = 'flatrate' | 'buy' | 'rent'

interface IProvider {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
}

interface INationProvider {
  link: string
  flatrate: IProvider[] | null
  buy: IProvider[] | null
  rent: IProvider[] | null
}

interface IProviders {
  [key: string]: INationProvider
}
