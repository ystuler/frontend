import { defineStore } from 'pinia';
import groups from './mock/groups.json';

interface GroupUp {
    id: number;
    groupUpName: string;
}

interface ListGroup {
    id: number;
    groupName: string;
    listUpGroups: GroupUp[];
}

interface Direction {
    id: number;
    cursNumber: string;
    listGroups: ListGroup[];
}

interface Faculty {
    id: number;
    facultyName: string;
    directions: Direction[];
}

interface GroupState {
    faculties: Faculty[];
}

export const useGroupStore = defineStore('group', {
    state: (): GroupState => ({
        faculties: groups as Faculty[]
    }),
    // getters: {
    //     filterGroups: (state) => {
    //         return (query: string) => {
    //             const lowerQuery = query.toLowerCase();
    //             return state.faculties.flatMap(faculty =>
    //                 faculty.directions.flatMap(direction =>
    //                     direction.listGroups.flatMap(listGroup =>
    //                         listGroup.listUpGroups.filter(groupUp =>
    //                             groupUp.groupUpName.toLowerCase().includes(lowerQuery)
    //                         )
    //                     )
    //                 )
    //             );
    //         };
    //     }
    // }
});
