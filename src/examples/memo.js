import React, { useState, useEffect, useMemo } from 'react';

function complexCompute(num) {
    console.log('complexCompute')
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

function App() {

    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    //Чтобы не вызывать лишний раз ТЯЖЕЛУЮ функцию после повторного рендера
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('styles chenge')
    }, [styles])


    return (
        <div style={styles}>
            <h1>Вычисляемое свойство: {computed}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>

        </div>
    );
}

export default App;
