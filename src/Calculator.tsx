import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Calculator.module.css";
import useCalculator from "./useCalculator";
import { TokenType } from "./calculatorUtils";

//TODO: re-order the buttons
//TODO: make the sizes responsive
function Calculator(){
    const {addToken, handleClear, handleEquals, displayText} = useCalculator();
    return(
        <div className={`${styles.calculator} d-flex flex-column align-items-center mx-auto`}>
            <Form.Control className="w-100 my-2" readOnly value={displayText}></Form.Control>
            <div className={styles.buttonGrid}>
                {Array.from(Array(10).keys()).map(value => <Button onClick={() => addToken(value)}>{value}</Button>)}
                <Button onClick={handleEquals}>=</Button>
                <Button onClick={handleClear}>CE</Button>
                {Object.values(TokenType).map(value => <Button onClick={() => addToken(value)}>{value}</Button>)}
            </div>
        </div>
    );
}

export default Calculator;