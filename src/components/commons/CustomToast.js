import React from 'react';
import Toast from 'react-native-root-toast';

  const toast = (msg)=> Toast.show(msg,{
      duration:Toast.durations.LONG,
      position:Toast.positions.BOTTOM,
      shadow:true,
      animation:true,
      hideOnPress:true,
      delay:0,
      onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
  })


  export default toast;