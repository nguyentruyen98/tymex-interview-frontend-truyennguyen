import { describe, expect, it } from "vitest";

import { cn } from "../utils";

describe("cn", () => {
  it("should merge class names correctly", () => {
    const result = cn("class1", "class2");
    expect(result).toBe("class1 class2");
  });

  it("should handle conditional class names", () => {
    const conditions = 1 === 1;
    const result = cn("class1", !conditions && "class2", "class3");
    expect(result).toBe("class1 class3");
  });

  it("should merge Tailwind classes correctly", () => {
    const result = cn("bg-red-500", "bg-blue-500");
    expect(result).toBe("bg-blue-500");
  });

  it("should handle empty inputs", () => {
    const result = cn();
    expect(result).toBe("");
  });

  it("should handle undefined and null inputs", () => {
    const result = cn("class1", undefined, null, "class2");
    expect(result).toBe("class1 class2");
  });
});
