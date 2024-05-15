function addNumbers() {
    const num1: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    const result: number = num1 + num2;
    document.getElementById('result').innerHTML = `Result: ${result}`;
}