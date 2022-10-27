import { IRobots } from '../../feature/models/i.robots';
import { createContext } from 'react';

const initialContext: {
    robots: Array<IRobots>;
    handlerEraser: (deletedName: string) => void;
} = {
    robots: [],
    handlerEraser: () => undefined,
};

export const RobotsContext = createContext(initialContext);
