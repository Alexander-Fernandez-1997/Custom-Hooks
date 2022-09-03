useRefresh()
Va a renderizar denuevo el componente

import { useRefresh } from 'react-admin';

const RefreshButton = () => {
const refresh = useRefresh();
const handleClick = () => {
refresh();
}
return <button onClick={handleClick}>Refresh</button>;
};
