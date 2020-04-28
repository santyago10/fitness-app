import { types } from "mobx-state-tree";

export const AssignedProgramItem = types.model({
    id: types.identifierNumber,
    program_id : types.integer
})
