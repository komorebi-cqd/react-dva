import dva from 'dva';
import count from './model/count';
import routerConfig from './routerConfig';
import {createBrowserHistory} from 'history';

const app = dva({
  history: createBrowserHistory(),
});
app.model(count);


app.router(routerConfig);
app.start('#root');



