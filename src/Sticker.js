import React from 'react'

const Sticker = ({options, position}) => {

    console.log('[Sticker] Rendering')

    var className = 'sticker';
    var color = options.colors[position];

    function buildSticker() {
        var sticker = <div className={className}
                                  style={{width: '100%',
                                          height: '100%',
                                          borderRadius: '10%',
                                          backgroundColor: color}}>
                            </div>
        return sticker
    }

    return(
        buildSticker()
    )
}

export default Sticker