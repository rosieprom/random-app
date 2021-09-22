import Tabs from "./Tabs";
import { render, screen, fireEvent } from '@testing-library/react';

describe("<Tabs />", () => {
    it("should render all buttons of the tab", () => {
        const tabs = render(<Tabs content={
            [
                {
                    title: "Foo"
                },
                {
                    title: "Bar"
                },
                {
                    title: "Baz"
                }
            ]
        }/>);

        const contentText = screen.getAllByRole((/button/i));
        expect(contentText).toBeTruthy();
    });

    it("should render a new text when a button is clicked", () => {
        const { getByText } = render(
            <Tabs content={
                [
                    {
                        title: "Foo"
                    },
                    {
                        title: "Bar"
                    },
                    {
                        title: "Baz"
                    }
                ]
            }/>
        )
        expect(getByText(/Bar/i).textContent).toBe("Bar")
        fireEvent.click(getByText("Bar"))
        expect(getByText(/Baz/i).textContent).toBe("Baz")
        fireEvent.click(getByText("Baz"))
    });

    it("should change the heading after a button click", () => {
        const { getByText } = render(
            <Tabs content={
                [
                    {
                        title: "Foo"
                    },
                    {
                        title: "Bar"
                    },
                    {
                        title: "Baz"
                    }
                ]
            }/>
        )
        expect(getByText(/Bar/i).textContent).toBe("Bar")
        fireEvent.click(getByText("Bar"));

        expect(getByText(/Baz/i).textContent).toBe("Baz")
        fireEvent.click(getByText("Baz"));

        expect(getByText(/Foo/i).textContent).toBe("Foo")
        fireEvent.click(getByText("Foo"));
    })
})