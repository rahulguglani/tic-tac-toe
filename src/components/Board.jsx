import Square from "./Square";

const Board = ({squares,setSquares,isXNext,setisXNext})=>{
    
    const handleSquareClick =(position)=>{
        if(squares[position]!=null)
            return ; 
        
        setSquares(squares.map((value,idx)=>{
            if(idx==position)
            {
                if(isXNext){
                    setisXNext(false);
                    return 'X';
                }
                else{
                    setisXNext(true);
                    return 'O';
                }
            }
            return value;
        }));
    };
    const renderSquare = (position)=>{
        // console.log(position);
        return (
            <Square value ={squares[position]} onClick={()=>{
                return handleSquareClick(position);
            }}/>
        )
    } 
    return(
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}
export default Board;