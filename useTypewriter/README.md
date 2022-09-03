function App() {
const languages = [
'HTML.',
'CSS.',
'JavaScript.',
'Arroz',
'Pollo'
]

const message = useTypewriter({
text: languages,
direction: 'both',
repeat: -1,
speed: 50
})

return <h1>Hi! I like to code in {message}</h1>
}

message te hace el texto animado , puede ser forward , backward o both
