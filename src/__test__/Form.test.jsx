import { cleanup, getByTestId, render, screen, fireEvent } from "@testing-library/react"
import Form from "../components/Form"

describe('Form', () => {
    afterEach(cleanup);
    afterEach(jest.clearAllMocks);

    beforeAll(()=> {
        render(<Form/>)
    })

    it('renderiza dos input, dos select y un boton de submit', () => {
        expect(screen.getByPlaceholderText(/Titulo/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Descripcion/i)).toBeInTheDocument()
        expect(screen.getByText(/Crear Tarea/i)).toBeInTheDocument()
        expect(screen.getByTestId('priority')).toBeInTheDocument()
        expect(screen.getByTestId('state')).toBeInTheDocument()
    })

    it('las etiquetas select deben tener las opciones correctas', () => {
        const { getByTestId } = render(<Form />);
        const prioritySelect = getByTestId('priority')
        const option = prioritySelect.querySelectorAll('option')
        expect(option.length).toBe(4)
        expect(option[0].textContent).toBe('Prioridad');
        expect(option[1].textContent).toBe('Baja');
        expect(option[2].textContent).toBe('Media');
        expect(option[3].textContent).toBe('Alta');

        
        const stateSelect = getByTestId('state')
        const options = stateSelect.querySelectorAll('option')
        expect(options.length).toBe(4)
        expect(options[0].textContent).toBe('Estado');
        expect(options[1].textContent).toBe('Nueva');
        expect(options[2].textContent).toBe('En Proceso');
        expect(options[3].textContent).toBe('Finalizada');
    })

    it('crea una tarea al hacer submit en el formulario', () => {
        const newTask = jest.fn();
        render(<Form newTask={newTask} />);
    
        const titleInput = screen.getByPlaceholderText(/Titulo/i);
        const descriptionInput = screen.getByPlaceholderText(/Descripcion/i);
        const prioritySelect = screen.getByTestId('priority');
        const stateSelect = screen.getByTestId('state');
        const submitButton = screen.getByText(/Crear Tarea/i);
    
        const task = {
          title: 'Nueva tarea',
          description: 'Descripción de la nueva tarea',
          priority: 'Alta',
          state: 'Nueva',
        };
    
        fireEvent.change(titleInput, { target: { value: task.title } });
        fireEvent.change(descriptionInput, { target: { value: task.description } });
        fireEvent.change(prioritySelect, { target: { value: task.priority } });
        fireEvent.change(stateSelect, { target: { value: task.state } });
        fireEvent.click(submitButton);
    
        expect(newTask).toHaveBeenCalledTimes(1);
        expect(newTask).toHaveBeenCalledWith(task);
      });
})