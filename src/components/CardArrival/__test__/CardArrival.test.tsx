import { render } from "@testing-library/react";

import defaultCardArrivalAvatar from "@/assets/images/image1.webp";

import CardArrival from "../CardArrival";

describe("CardArrival Component", () => {
  it("should render with default avatar", () => {
    const { getByAltText } = render(<CardArrival name="John Doe" />);
    const avatar = getByAltText("Avatar");
    expect(avatar).toHaveAttribute("src", defaultCardArrivalAvatar);
  });

  it("should render with provided avatar", () => {
    const customAvatar = "custom_avatar.webp";
    const { getByAltText } = render(<CardArrival name="John Doe" avatar={customAvatar} />);
    const avatar = getByAltText("Avatar");
    expect(avatar).toHaveAttribute("src", customAvatar);
  });

  it("should render the name correctly", () => {
    const { getByText } = render(<CardArrival name="John Doe" />);
    const nameElement = getByText("John Doe");
    expect(nameElement).toBeInTheDocument();
  });
});