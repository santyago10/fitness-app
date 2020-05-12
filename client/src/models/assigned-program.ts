import { types } from "mobx-state-tree";

export const AssignedProgramItem = types.model({
    id: types.identifierNumber,
    name: types.string,
    duration: types.number
})
