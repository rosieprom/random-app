import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from "./Accordion";

describe(("<Accordion >"), () => {
    it("should change expose something after button click", () => {
        const { getByText } = render (
            <Accordion />
        );

        const contentText = screen.getAllByRole(/button/i);
        expect(contentText).toBeTruthy();

        expect(getByText(/Toggle Me/i).textContent).toBe("Toggle Me")
        fireEvent.click(getByText("Toggle Me"));

        const exposedContent = screen.getAllByText(/Content/i)
        expect(exposedContent).toBeTruthy();
    })
})