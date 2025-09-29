self.addEventListener('install', e=>self.skipWaiting());
self.addEventListener('activate', e=>self.clients.claim());
self.addEventListener('push', e=>{
  const data=e.data?.json()||{};
  e.waitUntil(
    self.registration.showNotification(data.title||'Medicine Reminder',{
      body:data.body||'Time to take your medicine',
      icon:'icon-192.png'
    })
  );
});
