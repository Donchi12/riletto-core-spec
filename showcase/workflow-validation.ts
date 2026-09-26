import type { WorkflowDefinition } from "./workflow-types";

export interface ValidationIssue {
  code: "missing-node" | "duplicate-node" | "invalid-edge" | "cycle";
  message: string;
}

export function validateWorkflow(workflow: WorkflowDefinition): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const ids = new Set<string>();

  for (const node of workflow.nodes) {
    if (ids.has(node.id)) {
      issues.push({
        code: "duplicate-node",
        message: `Node "${node.id}" is defined more than once.`,
      });
    }
    ids.add(node.id);
  }

  for (const edge of workflow.edges) {
    if (!ids.has(edge.source) || !ids.has(edge.target)) {
      issues.push({
        code: "invalid-edge",
        message: `Edge "${edge.source}" → "${edge.target}" references a missing node.`,
      });
    }
  }

  return issues;
}
