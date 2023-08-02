import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    jobNames: [
        "PLD",
        "WAR",
        "DRK",
        "GNB",
        "WHM",
        "SCH",
        "AST",
        "SGE",
        "MNK",
        "DRG",
        "NIN",
        "SAM",
        "RPR",
        "BRD",
        "MCH",
        "DNC",
        "BLM",
        "SMN",
        "RDM",
    ],
    playerOneJobs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
};

export const jobSlice = createSlice({
    name: "playerOne",
    initialState,
    reducers: {
        removeJob: (state, action) => {
            state.playerOneJobs = state.playerOneJobs.filter((el) => {
                return el != action.payload;
            });
        },
        addJob: (state, action) => {
            state.playerOneJobs.push(action.payload);
            state.playerOneJobs = state.playerOneJobs.sort((a, b) => a - b);
        },
    },
});

export const { addJob, removeJob } = jobSlice.actions;

export default jobSlice.reducer;
