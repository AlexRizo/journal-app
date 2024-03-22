import { AuthRoutes } from "./AuthRoutes";
import { JournalRoutes } from "./JournalRoutes";

export const AppRouter = (status) => {
    if (status === 'authenticated') {
        return JournalRoutes;
    } else {
        return AuthRoutes;
    }
};