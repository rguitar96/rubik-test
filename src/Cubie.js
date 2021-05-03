import React from 'react'
import Face from './Face.js'

const Cubie = ({options, x, y, z}) => {

    console.log('[Cubie] Rendering')

    function buildCubie() {
        var transform = 'translate3d(' + (x * options.cubieSize) + 'px, ' + (y * options.cubieSize) + 'px, ' + (z * options.cubieSize - options.cubieSize) + 'px)';
        var cubie = <div className='cubie'
                                  style={{transformStyle: 'preserve-3d',
                                          transform: transform,
                                          width: options.cubieSize + 'px',
                                          height: options.cubieSize + 'px'}}>
                                

                                {['up', 'down', 'left', 'right', 'front', 'back'].map(function (face) {
                                    return <Face key={face+x+y+z} options={options} x={x} y={y} z={z} position={face} />;
                                })}
                            </div>
        return cubie
    }

    return(
        buildCubie()
    )
}

export default Cubie