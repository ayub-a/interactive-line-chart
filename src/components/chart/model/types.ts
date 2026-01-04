export type ChartVariation = { 
  id: string | number
  name: string 
}

export type ChartHistory = {
  date: string
  visits: Partial<Record<string, number>>
  conversions: Partial<Record<string, number>>
};

export type ChartData = {
  variations: ChartVariation[]    
  data: ChartHistory[]      
}

export type ChartUISettings = {
  dots: boolean
  legend: boolean
  lineStyle: ChartStyle
}

export type PeriodType = 'day' | 'week'

export type ExportOption = 'Bg: Light' | 'Bg: Dark' | 'Bg: Transparent'

export type ChartStyle = 'line' | 'smooth' | 'area'
