import { Dispatch, SetStateAction } from 'react';

export type SetTypeFunction<T> = Dispatch<SetStateAction<T>>;
