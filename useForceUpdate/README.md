export default function App() {
const update = useForceUpdate();
return (

<div className="App">
<button onClick={() => update()}>update</button>
<p>{count}</p>
</div>
);
}
