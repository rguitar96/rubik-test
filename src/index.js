import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CubeContainer from './CubeContainer.js'

var isMouseDown = false;
var cubieSize = 100
var cubeColors = {'up': '#ffffff',
                  'down': '#ffd500',
                  'left': '#ff5800',
                  'right': '#b71234',
                  'front': '#009b48',
                  'back': '#0046ad'}
var startMouse = [null, null]
var direction = null


const App = () => {
  //console.log('rendering')

  var options = {cubieSize: cubieSize, colorPlastic: 'black', colors: cubeColors, transition: 'transform 350ms ease-out 150ms'}
  var [ transform, setTransform ] = useState({perspective: cubieSize * 12, rx: -45, ry: -45, rz: 0})
  var [ lastRender, setLastRender ] = useState(new Date())

  useEffect(() => {
    console.log('useEffect')
    const handleMouseDown = (event) => {
      console.log('mouseDown');
    
      var mouseX = ( (event.touches && event.touches[0]) || event ).clientX;
      var mouseY = ( (event.touches && event.touches[0]) || event ).clientY;
      startMouse = [mouseX, mouseY]
    
      isMouseDown = true;
    
      document.addEventListener('mousemove', handleMove)
    }
    const handleMouseUp = (event) => {
      document.removeEventListener('mousemove', handleMove);
    
      isMouseDown = false;
      direction = null
      startMouse = [null, null];
    
      var rx = Math.round(transform.rx / 45) * 45
      var rz = Math.round(transform.rz / 45) * 45
      var ry = Math.round(transform.ry / 45) * 45
    
      //console.log('MOUSE UP: from ',transform.rx,transform.ry,transform.rz)
      setTransform(Object.assign({}, transform, {rx: rx, ry: ry, rz: rz}));
      //console.log('MOUSE UP: to ',rx,ry,rz)
    }
    
    const handleMove = (event) => {
      if (isMouseDown) {
        var mouseX = ( (event.touches && event.touches[0]) || event ).clientX;
        var mouseY = ( (event.touches && event.touches[0]) || event ).clientY;
    
        var diffX = mouseX - startMouse[0];
        var diffY = mouseY - startMouse[1];
    
        if (direction === null) {
          if (Math.abs(diffX) > Math.abs(diffY)) {
            direction = 'y'
          } else {
            direction = (mouseX > (event.view.innerHeight / 2)) ? 'z' : 'x';
          }
        }
        //console.log('MOUSE MOVE: axis ',direction)
        //console.log('MOUSE MOVE: from ',transform.rx,transform.ry,transform.rz)
        var rx = (direction === 'x') ? transform.rx + ((diffY  / event.view.innerHeight) * 180) : transform.rx;
        var rz = (direction === 'z') ? transform.rz + ((diffY  / event.view.innerHeight) * 180)  : transform.rz;
        var ry = (direction === 'y') ? transform.ry + ((diffX  / event.view.innerHeight) * 180)  : transform.ry;
    
        //console.log('MOUSE MOVE: to ',rx,ry,rz)
    
        //console.log('setting transform')
        setTransform(Object.assign({}, transform, {rx: rx, ry: ry, rz: rz}));
      }
    }

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
  }, [])

  return(
    <div className='scene' style={{backgroundColor: 'gray'}} >
      <CubeContainer transform={transform} options={options} lastRender={lastRender} setLastRender={setLastRender}/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
