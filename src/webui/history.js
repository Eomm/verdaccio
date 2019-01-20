/**
 * @prettier
 */

import { createHashHistory } from 'history';

const history = createHashHistory();

// Listen for changes to the current location.
history.listen((location, action) => {
  // location is an object like window.location
  console.log('====>', action, location.pathname, location.state);
});

export default history;