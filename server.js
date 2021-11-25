const Hapi = require("@hapi/hapi");
const Storage = require("./services/Web3Storage");

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 5000,
  });

  server.route({
    path: "/uploads",
    method: "POST",
    options: {
      payload: {
        allow: ["image/jpeg"],
        maxBytes: 1000000,
        parse: true,
        output: "file",
      },
    },
    handler: async (request, h) => {
      const path = request.payload.path;
      const filename = path.split("/")[2];
      const images = await Storage.uploadImage(path);

      const response = h.response({
        message: "success",
        data: {
          url: `https://${images}.ipfs.dweb.link/${filename}`,
          cid: images,
        },
      });
      return response;
    },
  });

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

init();
