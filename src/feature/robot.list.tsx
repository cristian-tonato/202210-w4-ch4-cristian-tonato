import { SyntheticEvent, useContext } from 'react';
import { RobotsContext } from '../infraestructure/context/context';


export function RobotList() {
    const { robots, handlerEraser } = useContext(RobotsContext);

    const handlerDeleteOnClick = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        console.log(element.alt);
        handlerEraser(element.alt);
    };

    return (
        <>
            {robots.map((item) => (
                <li>
                    <div>
                        {' '}
                        <img
                            src={item.img}
                            alt={item.name}
                            onClick={handlerDeleteOnClick}
                        />
                        <p>Name - {item.name}</p>
                        <p>Endurance - {item.endurance}</p>
                        <p>Speed: {item.speed}</p>
                    </div>
                </li>
            ))}
            
        </>
    );
}
