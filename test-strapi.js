import fetch from 'node-fetch';
(async () => {
  const res = await fetch('http://localhost:1337/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ products: [{ id: 1 }] }),
  });
  console.log('status', res.status);
  console.log(await res.text());
})();