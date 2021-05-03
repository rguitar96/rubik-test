import React from 'react'
import Sticker from './Sticker.js'

const Face = ({options, x, y, z, position}) => {
    
    console.log('[Face] Rendering')

    var className = 'face ' + position;

    function getTransform(position) {
        var translateAxis = '';
        var rotateAxis = '';
        var size = (options.cubieSize / 2) + 'px';
        var isTranslatePositive = true;
        var isRotatePositive = true;

        if (position === 'right' || position === 'left') {
            translateAxis = 'X';
            rotateAxis = 'Y';
            
            isTranslatePositive = (position === 'right');
            isRotatePositive = (position === 'right');
        }
        if (position === 'up' || position === 'down') {
            translateAxis = 'Y';
            rotateAxis = 'X';
            
            isTranslatePositive = (position === 'down');
            isRotatePositive = (position === 'up');
        }
        if (position === 'front' || position === 'back') {
            translateAxis = 'Z';
            
            isTranslatePositive = (position === 'front');
        }
        var rotate = (rotateAxis === '') ? '' : 'rotate'+rotateAxis+'('+(isRotatePositive ? '' : '-')+'90deg)';
        var transform = 'translate'+translateAxis+'('+(isTranslatePositive ? '' : '-')+size+') '+rotate;

        return transform;
    }

    function hasSticker(x, y, z, position) {
        var result = false;
        switch(position) {
            case 'up':
                result = (y === 0)
                break;
            case 'down':
                result = (y === 2)
                break;
            case 'left':
                result = (x === 0)
                break;
            case 'right':
                result = (x === 2)
                break;
            case 'front':
                result = (z === 2)
                break;
            case 'back':
                result = (z === 0)
                break;
            default:
                result = false;
        }

        return result;
    }

    var transform = getTransform(position);
    function buildFace() {
        var face = <div className={className}
                                  style={{position: 'absolute',
                                          padding: '5%',
                                          width: options.cubieSize * 0.9 + 'px',
                                          height: options.cubieSize * 0.9 + 'px',
                                          backgroundColor: options.colorPlastic,
                                          transform: transform}}>

                                {hasSticker(x, y, z, position) ? <Sticker options={options} position={position}/> : null }
                            </div>
        return face
    }

    return(
        buildFace()
    )
}

export default Face