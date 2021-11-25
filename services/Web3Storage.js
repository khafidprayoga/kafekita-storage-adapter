require("dotenv").config();
const { Web3Storage, getFilesFromPath } = require("web3.storage");

const Storage = {
  uploadImage: async (image) => {
    const storageClient = new Web3Storage({
      token: process.env.WEB3_STORAGE_TOKEN,
    });

    const files = await getFilesFromPath(image);
    const cid = await storageClient.put(files);

    return cid;
  },
};

module.exports = Storage;
