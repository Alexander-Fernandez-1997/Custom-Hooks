const App = () => {
const { height, width } = useWindowSize();

return(
<div className="box">
<h1>useWindowSize Hook</h1>
<p>
height: {height}<br />
width: {width}
</p>
</div>
);
}
