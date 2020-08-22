<h3>Usage: </h3>

<ul>
  <li>You must set up a main context for your app using the "useContext" hook.</li>
  <li>You must have a reducer on this context to handle the modal's events and toggle its state</li>
  <li>You must call this context dispatch event passing as arguments: The component which the modal must render, its payload and its options.</li>
</ul>

<p> Dispatch example: <p>

```js
const dispatch = () => {
  // FAKE DISPATCH FUNCTION
  return `dispatch({ type: 'SET_MODAL_OPENED', component: 'NaverDetailsModal', props: {id: '1'}})`;
};
// Your dispatch event invoke should seem like that
dispatch({ type: 'SET_MODAL_OPENED', component: 'Your Component here', props: { id: '1' } });
```
