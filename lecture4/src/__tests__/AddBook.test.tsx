import {fireEvent, render, screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import AddBook from '../components/AddBook'
import { addBook } from '../helper/api';

jest.mock("../helper/api", () =>( {
  addBook: jest.fn().mockResolvedValue({status: 200})
}));

describe("Validate AddBook Component", () => {
  test("Button Save should be visible", () => {
    render(<AddBook/>);
    const button = screen.getByText("Add");
    expect(button).toBeVisible();
  });
  test("Validate adding data to server", () => {
    render(<AddBook/>);
    const button = screen.getByText("Add");
    //addBook.mockResolvedValue({status: 200, data: {}});
    fireEvent.click(button);
    expect(addBook).toBeCalled();
  })
})