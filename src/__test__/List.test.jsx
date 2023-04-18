import { getByTestId, render, fireEvent } from '@testing-library/react';
import List from '../components/List';

describe('List', () => {
    
    const tasks = [
      { id: 1, title:'Ejemplo 1', description: 'Descripcion 1', state: 'Nueva', priority: 'Baja' },
      { id: 2, title:'Ejemplo 2', description: 'Descripcion 2', state: 'En Proceso', priority: 'Media' },
      { id: 3, title:'Ejemplo 3', description: 'Descripcion 3', state: 'Finalizada', priority: 'Alta' },
      { id: 4, title:'Ejemplo 4', description: 'Descripcion 4', state: 'Nueva', priority: 'Media' },
    ];
  
    it('se deberian renderizar los filtros junto con todas las tareas creadas', () => {
      
      const { getByTestId, getAllByTestId } = render(<List tasks={tasks}/>);
      
      expect(getByTestId('state')).toBeInTheDocument();
      expect(getByTestId('priority')).toBeInTheDocument();
      expect(getAllByTestId('card').length).toBe(4);
    });

    it('deberia filtrar correctamente por prioridad', () => {
        const { getByTestId, getAllByTestId } = render(<List tasks={tasks} />);
        const select = getByTestId('priority');
        fireEvent.change(select, { target: { value: 'Alta' } });
        expect(select.value).toBe('Alta');
        expect(getAllByTestId('card').length).toBe(1);
    })

    it('deberia filtrar correctamente por estado', () => {
        const { getAllByTestId, getByTestId } = render(<List tasks={tasks} />);
        const select = getByTestId('state');
        fireEvent.change(select, { target: { value: 'En Proceso' } });
        expect(select.value).toBe('En Proceso');
        expect(getAllByTestId('card').length).toBe(1);
    })
  });