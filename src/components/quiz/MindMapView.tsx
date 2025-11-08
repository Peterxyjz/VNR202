'use client';

import { useCallback, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
  NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { DaiHoiData } from '@/lib/data-loaders';

interface CustomNodeData {
  label: string;
  description?: string;
  expanded: boolean;
  daiHoiId: string;
  type: 'root' | 'daihoi' | 'highlight' | 'detail';
}

// Custom Node Component
function CustomNode({ data }: { data: CustomNodeData }) {
  const bgColors = {
    root: 'bg-gradient-to-r from-red-600 to-red-700',
    daihoi: 'bg-gradient-to-r from-blue-600 to-blue-700',
    highlight: 'bg-gradient-to-r from-green-600 to-green-700',
    detail: 'bg-white border-2 border-gray-300',
  };

  const textColors = {
    root: 'text-white',
    daihoi: 'text-white',
    highlight: 'text-white',
    detail: 'text-gray-800',
  };

  return (
    <div
      className={`px-4 py-3 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all ${
        bgColors[data.type]
      } ${textColors[data.type]} min-w-[150px] max-w-[250px]`}
    >
      <div className="font-bold text-sm mb-1">{data.label}</div>
      {data.description && (
        <div className="text-xs opacity-90 line-clamp-2">{data.description}</div>
      )}
    </div>
  );
}

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

interface MindMapViewProps {
  daiHoiData: { [key: string]: DaiHoiData };
}

export default function MindMapView({ daiHoiData }: MindMapViewProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  // Generate initial nodes and edges
  const generateNodesAndEdges = useCallback(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    // Root node
    nodes.push({
      id: 'root',
      type: 'custom',
      data: {
        label: 'Đại hội Đảng',
        description: 'Hành trình Đổi Mới',
        expanded: true,
        daiHoiId: 'root',
        type: 'root',
      },
      position: { x: 400, y: 50 },
    });

    // Đại hội nodes
    const daiHoiIds = Object.keys(daiHoiData);
    const angleStep = (2 * Math.PI) / daiHoiIds.length;
    const radius = 300;

    daiHoiIds.forEach((id, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const x = 400 + radius * Math.cos(angle);
      const y = 250 + radius * Math.sin(angle);

      const daiHoi = daiHoiData[id];
      nodes.push({
        id: `daihoi-${id}`,
        type: 'custom',
        data: {
          label: `Đại hội ${id}`,
          description: daiHoi.time,
          expanded: expandedNodes.has(id),
          daiHoiId: id,
          type: 'daihoi',
        },
        position: { x, y },
      });

      edges.push({
        id: `edge-root-${id}`,
        source: 'root',
        target: `daihoi-${id}`,
        animated: true,
        style: { stroke: '#ef4444', strokeWidth: 2 },
      });

      // If expanded, add highlight nodes
      if (expandedNodes.has(id)) {
        daiHoi.contentHighlights.slice(0, 3).forEach((highlight, hIndex) => {
          const highlightAngle = angle + (hIndex - 1) * 0.3;
          const highlightRadius = 180;
          const hx = x + highlightRadius * Math.cos(highlightAngle);
          const hy = y + highlightRadius * Math.sin(highlightAngle);

          nodes.push({
            id: `highlight-${id}-${hIndex}`,
            type: 'custom',
            data: {
              label: highlight.title,
              description: highlight.description.substring(0, 50) + '...',
              expanded: false,
              daiHoiId: id,
              type: 'highlight',
            },
            position: { x: hx, y: hy },
          });

          edges.push({
            id: `edge-${id}-h${hIndex}`,
            source: `daihoi-${id}`,
            target: `highlight-${id}-${hIndex}`,
            animated: false,
            style: { stroke: '#10b981', strokeWidth: 1.5 },
          });
        });
      }
    });

    return { nodes, edges };
  }, [daiHoiData, expandedNodes]);

  const { nodes: initialNodes, edges: initialEdges } = generateNodesAndEdges();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      const nodeData = node.data as CustomNodeData;
      if (nodeData.type === 'daihoi') {
        setExpandedNodes((prev) => {
          const newSet = new Set(prev);
          if (newSet.has(nodeData.daiHoiId)) {
            newSet.delete(nodeData.daiHoiId);
          } else {
            newSet.add(nodeData.daiHoiId);
          }
          return newSet;
        });

        // Regenerate nodes and edges
        setTimeout(() => {
          const { nodes: newNodes, edges: newEdges } = generateNodesAndEdges();
          setNodes(newNodes);
          setEdges(newEdges);
        }, 0);
      }
    },
    [generateNodesAndEdges, setNodes, setEdges]
  );

  return (
    <div className="w-full h-[600px] bg-gray-50 rounded-lg border-2 border-gray-200">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        className="rounded-lg"
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
        <Controls className="bg-white border border-gray-300 rounded-lg shadow-lg" />
        <MiniMap
          className="bg-white border border-gray-300 rounded-lg shadow-lg"
          nodeColor={(node) => {
            const data = node.data as CustomNodeData;
            switch (data.type) {
              case 'root':
                return '#dc2626';
              case 'daihoi':
                return '#2563eb';
              case 'highlight':
                return '#10b981';
              default:
                return '#9ca3af';
            }
          }}
        />
      </ReactFlow>
      <div className="p-4 bg-blue-50 rounded-b-lg border-t border-gray-200">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">💡 Hướng dẫn:</span> Click vào node Đại hội để mở rộng/thu gọn các nội dung chính. Sử dụng chuột để kéo thả và zoom in/out.
        </p>
      </div>
    </div>
  );
}
