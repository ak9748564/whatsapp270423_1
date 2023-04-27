/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: {
      animation:{
        search_messages_full:'search_messages_full 0.16s ease-in-out forwards',
        search_messages_zero:'search_messages_zero 0.16s ease-in-out forwards',
        chat_single_menu_self: 'chat_single_menu_self 0.16s ease-in-out forwards',
        chat_single_menu_normal: 'chat_single_menu_normal 0.16s ease-in-out forwards',
        chat_single_menu_business: 'chat_single_menu_business 0.16s ease-in-out forwards',
        chat_single_menu_group: 'chat_single_menu_group 0.16s ease-in-out forwards',
        chats_menu : 'chats_menu 0.16s ease-in-out forwards',
        select_chats_menu : 'select_chats_menu 0.16s ease-in-out forwards',
        starred_messages_menu : 'starred_messages_menu 0.16s ease-in-out forwards',
        new_chats_show: 'new_chats_show 0.16s ease-in-out forwards',
        new_chats_hide: 'new_chats_hide 0.16s ease-in-out forwards',
        communities_show: 'communities_show 0.16s ease-in-out forwards',
        communities_hide: 'communities_hide 0.16s ease-in-out forwards',
        opacity : 'opacity 0.25s ease-in-out forwards',
        group_creation_result_true : 'group_creation_result_true 0.25s ease-in-out forwards',
        group_creation_result_false : 'group_creation_result_false 0.25s ease-in-out forwards',
        disappearing_messages_true : 'disappearing_messages_true 0.25s ease-in-out forwards',
        scale_full: 'scale_full 0.25s ease-in-out forwards',
        scale_zero: 'scale_zero 0.25s ease-in-out forwards',
        doodle: 'doodle 0.25s ease-in-out forwards',
        scale_up1: 'scale_up 0.4s ease-out forwards',
        scale_up2: 'scale_up 0.42s ease-out forwards',
        scale_up3: 'scale_up 0.45s ease-out forwards',
        scale_up4: 'scale_up 0.49s ease-out forwards',
        scale_up5: 'scale_up 0.54s ease-out forwards',
        scale_up6: 'scale_up 0.6s ease-out forwards',
        scale_down1: 'scale_down 0.35s ease-out forwards',
        scale_down2: 'scale_down 0.28s ease-out forwards',
        scale_down3: 'scale_down 0.22s ease-out forwards',
        scale_down4: 'scale_down 0.17s ease-out forwards',
        scale_down5: 'scale_down 0.13s ease-out forwards',
        scale_down6: 'scale_down 0.1s ease-out forwards',
        attach_up : 'attach_up 1s ease-in-out forwards',
        attach_down : 'attach_down 1s ease-in-out forwards',
      },
      keyframes:{
        search_messages_full:{
          '0%':{opacity:'0',minWidth:'0px',maxWidth:'0px'},
          '100%':{opacity:'1',minWidth:'400px',maxWidth:'400px'}
        },
        search_messages_zero:{
          '0%':{opacity:'1',minWidth:'400px',maxWidth:'400px'},
          '100%':{opacity:'0',minWidth:'0px',maxWidth:'0px'}
        },
        chat_single_menu_self:{
          '0%':{opacity:'0',width:'0px',height:'0px',left:'0px'},
          '100%':{opacity:'1',width:'230px',height:'252px',left:'-180px'}
        },
        chat_single_menu_normal:{
          '0%':{opacity:'0',width:'0px',height:'0px',left:'0px'},
          '100%':{opacity:'1',width:'230px',height:'372px',left:'-180px'}
        },
        chat_single_menu_business:{
          '0%':{opacity:'0',width:'0px',height:'0px',left:'0px'},
          '100%':{opacity:'1',width:'230px',height:'412px',left:'-180px'}
        },
        chat_single_menu_group:{
          '0%':{opacity:'0',width:'0px',height:'0px',left:'0px'},
          '100%':{opacity:'1',width:'230px',height:'212px',left:'-180px'}
        },
        chats_menu:{
          '0%':{opacity:'0',width:'0px',height:'0px',left:'0px'},
          '100%':{opacity:'1',width:'180px',height:'292px',left:'-130px'}
        },
        select_chats_menu:{
          '0%':{opacity:'0',width:'0px',height:'0px',left:'0px'},
          '100%':{opacity:'1',width:'180px',height:'92px',left:'-130px'}
        },
        starred_messages_menu:{
          '0%':{opacity:'0',width:'0px',height:'0px',left:'0px'},
          '100%':{opacity:'1',width:'180px',height:'52px',left:'-130px'}
        },
        new_chats_show:{
          '0%':{opacity:'0',left:'-400px'},
          '100%':{opacity:'1',left:'0px'}
        },
        new_chats_hide:{
          '0%':{opacity:'1',left:'0px'},
          '100%':{opacity:'0',left:'-400px'}
        },
        communities_show:{
          '0%':{opacity:'0',left:'-800px'},
          '100%':{opacity:'1',left:'0px'}
        },
        communities_hide:{
          '0%':{opacity:'1',left:'0px'},
          '100%':{opacity:'0',left:'-800px'}
        },
        opacity:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1'}
        },
        group_creation_result_true :{
          '0%':{width:'0px',height:'0px'},
          '100%':{width:'480px',height:'100%'}
        },
        group_creation_result_false :{
          '0%':{width:'480px',height:'100%'},
          '100%':{width:'0px',height:'0px'}
        },
        disappearing_messages_true :{
          '0%':{width:'0px',height:'0px'},
          '100%':{width:'480px',height:'100%'}
        },
        disappearing_messages_false :{
          '0%':{width:'480px',height:'100%'},
          '100%':{width:'0px',height:'0px'}
        },
        scale_full:{
          '0%':{transform:'scale(0)'},
          '100%':{transform:'scale(1)'}
        },
        doodle:{
          '0%':{left:'3870px'},
          '6%':{left:'3870px'},
          '6.66%':{left:'3870px'},
        },
        scale_up:{
          '0%':{height:"0px",width:"0px",opacity:'0'},
          '80%':{height:"58px",width:"58px",opacity:'1'},
          '100%':{ height:"53px",width:"53px",opacity:'1'}
        },
        scale_down:{
          '0%':{transform:'scale(1)',opacity:'1'},
          '100%':{transform:'scale(0)',opacity:'0'}
        },
        attach_up:{
          '0%':{height:'0px'},
          '100%':{height:'375px'}
        },
        attach_down:{
          '0%':{height:'375px'},
          '100%':{height:'0px'}
        },
    },
  },
  plugins: [],
}
}
