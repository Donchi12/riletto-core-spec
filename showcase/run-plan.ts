export type PlanStep = {
  id: string;
  dependsOn: string[];
};

export function buildExecutionPlan(steps: PlanStep[]) {
  const pending = new Map(steps.map(step => [step.id, step]));
  const plan: string[] = [];

  while (pending.size) {
    const ready = [...pending.values()].filter(step =>
      step.dependsOn.every(dep => plan.includes(dep))
    );

    if (!ready.length) {
      throw new Error("Workflow contains a cycle or unresolved dependency");
    }

    for (const step of ready) {
      plan.push(step.id);
      pending.delete(step.id);
    }
  }

  return plan;
}
