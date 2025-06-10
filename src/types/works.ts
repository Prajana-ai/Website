export interface WorkBase {
  id: string; // Unique ID for the item itself
  appId?: string; // Optional: Identifier for linking to a detail page, e.g., 'sketch-design-toolkit'
  title: string;
  description?: string;
  category?: string;
  creatorId?: string; // ID of the creator
  creatorName?: string; // Display name of the creator
  imageUrl?: string;
  iconUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface LargeFeatureWork extends WorkBase {
  type: 'large-feature';
  subtitle?: string;
  features?: string[]; // e.g., ['Feature 1', 'Feature 2']
}

export interface MediumFeatureWork extends WorkBase {
  type: 'medium-feature';
  // Specific properties for medium feature if any, imageUrl is primary
}

export interface ListItemWork extends WorkBase {
  type: 'list-item';
  price?: string; // e.g., "$34.99" or "Get"
  // iconUrl is important here
}

export interface SmallImageWork extends WorkBase {
  type: 'small-image';
  // imageUrl is the background, description might be shorter
}

export type WorkItemData = LargeFeatureWork | MediumFeatureWork | ListItemWork | SmallImageWork;

export interface AppScreenshot {
  id: string;
  url: string;
  caption?: string;
}

export interface AppDetailData extends WorkBase {
  appId: string; // To be used in URL, e.g., 'sketch-design-toolkit'
  bannerImageUrl?: string; // Large image at the top
  longDescription: string;
  whatWeLove: {
    title: string;
    content: string;
  };
  screenshots: AppScreenshot[];
  shareText?: string;
  quickTip?: {
    title: string;
    content: string;
  };
  inAppPurchases?: boolean;
  // Potentially more fields like developer, version, compatibility, etc.
}

