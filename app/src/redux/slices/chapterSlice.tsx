import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChapterContentsReturn } from '@srd/common/interfaces/ChapterInterfaces'

interface State {
    rulesGuideChapters: ChapterContentsReturn[],
    playersGuideChapters: ChapterContentsReturn[]
}

const initialState: State = {
  rulesGuideChapters: [],
  playersGuideChapters: []
}

export const chapterSlice = createSlice({
  name: 'chapter',
  initialState,
  reducers: {
    saveChapter: (state: State, action: PayloadAction<ChapterContentsReturn>) => {
      if (action.payload.book === 'rules') {
        state.rulesGuideChapters[action.payload.chapter] = action.payload
      } else if (action.payload.book === 'players') {
        state.playersGuideChapters[action.payload.chapter] = action.payload
      }
    }
  },
})

export const { saveChapter } = chapterSlice.actions

export default chapterSlice.reducer