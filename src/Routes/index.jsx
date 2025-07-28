import Home from '../pages/Home';
import Discover from '../pages/Discover';
import Follow from '../pages/Follow';
import Friends from '../pages/Friends';
import Info from '../pages/Info';
import Live from '../pages/Live';
import Message from '../pages/Message';
import Upload from '../pages/Upload';
import DefaultLayout from '../component/Layouts/DefaultLayout';

//public layout
const publicLayout = [
    {route: '/', component: Home, layout: DefaultLayout},
    {route: '/discover', component: Discover, layout: null},
    {route: '/follow', component: Follow, layout: DefaultLayout},
    {route: '/friends', component: Friends, layout: DefaultLayout},
    {route: '/info', component: Info, layout: DefaultLayout},
    {route: '/live', component: Live, layout: DefaultLayout},
    {route: '/message', component: Message, layout: DefaultLayout},
    {route: '/upload', component: Upload, layout: null},
]


// private layout
const privatePlayout = {

}

export { publicLayout, privatePlayout }