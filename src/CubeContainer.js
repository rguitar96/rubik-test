import React from 'react'
import Cube from './Cube.js'

class CubeContainer extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        var now = new Date()
        var timeDiff = now - nextProps.lastRender
        
        if (timeDiff > 100) {
          nextProps.setLastRender(now)
          return true
        }
        return false
    }

    render() {
        console.log('[CubeContainer] Rendering')

        var options = this.props.options;
        var trans = this.props.transform;
    
        var transform = 
            'perspective(' + trans.perspective + 'px) rotateX(' + trans.rx + 'deg) rotateY(' + trans.ry + 'deg) rotateZ(' + trans.rz + 'deg)';
    
        function buildCubeWrapper() {
            var cubeContainer = <div className='cube-wrapper'
                                    style={{transition: options.transition,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: options.cubieSize * 5.2 + 'px',
                                            transformStyle: 'preserve-3d',
                                            transform: transform}}>
                                                
                                    <Cube options={options}/>
                                </div>;
            
            return cubeContainer;
        }
        return(
            <div className='cube-container'>
                {buildCubeWrapper()}
            </div>
        )
    }
}

export default CubeContainer