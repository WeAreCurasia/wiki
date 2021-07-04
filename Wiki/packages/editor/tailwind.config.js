const colors = require('tailwindcss/colors')

module.exports = {
  
      theme: {
    // borderWidth: {
    //       '2': '0.2 px',
      
      
    // },
        extend: {
          fill: theme => ({
            'red': theme('colors.red.500'),
            'green': theme('colors.green.500'),
            'blue': theme('colors.blue.500'),
            'white': theme('colors.white'),
          }),

          colors: {
          'hover-plus': '#37352f',
          'plus':'#D8B384',
          'test': '#557571',
          'warmGray': colors.warmGray,
          'editor': '#FFFDF9',
          'nav': '#E8DED2',
          'item-name': '#27272A', //gray-800
          'trueGray': colors.trueGray,//trueGray-500
          'coolGray': colors.coolGray,
          'hover-list':'#F5F5F4'
            
          
        
        },
        boxShadow:{
        
          '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
         '3xl': '0px 0px 0px 1px rgba(15, 15, 15, 0.1)',
         '4xl': 'rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px',
            
        },
        minHeight: {
           
          '30px':'30px' ,
         },
          borderWidth: {
            '1':'0.5px'
          },
          width: {
            '500': '500px',
            '450':'450px'
          }

    },
  },
    
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
 
  variants: {
    extend: {
      backgroundColor: ['active','open'],
      backgroundOpacity: ['active', 'hover','open'],
      textColor: ['active', 'open'],
      divideWidth:['focus','hover','active','open'],
      divideColor:['focus','hover','active','open'],
      
      transitionDelay: ['hover', 'focus'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      margin: ['hover', 'focus'],
      flexDirection: ['hover', 'focus'],
      fill: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
      outline: ['hover', 'active'],
      padding: ['hover', 'focus'],
    },
  },
  plugins: [

  require('tailwindcss-open-variant')(),
  ],
  corePlugins: {
     preflight: false,
  },
  
}
