## About

This adapter is used to connect front-end dApps on the IPFS cluster (Web3.Storage),
to upload product images and return static file urls.  
You can run this API using EC2, but it is better to use AWS Lambda + API Gateway (experimental)

## How to Use

1. Clone repository
2. Install all the dependency `npm install`
3. Create `.env` file
4. Write .env variable `WEB3_STORAGE_TOKEN=<API-TOKEN>` and paste your token
5. `npm run dev` to run development mode

## Testing

1. Install `HTTPie`
2. Change your directory to `images` from root project
3. Run `http POST localhost:5000/uploads @360px-Es_Kelapa_Muda.JPG`

Make sure you know about IPFS and Web3.Storage
