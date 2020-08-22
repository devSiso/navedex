<h3> Usage: </h3>
<p>
  To use this form component you have just to pass the "onSubmit" function, your inputs, and buttons as children.<br/>
  Every input must have the "name" property, the form uses this property to handle errors and data.
</p>
<p>Learn more on React hook form [API Documentation](https://react-hook-form.com/).</p>

<p> Example: <p>

```js
const onSubmit = (formData) => {
  console.log(formData);
};

<Form onSubmit={onSubmit}>
  <input type="text" name="firstName" style={{ marginBottom: '16px' }} />
  <button type="submit">Submit</button>
</Form>;
```
