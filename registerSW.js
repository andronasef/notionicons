if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/notionicons/sw.js', { scope: '/notionicons/' })})}