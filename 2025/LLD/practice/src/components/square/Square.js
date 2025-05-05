import './Square.css';


const Square = ({value, onClick})=>{

      
    return <button className="square" key={value} onClick={onClick}>
          {value}

    </button>
}

export default Square;


