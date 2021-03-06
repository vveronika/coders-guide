import { NodeDefinition } from "./NodeDefinition";

export interface Node<Data = {}> {
  id: string;
  name: string;
  description?: string;
  x: number;
  y: number;
  definition: NodeDefinition<Data>;
  options: string[];
  inputs?: Node<Data>[] | null;
  outputs?: Node<Data>[] | null;
  editsDefinitions?: NodeDefinition<Data>[];
  readonly?: boolean;
  notEditable?: boolean;
}
