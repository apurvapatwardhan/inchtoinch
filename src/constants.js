import { nanoid } from 'nanoid'
export const navLinks = {
    home:{
        list:[{
            label:'home', value:"/",id:nanoid()
        }],
        id:nanoid()
    },
    'about us': {
        list:[{label:'inch to inch', value:'#inch_to_inch',id:nanoid()}, {
            label:'workmanship', value:'#workmanship',id:nanoid()
        }],
        id:nanoid()
    },
    services: {
        list:[{label:'art', value:'/services/art'}, {
            label:'architecture', value:'/services/architecture',id:nanoid()},
            {
                label: 'interiors', value:'/services/interiors',id:nanoid()
            },
            {
                label: 'landscape', value:'/services/landscape',id:nanoid()
            },
            {
                label: 'Urbanscape', value:'/services/urbanscape',id:nanoid()
            },
            {
                label: 'Contracts', value:'/services/contracts',id:nanoid()
            },
            {
                label: 'properties', value:'/services/properties',id:nanoid()
            },
            {
                label: 'research', value:'/services/research',id:nanoid()
            }
        ],
        id:nanoid()
    },
    more:{
        list: [
            {
                label: 'awards', value:'/more/awards',id:nanoid()
            },
            {
                label: 'news', value:'/more/news',id:nanoid()
            },
            {
                label: 'blogs', value:'/more/blogs',id:nanoid()
            },
            {
                label: 'events', value:'/more/events',id:nanoid()
            },
            {
                label: 'downloads', value:'/more/downloads',id:nanoid()
            }
        ],
        id:nanoid()
    },
    'connect us': {
        list: [
            {
                label:'life @ inchtoinch',
                value:'/connect/life_at_inch', id:nanoid()
            },
            {
                label:'have a question?',
                value:'/connect/askQ',id:nanoid()
            },
            {
                label:'contacts',
                value:'/connect/contacts', id:nanoid()
            }
        ],
        id:nanoid()
    }
}