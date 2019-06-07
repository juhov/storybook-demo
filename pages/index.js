const fakeItems = new Array(10).fill();

export default () => (
  <div>
    <h1>Storybook Example</h1>
    <ul>
      {fakeItems.map((item, i) => (
        <li>Title {i}</li>
      ))}
    </ul>
  </div>
);
