self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

// This fires when you send a real web-push from a server
self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  const title = data.title || 'Medicine Reminder';
  const body  = data.body  || 'Time to take your medicine';
  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: 'icon-192.png'
    })
  );
});
