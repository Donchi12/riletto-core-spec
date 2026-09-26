import type { WorkflowNode, WorkflowRunContext } from "./workflow-types";

export type NodeExecutor = (
  node: WorkflowNode,
  context: WorkflowRunContext
) => Promise<Record<string, unknown>>;

export async function executeNode(
  node: WorkflowNode,
  context: WorkflowRunContext,
  executors: Record<string, NodeExecutor>
) {
  const executor = executors[node.kind];

  if (!executor) {
    throw new Error(`Unsupported node kind: ${node.kind}`);
  }

  const output = await executor(node, context);

  return {
    nodeId: node.id,
    output,
    completedAt: new Date().toISOString(),
  };
}
