self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => clients.claim());

self.addEventListener('push', e => {
  const data = e.data?.json() || {};
  e.waitUntil(
    self.registration.showNotification(data.title || 'Medicine Reminder', {
      body: data.body || 'Time to take your medicine',
      icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966484.png'
    })
  );
});
