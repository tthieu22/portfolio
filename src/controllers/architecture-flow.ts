import { getArchitectureSpecs } from '../config/profile-data';
import { getCurrentLanguage } from './i18n';

/**
 * =========================================================================
 * ARCHITECTURE FLOW CONTROLLER (architecture-flow.ts)
 * =========================================================================
 * TypeScript implementation của sơ đồ kiến trúc Saigon Newport (hỗ trợ EN/VI)
 * =========================================================================
 */

let activeNodeId = 'client-node';

export function initArchitectureFlow(): void {
  const nodes = document.querySelectorAll<HTMLElement>('.arch-node');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const nodeId = node.getAttribute('data-node');
      if (!nodeId) return;

      activeNodeId = nodeId;
      nodes.forEach(n => n.classList.remove('selected'));
      node.classList.add('selected');

      updateInspectorContent();
    });
  });

  updateInspectorContent();
}

export function updateInspectorContent(): void {
  const lang = getCurrentLanguage();
  const specs = getArchitectureSpecs(lang);
  const spec = specs[activeNodeId];
  if (!spec) return;

  const inspectorTitle = document.getElementById('inspector-title');
  const inspectorBadge = document.getElementById('inspector-badge');
  const inspectorProblem = document.getElementById('inspector-problem');
  const inspectorSolution = document.getElementById('inspector-solution');
  const inspectorImpact = document.getElementById('inspector-impact');
  const inspectorCode = document.getElementById('inspector-code');

  if (inspectorTitle) inspectorTitle.innerText = spec.title;
  if (inspectorBadge) inspectorBadge.innerText = spec.badge;
  if (inspectorProblem) inspectorProblem.innerText = spec.problem;
  if (inspectorSolution) inspectorSolution.innerText = spec.solution;
  if (inspectorImpact) inspectorImpact.innerText = spec.impact;
  if (inspectorCode) inspectorCode.innerText = spec.codeSnippet;
}
