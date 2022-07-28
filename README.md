<div align="center">
   <img width="15%" src="https://hiddenfrombots.vercel.app/assets/images/bot.png" alt="#">
   <h1>Hidden From Bots</h1
      
**Say goodbye to bots looking for emails and phone numbers**
      
   <p>Normally on the internet there are bots, crawlers or spiders, they are all the same with a different name and are dedicated to searching the internet for data such as emails, phone numbers and other data, although not all of them are bad like of google that is in charge to analyze your site to be able to index it in their search engine, there are others that are, although you can create a robots.txt file and add a configuration to avoid bots, some people can create bots to ignore if there is a robots file .txt and they can scan still your site and collect your email or phone number to be able to send spam, make phone scams or sell that data to companies so they can send you unwanted advertising.</p>

   <p>Luckily with Hidden From Bots you can avoid most of these annoying bots by hiding these elements from the dom.</p>

   <a href="https://www.buymeacoffee.com/erikgiovani" target="_blank">
      <img width="20%" src="https://helloimjessa.files.wordpress.com/2021/06/bmc-button.png">
   </a>
</div>

<div align="center">
   <h2>Installation</h2>
   
   **NPM**
   
   ```console
   npm i hidden-from-bots-react
   ```
   **Yarn**
   
   ```console
   yarn add hidden-from-bots-react
   ```
</div>

<div align="center">
   <h2>Usage</h2>
   
Using **Hidden From Bots** with **React** is very easy, you can do it with **create-react-app** or with **Vite**, only need to install **hidden-from-bots-react** in your project with your favorite package manager and import it in your project.
</div>

```jsx
import "./App.css";
import { Email } from "hidden-from-bots-react";

function App() {
  return <div className="App">...</div>;
}

export default App;
```

<div align="center">
   
In this case, I import **Email** to hide an email.
</div>

```js
import { Email } from "hidden-from-bots-react";
```

<div align="center">
   
But you can also import **Phone** to hide a phone number.
</div>

```js
import { Phone } from "hidden-from-bots-react";
```

<div align="center">
   
To hide an email you need to pass the email prop to the **Email** component and to hide a phone number you have to pass the phone prop to the **Phone** component.
</div>

```jsx
import "./App.css";
import { Email, Phone } from "hidden-from-bots-react";

function App() {
  return (
    <div className="App">
      <Email email="hello@world.com">Email</Email>
      <Phone phone="57123456789">Phone Number</Phone>
    </div>
  );
}

export default App;
```

<div align="center">
   
You can also use css , css modules, sass, sass modules or style to style them to your liking, and you can switch the content between the **Phone** or **Email** tags to add custom text or an icon.
</div>

```jsx
import "./App.css";
import styles from "./App.module.css";
import { Email, Phone } from "hidden-from-bots-react";

function App() {
  return (
    <div className="App">
      <Email className={styles.email} email="hello@world.com">
        Email
      </Email>
      <Phone style={{ color: "red" }} phone="57123456789">
        Phone Number
      </Phone>
    </div>
  );
}

export default App;
```

<div align="center">
   <h2>Base64</h2>
   
To hide an email or phone number from more advanced bots you can import **EmailBase64** for an email or **PhoneBase64** for a phone number, the steps to use them are the same as the previous examples with just one extra step, in the email and phone prop we have to pass the email or the phone number in Base64, you can use the following link [https://hiddenfrombots.js.org/encoder](https://hiddenfrombots.js.org/encoder) so you can transform them to Base64 or you can use the page you like to transform them to Base64.
</div>

```jsx
import "./App.css";
import styles from "./App.module.css";
import { EmailBase64, PhoneBase64 } from "hidden-from-bots-react";

function App() {
  return (
    <div className="App">
      <EmailBase64 className={styles.email} email="aGVsbG9Ad29ybGQuY29t">
        Email
      </EmailBase64>
      <PhoneBase64 style={{ color: "red" }} phone="NTcxMjM0NTY3ODk=">
        Phone Number
      </PhoneBase64>
    </div>
  );
}

export default App;
```
