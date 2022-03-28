import { render, screen, fireEvent, within } from "@testing-library/react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ProfilePage from ".";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";
import userEvent from "@testing-library/user-event";
import Input from "components/Input";
import { shallow } from "enzyme";

describe("Main Image", () => {
  test("one image in profile section", () => {
    render(wrappedWithRouterAndReduxComponent(<ProfilePage />));
    const profile = screen.getByTestId("profile");
    const image = within(profile).getAllByRole("img");
    expect(image).toHaveLength(1);
  });
});

describe("Save button", () => {
  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(
      <AddCircleOutlineIcon
        className="profile__tools_save"
        data-testid="save-profile"
        onClick={handleClick}
      />
    );
    fireEvent.click(screen.getByTestId("save-profile"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("input disappears after clicking 'Save'", async () => {
    render(wrappedWithRouterAndReduxComponent(<ProfilePage />));

    const editButton = screen.getByTestId("edit-profile");
    fireEvent.click(editButton);

    const saveButton = screen.getByTestId("save-profile");
    fireEvent.click(saveButton);

    const input = screen.queryByPlaceholderText("type your name...");
    expect(input).not.toBeInTheDocument();
  });

  test("fn on clicking 'Enter'", async () => {
    const handleKeyPress = jest.fn();
    const handleChange = jest.fn();
    render(
      wrappedWithRouterAndReduxComponent(
        <Input
          name=""
          handleKeyDown={handleKeyPress}
          onInputChange={handleChange}
        />
      )
    );

    const input = screen.getByTestId("test-input");
    input.focus();
    userEvent.keyboard("123{enter}");

    expect(handleKeyPress.mock.calls.length).toEqual(4);
  });
});

describe("Edit section", () => {
  test("runs progressbar after clicking", () => {
    render(wrappedWithRouterAndReduxComponent(<ProfilePage />));

    const button = screen.getByTestId("edit-profile");
    fireEvent.click(button);
    const progress = screen.queryAllByRole("progressbar");
    expect(progress).toHaveLength(1);
  });

  test("opens input to edit", async () => {
    render(wrappedWithRouterAndReduxComponent(<ProfilePage />));

    const button = screen.getByTestId("edit-profile");
    fireEvent.click(button);

    await screen.findByPlaceholderText("type your name...");

    const input = screen.getByPlaceholderText("type your name...");
    expect(input).toBeInTheDocument();
  });
});

describe("Functions", () => {
  test("handleRemoveImage", () => {
    const wrapper = shallow(
      wrappedWithRouterAndReduxComponent(<ProfilePage />)
    );
    wrapper.find("remove-image").simulate("click");

    const image = screen.getByRole("image");
    expect(image).toHaveAttribute("src", "/");
  });
});
