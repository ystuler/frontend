import { defineStore } from "pinia";
import groups from './mock/groups.json'

export interface Group {
    id: number;
    faculty: string;
    direction: Direction[];
}

interface Direction {
    id: number;
    nameGroup: string;
    list: GroupName[];
}

interface GroupName {
    id: number;
    name: string;
}

export interface GroupState {
    groups: Group[];
}

export const useGroupStore = defineStore('group', {
    state: (): GroupState => ({
        groups: groups as Group[]
    })
});
