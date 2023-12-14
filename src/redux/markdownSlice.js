import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

export const markdownSlice = createSlice({
    name: 'markdown',
    initialState: {
        textCurrent: ' ',
        textUser: ' ',
        backupTextUser : '',
        textHelp: help,
        isShowingHelp: false,
    },
    reducers: {
        enterText: (state,action) =>{
            state.textCurrent = action.payload;
            state.textUser = action.payload;
        },
        toggleHelp: (state) => {
            if(state.isShowingHelp) {
                state.textUser = state.backupTextUser;
                state.textCurrent = state.backupTextUser;
                state.isShowingHelp = false;
            }
            else {
                state.textCurrent=state.textHelp;
                state.backupTextUser = state.textUser;
                state.textUser=state.textHelp;
                state.isShowingHelp = true;
            }
        }
    }
})

export const {enterText, toggleHelp} = markdownSlice.actions;
export default markdownSlice.reducer;
