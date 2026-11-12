export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/myapp/peerjs/id') {
      return new Response(String(Math.random() * 100000000000000000));
    }
    // Остальную логику WebSocket будет обрабатывать Durable Object
    return new Response('PeerJS Server is running', { status: 200 });
  }
}