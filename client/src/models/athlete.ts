import { types } from "mobx-state-tree";

export const AthleteItem = types.model({
    id: types.identifierNumber,
    name: types.string,
    lastname: types.string,
    email:types.string,
    password: types.string
})
