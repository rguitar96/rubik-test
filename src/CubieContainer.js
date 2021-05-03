import React from 'react'
import Cubie from './Cubie.js'

const CubieContainer = ({options, x, y, z}) => {

    console.log('[CubieContainer] Rendering')

    function buildCubieContainer() {
        var cubieContainer = <div className='cubie-container'
                                  style={{transition: options.transition,
                                          transformStyle: 'preserve-3d',
                                          position: 'absolute',
                                          top: '0',
                                          bottom: '0',
                                          left: '0',
                                          right: '0'}}>
                                <Cubie options={options} x={x} y={y} z={z}/>
                            </div>
        return cubieContainer
    }

    return(
        buildCubieContainer()
    )
}

export default CubieContainer