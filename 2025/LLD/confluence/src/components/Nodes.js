import { FaAngleDown, FaAngleRight, FaCircle } from 'react-icons/fa';
import './Nodes.css'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const Icon = ({hasChildern, isOpen, onClick}) =>{
        if(hasChildern){
            return <span onClick={onClick}>
                {isOpen ? <FaAngleDown/>:<FaAngleRight/>}
            </span>
        } else {
            return <span>
                <FaCircle style={{width:"6px", alignItems: 'center', margin :"2px"}}/>
            </span>
        }
  
}

const Node = ({ link, label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildern = children && children.length > 0;
    return (
        <li >
                <div className='node'>
                    <div className='label'>
                        <Icon isOpen={isOpen} hasChildern={hasChildern} onClick={()=>setIsOpen(!isOpen)}/>
                        <a href={link}>{label}</a>
                    </div>
            </div>
            <AnimatePresence>
            {
                hasChildern && isOpen && (
                    <div className='children'>
                        <Nodes nodes={children} />
                    </div>
                )
            }
            </AnimatePresence>
        </li>
    );
};

const Nodes= ({ nodes }) => {
    return (
        <ul className="nodes">
           { nodes.map((node) => <Node key={node.id} {...node} />)}
        </ul>
    )

    }

export default Nodes;