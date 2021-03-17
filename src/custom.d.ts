type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: RecordItem
}
type RecordItem = {
  notes: string
  type: string
  amount: number
  tag: string
  createdAt: string
  id?: string,

}
type Tag = {
  name: string,
  iconName: string
}
type dayResult = {
  title: string
  total?: number
  items: RecordItem[]
  id?: string,
}[]
type typeResult = {
  tag: string
  total?: number
  items: RecordItem[]
}[]

