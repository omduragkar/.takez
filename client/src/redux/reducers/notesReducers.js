import {createSlice} from "@reduxjs/toolkit"



const notesReducers = createSlice({
    name: 'Notes',
    initialState: 
    {
      notesArr:[
        {
          box:"TODO",
          title:"To do",
          id:Math.random()*1.56 + Math.random()*163,
          list:[
            {
              title:"Design- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.56 + Math.random()*133
            },
            {
              title:"Design- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.56 + Math.random()*133
            },
            {
              title:"Design- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.56 + Math.random()*133
            },
            {
              title:"Design- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.56 + Math.random()*133
            },
            {
              title:"Design- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.56 + Math.random()*133
            },
            {
              title:"Design- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.56 + Math.random()*133
            },
          ]
        },
        {
          box:"INPROGRESS",
          title:"In Progress",
          id:Math.random()*1.56 + Math.random()*173,
    
          list:[
            {
              title:"Develop- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.89 + Math.random()*7 
            },
            {
              title:"Develop- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.89 + Math.random()*7 
            },
            {
              title:"Develop- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.89 + Math.random()*7 
            },
            {
              title:"Develop- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.89 + Math.random()*7 
            },
          ]
          
        },
        {
          box:"COMPLETED",
          title:"Completed",
          id:Math.random()*1.56 + Math.random()*191,
          list:[
            {
              title:"Deploy- App",
              description:"For this saljfnalskfnlkasnflkandflsanflkam",
              id:Math.random()*1.92 + Math.random()*11564 
            }
          ]
          
        }
      ]
    },
    reducers: {
      setNote: function (state, action) {
        console.log(action.payload)
        state.notes = action.payload
      }
    }
})

export const {setNote } = notesReducers.actions;
export default notesReducers.reducer;