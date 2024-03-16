import { defineStore } from "pinia";
import lessons from './mock/lessons.json'

export interface Lesson {
    id: number;
    timeStart: number;
    timeEnd: number;
    name: string;
    subgroup: number;
    teacher: string;
    audience: string;
}

export interface LessonState {
    lessons: Lesson[];
}

export const useLessonStore = defineStore('lesson', {
    state: (): LessonState => ({
        lessons: lessons as Lesson[]
    }),
    actions: {
        
    }
}) 
