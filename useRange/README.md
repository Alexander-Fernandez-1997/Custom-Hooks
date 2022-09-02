const numberPages = 12

{range(numberPages).map((i) => (
<button
key={i + 1}
className={pagination === (i + 1) ? "btn btn-sm btn-outline-success active" : "btn btn-sm btn-outline-success"}
onClick={() => customPag(i + 1)} >
{i + 1}
</button>
))}

Crea un array de 12 lugares
