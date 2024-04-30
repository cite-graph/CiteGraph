import dynamic from 'next/dynamic'
import {useRef} from "react";

// import ForceGraph3D from '3d-force-graph';
import ForceGraph from "./forcegraph"
import {cloneUniformsGroups} from "three/src/renderers/shaders/UniformsUtils";
// const ForceGraph = dynamic(() => import('./forcegraph'), {
//     loading: () => <p>Loading...</p>,
// })

export default function CiteGraph() {
    const wrapperRef = useRef();

    const N = 300;
    const gData = {
        nodes: [...Array(N).keys()].map(i => ({id: i})),
        links: [...Array(N).keys()]
            .filter(id => id)
            .map(id => ({
                source: id,
                target: Math.round(Math.random() * (id - 1))
            }))
    };

    console.log('go here')
    return (
        <div ref={wrapperRef}>
            h11
            <ForceGraph wcontainer={500} hcontainer={500}/>
        </div>
    )
}
