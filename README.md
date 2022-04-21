# Storefront VHS - Next.js
Sample storefront website for selling VHS tapes. Created using Next.js, Firebase, and Stripe for payments. No actual products are sold on this website. Deployed using Vercel.

## [Link to live website](https://vhs-storefront.vercel.app/)  
<br />

![Screenshot of featured products](/static/images/featured.png)

![Screenshot of payment](/static/images/payment.png)

## Running the app
If you want to run this on your local machine, you will need your own Firebase Realtime Database, which you can set up for free [here](https://firebase.google.com/). Substitute the fetch url in [index.js](/pages/index.js) with your own realtime database url.

I added products to firebase using my [React VHS Storefront](https://github.com/AshforthM/storefront-react) project.

You will also require a Stripe account and API keys, which you can get [here](https://stripe.com/). Create a .env file at the root of the project with your API keys (env variable names in [index.js](/pages/index.js) and [checkout.js](/pages/api/checkout.js)), and it should run locally with your own firebase data and Stripe account.

## Additional Resources
* [Next.js](https://nextjs.org/)
* [Stripe](https://stripe.com/)
* [Firebase Get Started](https://cloud.google.com/firestore/docs/client/get-firebase)
* [Vercel](https://vercel.com/)
