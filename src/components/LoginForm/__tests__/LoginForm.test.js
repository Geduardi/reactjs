import {fireEvent, render, screen} from "@testing-library/react";
import {LoginForm} from "../LoginForm";

describe('LoginForm', () => {
    it('should return correct data on submit', function () {
        const mockSubmit = jest.fn();
        render(<LoginForm onSubmit={mockSubmit} isSignUp={true}/>)
        fireEvent.click(screen.getByRole('button'))
        expect(mockSubmit).toHaveBeenCalledTimes(1)
        expect(mockSubmit).toHaveBeenCalledWith({
            login:"",
            name:"",
            pass:""
        })
    });
})