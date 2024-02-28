import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'discuss';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Midia';
    icon: 'folder';
    description: '';
  };
  attributes: {
    file: Attribute.Media & Attribute.Required;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
    description: '';
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'write';
    description: '';
  };
  attributes: {
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'Markdown';
          preset: 'rich';
        }
      >;
  };
}

export interface SharedServiceFeedback extends Schema.Component {
  collectionName: 'components_shared_service_feedbacks';
  info: {
    displayName: 'Feedback';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    avatar: Attribute.Media;
    email: Attribute.Email;
    comment: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 150;
      }>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedVideo extends Schema.Component {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
    description: '';
  };
  attributes: {
    video: Attribute.JSON & Attribute.CustomField<'plugin::video-field.video'>;
  };
}

export interface SocialMediaDiscord extends Schema.Component {
  collectionName: 'components_social_media_discords';
  info: {
    displayName: 'Discord';
    icon: 'hashtag';
  };
  attributes: {
    User: Attribute.String;
  };
}

export interface SocialMediaInstagram extends Schema.Component {
  collectionName: 'components_social_media_instagrams';
  info: {
    displayName: 'Instagram';
    icon: 'link';
    description: '';
  };
  attributes: {
    userName: Attribute.String & Attribute.Required & Attribute.Unique;
  };
}

export interface SocialMediaLinkedin extends Schema.Component {
  collectionName: 'components_social_media_linkedins';
  info: {
    displayName: 'Linkedin';
    icon: 'link';
    description: '';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaMedium extends Schema.Component {
  collectionName: 'components_social_media_mediums';
  info: {
    displayName: 'Medium';
    icon: 'link';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaPinterest extends Schema.Component {
  collectionName: 'components_social_media_pinterests';
  info: {
    displayName: 'Pinterest';
    icon: 'link';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaSnapchat extends Schema.Component {
  collectionName: 'components_social_media_snapchats';
  info: {
    displayName: 'Snapchat';
    icon: 'link';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaTikTok extends Schema.Component {
  collectionName: 'components_social_media_tik_toks';
  info: {
    displayName: 'TikTok';
    icon: 'link';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaTwitter extends Schema.Component {
  collectionName: 'components_social_media_twitters';
  info: {
    displayName: 'Twitter';
    icon: 'link';
  };
  attributes: {
    ProfileLink: Attribute.String;
  };
}

export interface SocialMediaWhatsapp extends Schema.Component {
  collectionName: 'components_social_media_whatsapps';
  info: {
    displayName: 'Whatsapp';
    icon: 'link';
  };
  attributes: {
    Number: Attribute.BigInteger;
  };
}

export interface SocialMediaYouTube extends Schema.Component {
  collectionName: 'components_social_media_you_tubes';
  info: {
    displayName: 'YouTube';
    icon: 'link';
  };
  attributes: {
    ChannelLink: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.faq': SharedFaq;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.service-feedback': SharedServiceFeedback;
      'shared.slider': SharedSlider;
      'shared.video': SharedVideo;
      'social-media.discord': SocialMediaDiscord;
      'social-media.instagram': SocialMediaInstagram;
      'social-media.linkedin': SocialMediaLinkedin;
      'social-media.medium': SocialMediaMedium;
      'social-media.pinterest': SocialMediaPinterest;
      'social-media.snapchat': SocialMediaSnapchat;
      'social-media.tik-tok': SocialMediaTikTok;
      'social-media.twitter': SocialMediaTwitter;
      'social-media.whatsapp': SocialMediaWhatsapp;
      'social-media.you-tube': SocialMediaYouTube;
    }
  }
}
