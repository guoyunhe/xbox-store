import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Games = lazy(() => import('@/pages/games'));
const PlayStationGames = lazy(() => import('@/modules/playstation-store/src/pages/games'));
const NintendoGames = lazy(() => import('@/modules/nintendo-store/src/pages/games'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Games,
      },
      {
        path: '/playstation',
        exact: true,
        component: PlayStationGames,
      },
      {
        path: '/nintendo',
        exact: true,
        component: NintendoGames,
      },
    ],
  },
];
export default routerConfig;
