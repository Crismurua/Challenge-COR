import "core-js/stable";
import React from "react";
import { render } from '@testing-library/react';
import App from '../App';

describe('componente App', () => {
    it('Debe agregar una nueva tarea al estado al llamar a newTask', () => {
        const { getByTestId } = render(<App />);
        const formInput = getByTestId('form-input');
        const formButton = getByTestId('form-button');
        const initialTasksLength = getByTestId('task-list').children.length;
    
        fireEvent.change(formInput, { target: { value: 'Nueva tarea' } });
        fireEvent.click(formButton);
    
        const finalTasksLength = getByTestId('task-list').children.length;
        expect(finalTasksLength).toBe(initialTasksLength + 1);
    });
    
    it('Debe eliminar una tarea del estado al llamar a deleteTask', () => {
        const { getByTestId } = render(<App />);
        const formInput = getByTestId('form-input');
        const formButton = getByTestId('form-button');
        const deleteButton = getByTestId('task-delete-button');
        const initialTasksLength = getByTestId('task-list').children.length;
    
        fireEvent.change(formInput, { target: { value: 'Tarea a eliminar' } });
        fireEvent.click(formButton);
        fireEvent.click(deleteButton);
    
        const finalTasksLength = getByTestId('task-list').children.length;
        expect(finalTasksLength).toBe(initialTasksLength);
    });
    
    it('Debe actualizar una tarea en el estado al llamar a updateTask', () => {
        const { getByTestId } = render(<App />);
        const formInput = getByTestId('form-input');
        const formButton = getByTestId('form-button');
        const updateButton = getByTestId('task-update-button');
        const initialTaskStatus = getByTestId('task-status').textContent;
    
        fireEvent.change(formInput, { target: { value: 'Tarea a actualizar' } });
        fireEvent.click(formButton);
        fireEvent.change(updateButton, { target: { value: 'En progreso' } });
    
        const finalTaskStatus = getByTestId('task-status').textContent;
        expect(finalTaskStatus).not.toBe(initialTaskStatus);
    });
  });

