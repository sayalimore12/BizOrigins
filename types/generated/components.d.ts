import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsWhatMakesUsDifferent extends Struct.ComponentSchema {
  collectionName: 'components_about_us_what_makes_us_differents';
  info: {
    description: '';
    displayName: 'what-makes-us-different';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface OurImpactAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_our_impact_about_uses';
  info: {
    description: '';
    displayName: 'about-us';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface OurServicesOurServices extends Struct.ComponentSchema {
  collectionName: 'components_our_services_our_services';
  info: {
    displayName: 'our-services';
  };
  attributes: {
    icon: Schema.Attribute.String;
    our_services_des: Schema.Attribute.Text;
    our_services_title: Schema.Attribute.String;
  };
}

export interface PricingOfferingsPricingOfferings
  extends Struct.ComponentSchema {
  collectionName: 'components_pricing_offerings_pricing_offerings';
  info: {
    displayName: 'pricing-offerings';
  };
  attributes: {
    pricing_offerings_list: Schema.Attribute.String;
  };
}

export interface PricingPricing extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    price: Schema.Attribute.String;
    pricing_des: Schema.Attribute.String;
    pricing_offerings: Schema.Attribute.Component<
      'pricing-offerings.pricing-offerings',
      false
    >;
    pricing_title: Schema.Attribute.String;
  };
}

export interface TeamMemberAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_team_member_about_uses';
  info: {
    description: '';
    displayName: 'about-us';
  };
  attributes: {
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface WhyChooseUsWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_us_why_choose_uses';
  info: {
    displayName: 'why-choose-us';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.what-makes-us-different': AboutUsWhatMakesUsDifferent;
      'our-impact.about-us': OurImpactAboutUs;
      'our-services.our-services': OurServicesOurServices;
      'pricing-offerings.pricing-offerings': PricingOfferingsPricingOfferings;
      'pricing.pricing': PricingPricing;
      'team-member.about-us': TeamMemberAboutUs;
      'why-choose-us.why-choose-us': WhyChooseUsWhyChooseUs;
    }
  }
}
