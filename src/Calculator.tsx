import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useCalculator from "./useCalculator";
import { TokenType } from "./calculatorUtils";

function Calculator(){
    const {addToken, handleClear, handleEquals, displayText} = useCalculator();
    return(
        <div>
            <Form.Control readOnly value={displayText}></Form.Control>
            <div>
                {/* {Array.from(Array(9).keys()).map(value => <Button onClick={() => addToken(value)}>{value}</Button>)} */}
                <Button onClick={() => addToken(1)}>1</Button>
                {Object.values(TokenType).map(value => <Button onClick={() => addToken(value)}>{value}</Button>)}
                {/* <Button onClick={() => addToken(TokenType.Add)}>+</Button>
                <Button onClick={() => addToken(TokenType.Subtract)}>-</Button>
                <Button onClick={() => addToken(TokenType.Multiply)}>*</Button>
                <Button onClick={() => addToken(TokenType.Divide)}>/</Button> */}
                <Button onClick={handleEquals}>=</Button>
                <Button onClick={handleClear}>CE</Button>
            </div>
        </div>
    );
}

export default Calculator;