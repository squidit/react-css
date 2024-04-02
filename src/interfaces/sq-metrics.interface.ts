export interface Classification {
  ranking: number
  total: number
}

export interface MetricsDetails {
  user: number
  influencersAverage: number
  position: Classification
  first: number
}

export interface TotalClicks {
  clicks: MetricsDetails
}

export interface UniqueClicks {
  uniqueClicks: MetricsDetails
}

export interface ConvertionsCount {
  convertions_count: MetricsDetails
}

export interface ConvertionsValue {
  convertions_value: MetricsDetails
}

export interface Ctr {
  ctr: MetricsDetails
}

export interface Metric {
  posts: MetricsDetails
  stories: MetricsDetails
}

export default interface CampaignStatisticsUser {
  engagementRate: Metric
  engagement: Metric
  reach: Metric
  effectiveReach: Metric
  impressions: Metric
  totalClicks: TotalClicks
  uniqueClicks: UniqueClicks
  date: string
  convertions_count: ConvertionsCount
  convertions_value: ConvertionsValue
  ctr: Ctr
}
