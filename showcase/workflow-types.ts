export type NodeKind =
  | "source"
  | "transform"
  | "enrichment"
  | "filter"
  | "export";

export interface WorkflowNode {
  id: string;
  kind: NodeKind;
  label: string;
  config: Record<string, unknown>;
}

export interface WorkflowEdge {
  source: string;
  target: string;
}

export interface WorkflowDefinition {
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}
