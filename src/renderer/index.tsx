import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { brandStore } from './redux/Store';

render(
  <Provider store={brandStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.myPing();
