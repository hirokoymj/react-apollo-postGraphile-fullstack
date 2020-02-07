# React Basic

## Default export component vs named export one

**PageTitle.js**

```js
export default ({ title }) => {
  return <h2>{title}</h2>;
};

export const PageTitle = ({ title }) => {
  return (
    <>
      <h1>
        {title}
        <small>This is H1 title</small>
      </h1>
    </>
  );
};
```
**Homepage.js**

```js
import DefaultPageTitle from "./PageTitle";
import { PageTitle } from "./PageTitle";

export const Test = () => {

  return (
    <>
      <PageTitle title="User Details" />
      <DefaultPageTitle title="User Details" />
    </>
  );
};
```