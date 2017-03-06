import Fluxible from 'fluxible';
import App from 'components/enviroments/App.jsx';
import ApplicationStore from './store';

const app = new Fluxible({
    component: App,
});

app.registerStore(ApplicationStore);

export default app;