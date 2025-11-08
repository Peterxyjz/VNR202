'use client';

import { useState } from 'react';
import { DaiHoiData } from '@/lib/data-loaders';

interface SummaryNotesProps {
  daiHoiData: { [key: string]: DaiHoiData };
}

export default function SummaryNotes({ daiHoiData }: SummaryNotesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const copyToClipboard = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const generateSummaryText = (id: string, data: DaiHoiData): string => {
    let summary = `=== ${data.title} ===\n\n`;
    summary += `Thời gian: ${data.time}\n`;
    summary += `Địa điểm: ${data.location}\n\n`;

    summary += `BỐI CẢNH:\n`;
    data.context.forEach((ctx, i) => {
      summary += `${i + 1}. ${ctx}\n`;
    });

    summary += `\nNỘI DUNG CHÍNH:\n`;
    data.contentHighlights.forEach((highlight, i) => {
      summary += `\n${i + 1}. ${highlight.title}\n`;
      summary += `   ${highlight.description}\n`;
    });

    summary += `\nÝ NGHĨA:\n`;
    data.significance.forEach((sig, i) => {
      summary += `${i + 1}. ${sig}\n`;
    });

    return summary;
  };

  return (
    <div className="space-y-3">
      {Object.entries(daiHoiData).map(([id, data]) => {
        const isExpanded = expandedId === id;
        const isCopied = copiedId === id;
        const summaryText = generateSummaryText(id, data);

        return (
          <div
            key={id}
            className="bg-white rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-t-lg"
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Đại hội {id}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Copy Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(id, summaryText);
                  }}
                  className={`p-2 rounded-lg transition-all ${
                    isCopied
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                  title="Copy to clipboard"
                >
                  {isCopied ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>

                {/* Expand Icon */}
                <svg
                  className={`w-6 h-6 text-gray-600 transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Accordion Content */}
            {isExpanded && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                {/* Context */}
                <div className="mb-4">
                  <h4 className="font-bold text-red-700 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Bối cảnh
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {data.context.map((ctx, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span>{ctx}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Content Highlights */}
                <div className="mb-4">
                  <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Nội dung chính
                  </h4>
                  <div className="space-y-3">
                    {data.contentHighlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-lg border border-blue-200"
                      >
                        <h5 className="font-semibold text-gray-800 mb-1">
                          {i + 1}. {highlight.title}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Significance */}
                <div>
                  <h4 className="font-bold text-green-700 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    Ý nghĩa
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {data.significance.map((sig, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span>{sig}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
