import { describe, it, expect } from "vitest";
import { DATA } from "@/data/portfolio";

describe("portfolio data", () => {
  it("has required fields", () => {
    expect(DATA.name).toBeTruthy();
    expect(DATA.title).toBeTruthy();
    expect(DATA.socials.email).toContain("@");
    expect(DATA.projects.length).toBeGreaterThan(0);
    expect(DATA.experience.length).toBeGreaterThan(0);
    expect(DATA.education.length).toBeGreaterThan(0);
  });

  it("has no placeholder phone number", () => {
    expect(DATA.socials.tel).not.toContain("00 00 00 00");
  });

  it("all projects have required fields", () => {
    DATA.projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.desc).toBeTruthy();
      expect(project.tech.length).toBeGreaterThan(0);
    });
  });
});
