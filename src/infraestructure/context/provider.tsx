import { useState } from 'react';
import { RobotsContext } from './context';
import { robots,IRobots } from "../../feature/models/i.robots";

export function RobotsContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots= robots;
    const [robots, setRobots] = useState(initialRobots);

    const handlerEraser = (deletedName: string) => {
        setRobots(robots.filter((item) => item.name !== deletedName));
    };
    const context = {
        robots,
        handlerEraser,
    };

    return (
        <RobotsContext.Provider value={context}>
            {children}
        </RobotsContext.Provider>
    );
}
