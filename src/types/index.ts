export interface Agent {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  category: string;
  description: string;
  capabilities: string[];
  inputSchema: Record<string, any>;
  outputSchema: Record<string, any>;
  modelId: string;
  temperature: number;
  maxTokens: number;
  systemPrompt: string;
  averageCost: number;
  averageTime: number;
  rating: number;
  usageCount: number;
  isVerified: boolean;
  useCases: string[];
}

export interface WorkflowNode {
  id: string;
  type: 'agent' | 'trigger' | 'output';
  agentId?: string;
  position: { x: number; y: number };
  config?: Record<string, any>;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  createdAt: string;
  updatedAt: string;
}

export interface Execution {
  id: string;
  workflowId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  startedAt: string;
  completedAt?: string;
  output?: any;
  error?: string;
  tokensUsed: number;
  cost: number;
}
