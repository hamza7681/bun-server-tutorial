const server = Bun.serve({
  port: 5000,
  fetch(req) {
    return new Response("Bun!");
  },
}); 


console.log("Server is running on", server.port);
