import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo1 from './Todo1';

describe('Todo1',()=>{
    it('should true',()=>{
        const test= true; //
expect(test).toBe(true);
})

})
test("input todo", () => {
    const todo1 = [{ id: 1, done:true, text: "BuyBread " }];
   
  
    expect(todo1).toEqual([{ id: 1, done: true, text: "Buy Milk" }]);
  });

  test("delete todo", () => {
    const todo1 = [{ id: 1, done:true, text: "Buy Milk" }];
   
  
    expect(todo1).toEqual([{ id: 1, done: true, text: "Buy Milk" }]);
  });
  test("Update todo", () => {
    const todo1 = [{ id: 1, done:true, text: " Milk" }];
   
  
    expect(todo1).toEqual([{ id: 1, done: true, text: "Buy Milk" }]);
  });