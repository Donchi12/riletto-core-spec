import type { WorkflowNode } from "./workflow-types";

interface WorkflowNodeViewProps {
  node: WorkflowNode;
  selected?: boolean;
}

export function WorkflowNodeView({ node, selected = false }: WorkflowNodeViewProps) {
  return (
    <div
      className={[
        "min-w-48 rounded-xl border bg-card p-4 shadow-sm",
        selected ? "ring-2" : "",
      ].join(" ")}
    >
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {node.kind}
      </p>
      <h3 className="mt-1 font-semibold">{node.label}</h3>
      <p className="mt-2 text-xs text-muted-foreground">
        {Object.keys(node.config).length} configured fields
      </p>
    </div>
  );
}
