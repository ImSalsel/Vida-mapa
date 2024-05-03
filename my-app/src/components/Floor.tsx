import React, { useState, useEffect } from 'react';

import mapFloor1 from '../assets/mapFloor1.png';
import mapFloor2 from '../assets/mapFloor2.png';
import pathsData from '../FloorPaths.json';
import InfoBox from './InfoBox';



const FirstFloorMap: React.FC = () => {
    const [info, setInfo] = useState<{ name: string; info: string; backgroundColor: string ; type: string } | null>(null);
    const [floor, setFloor] = useState<number>(1);
    const [paths, setPaths] = useState<{ name: string; d: string; strokeColor: string; info: string; type: string }[]>([]);


    useEffect(() => {
        setPaths(floor === 1 ? pathsData.floor1 : pathsData.floor2);
    }, [floor]);

    const handleMouseOver = (event: React.MouseEvent<SVGElement>) => {
        const target = event.target as SVGGraphicsElement;
        const strokeColor = target.dataset.strokeColor;
        if (target.dataset) {
            target.style.fill = 'none';
            target.style.stroke = strokeColor ? strokeColor : 'black';
        }
    };

    const handleClick = (event: React.MouseEvent<SVGElement>) => {
        const target = event.target as SVGGraphicsElement;
        const partName = target.dataset.name;
        const strokeColor = target.dataset.strokeColor || "black";
        const info = target.dataset.info || "Data nenalezena";
        const type = target.dataset.type || "type nenalezen";
        if (partName) {
            setInfo({ name: partName, info: info, backgroundColor: strokeColor, type: type });
        }
    };

    const handleMouseOut = (event: React.MouseEvent<SVGElement>) => {
        const target = event.target as SVGGraphicsElement;
        target.style.fill = 'none';
        target.style.stroke = 'none';
        
    };

    const switchFloor = (floorNumber: number) => {
        setFloor(floorNumber);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '600px' }}>

            
            <div style={{height: '30%', width:'25%', marginLeft: '1%' }}><InfoBox data={{ name: info?.name!, info: info?.info!, backgroundColor: info?.backgroundColor!, type: info?.type! }}  /></div>

            <div style={{ position: 'relative', width: '100%', height: '650px' }}>

                <svg width="80%" height="100%" viewBox="0 0 500 400" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>
                    <image className="image-container" href={floor === 1 ? mapFloor1 : mapFloor2} width="100%" height="100%" style={{ opacity: floor === 1 ? 1 : 0 }} />
                    <image className="image-container" href={floor === 2 ? mapFloor2 : mapFloor2} width="100%" height="100%" style={{ opacity: floor === 2 ? 1 : 0 }} />

                    <g transform="translate(50, 50)"> { }

                        {paths.map((path, index) => (
                            <path
                                key={index}
                                d={path.d}
                                fill="none"
                                stroke="none"
                                data-name={path.name}
                                data-strokeColor={path.strokeColor}
                                data-info={path.info}
                                data-type={path.type}
                                style={{ pointerEvents: 'all' }}
                            />
                        ))}
                    </g>
                </svg>
            </div>

            <div style={{ marginRight: '5%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button onClick={() => switchFloor(2)} style={{ width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer', backgroundColor: floor === 2 ? 'lightblue' : 'white' }}>2</button>
                <button onClick={() => switchFloor(1)} style={{ width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer', backgroundColor: floor === 1 ? 'lightblue' : 'white' }}>1</button>
            </div>
        </div>
    );
}

export default FirstFloorMap;
