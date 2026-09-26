import { describe, expect, it } from "vitest";
import { executeNode } from "./node-executor";

describe("executeNode", () => {
  it("dispatches by node kind", async () => {
    const result = await executeNode(
      { id: "n1", kind: "transform" } as never,
      {},
      { transform: async () => ({ normalized: true }) }
    );

    expect(result.output).toEqual({ normalized: true });
    expect(result.nodeId).toBe("n1");
  });
});
