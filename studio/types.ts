import {SanityAsset} from '@sanity/image-url/lib/types/types'
import {PortableTextBlock} from 'sanity'

export type PreviewProps = {
  title?: string | Array<PortableTextBlock>
  image?: SanityAsset
}
