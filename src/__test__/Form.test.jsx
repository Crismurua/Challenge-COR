import { render } from "@testing-library/react"
import Form from "../components/Form"

describe('Form', () => {
    it('se renderiza correctamente', () => {
        const container = render(<Form newTask={newTask}/>);
        expect(container).toBeTruthy()
    })
})