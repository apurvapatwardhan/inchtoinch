import { nanoid } from 'nanoid'
export const navLinks = {
    Home:{
        list:[{
            label:'Home', value:"/",id:nanoid()}
        ],
        id:nanoid()
    },
    'About us': {
        list:[{label:'Inch to inch', value:'/#inch_to_inch',id:nanoid()}, {
            label:'Workmanship', value:'/#workmanship',id:nanoid()
        }],
        id:nanoid()
    },
    Services: {
        list:[{label:'Art', value:'/services/art'}, {
            label:'Architecture', value:'/services/architecture',id:nanoid()},
            {
                label: 'Interiors', value:'/services/interiors',id:nanoid()
            },
            {
                label: 'Landscape', value:'/services/landscape',id:nanoid()
            },
            {
                label: 'Urbanscape', value:'/services/urbanscape',id:nanoid()
            },
            {
                label: 'Contracts', value:'/services/contracts',id:nanoid()
            },
            {
                label: 'Properties', value:'/services/properties',id:nanoid()
            },
            {
                label: 'Research', value:'/services/research',id:nanoid()
            }
        ],
        id:nanoid()
    },
    More:{
        list: [
            {
                label: 'Awards', value:'/more/awards',id:nanoid()
            },
            {
                label: 'News', value:'/more/news',id:nanoid()
            },
            {
                label: 'Blogs', value:'/more/blogs',id:nanoid()
            },
            {
                label: 'Events', value:'/more/events',id:nanoid()
            },
            {
                label: 'Downloads', value:'/more/downloads',id:nanoid()
            }
        ],
        id:nanoid()
    },
    'Connect us': {
        list: [
            {
                label:'Life @ inchtoinch',
                value:'/connect/life_at_inch', id:nanoid()
            },
            {
                label:'Have a question?',
                value:'/connect/askQ',id:nanoid()
            },
            {
                label:'Contacts',
                value:'/connect/contacts', id:nanoid()
            }
        ],
        id:nanoid()
    }
}