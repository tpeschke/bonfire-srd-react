import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChapterContentsReturn } from '@srd/common/interfaces/chapterInterfaces/chapterInterfaces'

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
      const { payload } = action
      if (payload.book === 'rules') {
        state.rulesGuideChapters[payload.chapter] = payload
      } else if (payload.book === 'players') {
        state.playersGuideChapters[payload.chapter] = payload
      }
    }
  },
})

export const { saveChapter } = chapterSlice.actions

export default chapterSlice.reducer