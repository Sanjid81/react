import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
    <div style={{ padding: 20 }}>
      <h1>First react project</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>up</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>doun</button>
    </div>

    <h1 class="text-3xl font-bold underline text-red-700">
    Hello world!
  </h1>
</div>
  );
}
