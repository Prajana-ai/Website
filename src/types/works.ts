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

  // Detail page fields (optional in base)
  bannerImageUrl?: string;
  longDescription?: string;
  whatWeLove?: {
    title: string;
    content: string;
  };
  screenshots?: AppScreenshot[];
  shareText?: string;
  quickTip?: {
    title: string;
    content: string;
  };
  inAppPurchases?: boolean;
}

export interface LargeFeatureWork extends WorkBase {
  type: 'large-feature';
  subtitle?: string;
  features?: string[]; // e.g., ['Feature 1', 'Feature 2']
}

export interface MediumFeatureWork extends WorkBase {
  type: 'medium-feature';
}

export interface ListItemWork extends WorkBase {
  type: 'list-item';
  price?: string; // e.g., "$34.99" or "Get"
}

export interface SmallImageWork extends WorkBase {
  type: 'small-image';
}

export type WorkItemData = LargeFeatureWork | MediumFeatureWork | ListItemWork | SmallImageWork;

export interface AppScreenshot {
  id: string;
  url: string;
  caption?: string;
}

export interface AppDetailData extends WorkBase {
  appId: string;
  longDescription: string;
  whatWeLove: {
    title: string;
    content: string;
  };
  screenshots: AppScreenshot[];
}
