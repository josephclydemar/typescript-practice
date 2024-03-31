import { ReactNode, useState, useReducer, useRef, useEffect, useCallback, useMemo } from 'react';

import List from './List';

import './css/HooksTest.css';

interface Geo {
  lat: string;
  lng: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


interface PowerType {
  base: number;
  exponent: number;
  result: number;
  error: string | null;
}

interface PowerAction {
  actionType: 'increment-exponent' | 'decrement-exponent' | 'increment-base' | 'decrement-base';
}


function powerReducerFunc(state: PowerType, action: PowerAction): PowerType {
  const { actionType } = action;
  let newExponent: number;
  let newBase: number;
  let hasError: boolean;
  switch(actionType) {
    case 'increment-exponent':
      newExponent = state.exponent + 1;
      hasError = newExponent > 5;
      if(hasError) {
        return {
          ...state,
          exponent: state.exponent,
          result: Math.pow(state.base, state.exponent),
          error: 'Exponent upper bound reached'
        };
      } else {
        return {
          ...state,
          exponent: newExponent,
          result: Math.pow(state.base, newExponent),
          error: null
        };
      }
    case 'decrement-exponent':
      newExponent = state.exponent - 1;
      hasError = newExponent < -5;
      if(hasError) {
        return {
          ...state,
          exponent: state.exponent,
          result: Math.pow(state.base, state.exponent),
          error: 'Exponent lower bound reached'
        };
      } else {
        return {
          ...state,
          exponent: newExponent,
          result: Math.pow(state.base, newExponent),
          error: null
        };
      }
      case 'increment-base':
        newBase = state.base + 1;
        hasError = newBase > 5;
        if(hasError) {
          return {
            ...state,
            base: state.base,
            result: Math.pow(state.base, state.exponent),
            error: 'Base upper bound reached'
          };
        } else {
          return {
            ...state,
            base: newBase,
            result: Math.pow(newBase, state.exponent),
            error: null
          };
        }
      case 'decrement-base':
        newBase = state.base - 1;
        hasError = newBase < -5;
        if(hasError) {
          return {
            ...state,
            base: state.base,
            result: Math.pow(state.base, state.exponent),
            error: 'Base lower bound reached'
          };
        } else {
          return {
            ...state,
            base: newBase,
            result: Math.pow(newBase, state.exponent),
            error: null
          };
        }
    default:
      return state;
  }
}





function fibFunc(n: number): number {
  if(n < 2) {
    return n;
  }
  return fibFunc(n - 1) + fibFunc(n - 2);
}



export default function HooksTest() {
  // Changes in States triggers a Component rerender
  const [num, setNum] = useState<number>(0);
  const [product, setProduct] = useState<number>(1);
  const [users, setUsers] = useState<User[] | null>(null);
  const [countState, setCountState] = useState<number>(0);


  const [powerState, powerDispatch] = useReducer<(state: PowerType, action: PowerAction) => PowerType>(powerReducerFunc, { base: 0, exponent: 0, result: 0, error: null });


  const countRef = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);


  useEffect(function (): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (result: Response): Promise<User[]> {
      return result.json();
    })
    .then(function (value: User[]): void {
      console.log(value);
      setUsers(() => value.slice(Math.floor(Math.random() * (value.length / 2)), Math.floor(Math.random() * (value.length / 2)) + 5));
    });
  }, [product]);

  useEffect(function (): void {
    if(num > 30) {
      setNum(() => 0);
      setProduct(() => 1);
    }
  }, [num]);

  useEffect(function (): void {
    inputRef.current?.focus();
  }, []);


  function submitInput(): void {
    console.log(inputRef.current?.value);
  }

  // Memoization of a Function
  const timesTwo: () => void = useCallback(function (): void {
    setNum(prev => prev + 1);
    setProduct(prev => prev * 2);
  }, []);


  // Memoization of a Value
  const result = useMemo(function (): number {
    return fibFunc(num);
  }, [num]);

  return (
    <div>
      <div>
        <h4>Times Two Value: { product } | Num Value: { num } | Fib Result: { result }</h4>
        <button onClick={timesTwo}>Multiply By 2</button>
        <div>
          <input className='textInput' ref={inputRef} type='text' placeholder='Type something...' />
          <button onClick={submitInput}>Submit</button>
        </div>
        <div>
          <h4>Base: { powerState.base } | Exponent: { powerState.exponent } | Result: { powerState.result }</h4>
          <p><b>{ powerState.error === null ? 'No Error' : powerState.error }</b></p>
          <div>
            <button onClick={function (): void {
              powerDispatch({ actionType: 'decrement-exponent' });
            }}>Decrement Exponent</button>
            <button onClick={function (): void {
              powerDispatch({ actionType: 'increment-exponent' });
            }}>Increment Exponent</button>
          </div>
          <div>
          <button onClick={function (): void {
              powerDispatch({ actionType: 'decrement-base' });
            }}>Decrement Base</button>
            <button onClick={function (): void {
              powerDispatch({ actionType: 'increment-base' });
            }}>Increment Base</button>
          </div>
        </div>
        <div>
          <button onClick={function (): void {
            countRef.current += 1;
            console.log(countRef);
          }}>Count Ref {countRef.current}</button>
          <button onClick={function (): void {
            setCountState(prev => prev + 1);
          }}>Count State {countState}</button>
        </div>
      </div>
      <div className='usersList'>
        <h3>Users Count: { users !== null ? users.length : 0 }</h3>
        <List verticalPaddingPerItem='3vh' items={ users !== null ? users : []} render={function (item: User): ReactNode {
          return (
            <div>
              <p><span><b>Name: </b></span>{item.name}</p>
              <p><span><b>ID: </b></span>{item.id}</p>
              <p><span><b>Email: </b></span>{item.email}</p>
              <p><span><b>Phone: </b></span>{item.phone}</p>
              <p><span><b>City: </b></span>{item.address.city}</p>
            </div>
          );
        }} />
      </div>
    </div>
  );
}
