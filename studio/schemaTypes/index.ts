import {AboutPage} from '../schemas/documents/aboutPage'
import {ContactPage} from '../schemas/documents/contactPage'
import {HomeCarePage} from '../schemas/documents/homeCarePage'
import {HomePage} from '../schemas/documents/homePage'
import {Post} from '../schemas/documents/post'
import {QuoteList} from '../schemas/fieldTypes/quoteList'
import {WorkPage} from '../schemas/documents/workPage'
import {BasicTextEditor} from '../schemas/fieldTypes/basicTextEditor'
import {ExtendedImage} from '../schemas/fieldTypes/extendedImage'
import {FilesList} from '../schemas/fieldTypes/filesList'
import {PanelContentTrio} from '../schemas/fieldTypes/panelContentTrio'
import {PanelHeadingAndText} from '../schemas/fieldTypes/panelHeadingAndText'
import {PanelImageAndText} from '../schemas/fieldTypes/panelImageAndText'
import {Person} from '../schemas/fieldTypes/person'
import {Gallery} from '../schemas/documents/gallery'
import {GalleryImages} from '../schemas/fieldTypes/galleryImages'
import {ContactInfo} from '../schemas/documents/contactInfo'

export const schemaTypes = [
  HomePage,
  HomeCarePage,
  WorkPage,
  AboutPage,
  ContactPage,
  BasicTextEditor,
  ExtendedImage,
  Person,
  Post,
  PanelHeadingAndText,
  PanelImageAndText,
  PanelContentTrio,
  FilesList,
  QuoteList,
  Gallery,
  GalleryImages,
  ContactInfo,
]
