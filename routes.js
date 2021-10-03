import HomePage from "./pages/HomePage";
import MissionsPage from "./pages/MissionsPage";
import DataPage from "./pages/DataPage";
import { 
    HOME_ROUTE, 
    MISSION_ROUTE, 
    DATA_ROUTE } from "./utils/consts";

export const routes = [
    {
        title: 'Home',
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        title: 'Missions',
        path: MISSION_ROUTE,
        Component: MissionsPage
    },
    {
        title: 'Data',
        path: DATA_ROUTE,
        Component: DataPage
    },
]