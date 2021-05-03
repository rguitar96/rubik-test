import React from 'react'
import CubieContainer from './CubieContainer.js'

var rendered = false;
class Cube extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (!rendered) {
          rendered = true
          return true
        } else {
            return false
        }
    }

    render() {
        console.log('[Cube] Rendering')

        var options = this.props.options;

        function buildCube() {
            var cubies = [];
            for (var i=0;i<3;i++) {
                for (var j=0;j<3;j++) {
                    for (var k=0;k<3;k++) {
                        cubies.push({x: i, y: j, z: k})
                    }
                }
            }
    
            var cube = <div className='cube'
                            style={{transition: options.transition,
                                position: 'relative',
                                width: options.cubieSize * 3 + 'px',
                                height: options.cubieSize * 3 + 'px',
                                transformStyle: 'preserve-3d'}}>
    
                            {cubies.map(function (value) {
                                return <CubieContainer key={'cubie'+value.x+value.y+value.z} options={options} x={value.x} y={value.y} z={value.z}/>;
                            })}
    
                        </div>
            return cube
        }
        return(
            buildCube()
        )
    }
}

export default Cube