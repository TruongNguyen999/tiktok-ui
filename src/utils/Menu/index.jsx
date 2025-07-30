import {
  DiscoverIcon,
  FriendsIcon,
  FollowIcon,
  HomeIcon,
  UploadIcon,
} from "../../assets/index";

export const ListMenu = [
    {
        path: '/',
        name: 'Đề xuất',
        icon: HomeIcon,
    },
    {
        path: '/discover',
        name: 'Khám phá',
        icon: DiscoverIcon,
    },
    {
        path: '/follow',
        name: 'Đã follow',
        icon: FollowIcon,
    },
    {
        path: '/friends',
        name: 'Bạn bè',
        icon: FriendsIcon,
    },
    {
        path: 'upload',
        name: 'Tải lên',
        icon: UploadIcon,
    }
]