import { post, get, patch, del } from './request';

export const postHabit = habit => post('/habits', habit);
export const getHabits = (page = 1) => get(`/habits?page=${page}`);
export const getHabit = id => get(`/habits/${id}`);
export const patchHabit = id => patch(`/habits/${id}`);
export const delHabit = id => del(`/habits/${id}`);
