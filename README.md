# Assignment -2 (Level-2)

## Instructions to run the project:
It's a basic api for ecommerce site.
* To run this in your locally first run `npm i` to install all the dependencies,
* Then if you check the `packages.json` file there you will find some scripts for different purpose.
* To run the project run this command `npm run start:dev` or `npm run start:prod`.
* But before start the project make sure to convert the ts file to js file, run `npm run build`.
* There are other scripts like: to check errors by using eslint run `npm run lint` or fix error using eslint run `npm run lint:fix`.
* Also can beautify the code using prettier run `npm run prettier`.

### Features of the project
* There is two main end points for this project: `'/api/products'` and `'/api/orders'`
* User can add product to db and also can update product and delete product from db.
* User can get all the products data from db and also can search product by Query params.
* Customer can create order using user email and product info, but before create a order there will be multiple check, if the product is in the db, check the quantity and also check the order quantity and inventory quantity.
* If everything goes well then the order will be created and the amount of order quantity will be deduct from the inventory quantity. If the quantity become 0 the inStack status will be false.
* Validation has been implemented using zod for both product and order model.
* Also error handling implemented for different purpose and also for the route as well.


***
### Used packages/ technology:
* Typescript
* Node JS, Express JS
* Zod, eslint, prettier
* Mongoose , CORS, Dotenv,  
### Here is the live link of the project:
Click here: [Assignment-2](https://assignment-2-phi-one.vercel.app/)
