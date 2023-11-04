export interface GraphNode {
  id: string;
  label: string;
  color: string;
  data: TaskData;
  shape: string;
}

export interface Ground {
  answer: string;
  should_contain: string[];
  should_not_contain: string[];
  files: string[];
  eval: { type: string };
}

export interface Info {
  description: string;
  side_effects: any[];
  pre_read: object;
}

export interface Whitelist {
  read_whitelist: string[];
  websites_whitelist: string[];
  import_whitelist: string[];
  folder_whitelist: string[];
}

export interface TaskData {
  name: string;
  category: string[];
  task: string;
  dependencies: string[];
  cutoff: number;
  ground: Ground;
  info: Info;
  whitelist: Whitelist;
}
