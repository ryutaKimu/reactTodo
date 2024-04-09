import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage: 'linear-gradient(to bottom right, #8cb4ff, pink)',
        color: 'white',
        overflow: "hidden"
        
      },
      html: {
        height: '100vh'
      }, 
     h1:{
        fontSize: "4rem",
        textAlign: "center",
        marginTop:"12%"
     },
    }
  },
  components: {
    Input: {
      baseStyle: {
        '::placeholder': {
          color: 'whiteAlpha.700', // placeholderの色を設定します
        },
      },
    },
  },
});
