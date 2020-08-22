<p>The Input component was developed to be used as children of our Form component</p>
<p>There are two types of components: **Controlled and Uncontrolled**</p>
<p>
  We use controlled components to handle with 3rd party libraries, like we did in this project for "react-input-mask" (2nd example).
  In this case we have to pass the prop "controlled" for the Form component render it correctly.
</p>
<p>Therefore for uncontrolled component you don't need inform it</p>
<p>**Both must to have the prop "name"! The form component use it as base to handle with errors and data.**</p>
<p>Learn more on React hook form [API Documentation](https://react-hook-form.com/).</p>

<h3>Example: </h3>

- Simple input

```js
<Input name="test" type="text" placeholder="Input type text" />
```

- Input with mask (Controlled)

```js
<Input
  label="Data de admissão"
  name="admission_date"
  type="text"
  controlled={1}
  mask="99/99/9999"
  placeholder="01/09/2020"
  title="Data de admissão"
/>
```
