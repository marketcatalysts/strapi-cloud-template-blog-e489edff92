import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMembers extends Schema.Component {
  collectionName: 'components_shared_members';
  info: {
    displayName: 'Members';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Position: Attribute.String;
    Bio: Attribute.Blocks;
    Photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SocialLinks: Attribute.String;
    Content2: Attribute.RichText;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface MarketCatalystsCataystsItems extends Schema.Component {
  collectionName: 'components_market_catalysts_cataysts_items';
  info: {
    displayName: 'Cataysts-Items';
    icon: 'check';
  };
  attributes: {
    marketCatalysts: Attribute.Enumeration<
      [
        'featuredCatalysts',
        'marketCatalysts',
        'marketMovers',
        'Earnings',
        'Economics',
        'FDA',
        'Conferences',
        'IPO',
        'Dividends',
        'Splits',
        'Other'
      ]
    >;
    date: Attribute.Date;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface MarketCatalystsCatalystSection extends Schema.Component {
  collectionName: 'components_market_catalysts_catalyst_sections';
  info: {
    displayName: 'Catalyst-Section';
    icon: 'feather';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    catalyst_items: Attribute.Component<
      'market-catalysts.cataysts-items',
      true
    >;
  };
}

export interface MarketCatalystsCatalystItem extends Schema.Component {
  collectionName: 'components_market_catalysts_catalyst_items';
  info: {
    displayName: 'Catalyst Item';
    icon: 'manyWays';
  };
  attributes: {
    type: Attribute.Enumeration<
      [
        'Market Catalysts',
        'Market Movers',
        'Earnings',
        'FDA',
        'Economic',
        'Conference',
        'IPO',
        'Dividend',
        'Splits',
        'Other'
      ]
    >;
    date: Attribute.Date;
    time: Attribute.Time;
    companyEventName: Attribute.String;
    tickerSymbol: Attribute.String;
    description: Attribute.RichText;
    potentialImpact: Attribute.String;
    relatedStockSectors: Attribute.String;
    URL: Attribute.String;
    importanceLevel: Attribute.Enumeration<
      [
        'Extremely High - Stock Market Mover',
        'High - Individual Stock Mover',
        'Medium - Potential Stock Mover',
        'Low - Small Chance Stock Mover'
      ]
    >;
    chartImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    estimatedValue: Attribute.Decimal;
    analystsConsensus: Attribute.String;
    isConfirmed: Attribute.Boolean;
    tags: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.meta-social': SharedMetaSocial;
      'shared.members': SharedMembers;
      'shared.media': SharedMedia;
      'market-catalysts.cataysts-items': MarketCatalystsCataystsItems;
      'market-catalysts.catalyst-section': MarketCatalystsCatalystSection;
      'market-catalysts.catalyst-item': MarketCatalystsCatalystItem;
    }
  }
}
