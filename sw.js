self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});

self.addEventListener('message', e => {
  const data = e.data;
  if(data && data.type === 'notify'){
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'icon-192.png'
    });
  }
});
