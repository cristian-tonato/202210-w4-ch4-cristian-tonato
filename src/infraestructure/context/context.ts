import { IRobots } from '../../feature/models/i.robots';
import { createContext } from 'react';

const initialContext: {
    robots: Array<IRobots>;
    handlerEraser: (deleteName: string) => void;
} = {
    robots: [],
    handlerEraser: () => undefined,
};

export const RobotsContext = createContext(initialContext);
