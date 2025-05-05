import Data from './Data';
import Nodes from './Nodes';

const Directory = () => {
    return (
        <div className="directory">
    <Nodes nodes={Data}/>
        </div>
    );
}

export default Directory;