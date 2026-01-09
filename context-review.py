#!/usr/bin/env python3
"""
P4C Context-Aware Code Review Tool
Generates a 'Full Picture' analysis for AI processing.
"""

import os
import sys
import json
import re
from datetime import datetime
from pathlib import Path
from dataclasses import dataclass, field, asdict
from typing import Dict, List, Optional, Any

@dataclass
class ProjectContext:
    """Aggregates project-wide metadata for AI context."""
    mission: str = "Housing veterans and families with dignity and technical excellence."
    brand_palette: List[str] = field(default_factory=lambda: ["#0B1120", "#C5A059", "#F5F5F0", "#334155"])
    architecture_layers: Dict[str, str] = field(default_factory=lambda: {
        "data_access": "services/api.ts",
        "ai_logic": "services/geminiService.ts",
        "feedback": "context/ToastContext.tsx"
    })
    dependency_map: Dict[str, List[str]] = field(default_factory=dict)

class P4CFullPictureAnalyzer:
    def __init__(self, source_folder: str):
        self.source_folder = Path(source_folder)
        self.context = ProjectContext()
        self.report_data = {
            "timestamp": datetime.now().isoformat(),
            "project_root": str(self.source_folder.absolute()),
            "files": []
        }

    def scan_project_structure(self):
        """Builds a map of how files relate to each other."""
        for root, _, files in os.walk(self.source_folder):
            if any(x in root for x in ['node_modules', '.git', 'dist']): continue
            for f in files:
                if f.endswith(('.tsx', '.ts')):
                    rel_path = Path(root).relative_to(self.source_folder) / f
                    self.context.dependency_map[str(rel_path)] = []

    def analyze_p4c_standards(self, content: str, file_path: str) -> List[Dict]:
        """Specific checks for the P4C 'Dignity-First' UI and Architecture."""
        violations = []
        
        # 1. Slumlord Pattern Check (Cheap UI)
        if 'rounded-' in content and not re.search(r'rounded-(xl|2xl|3xl|full)', content):
            violations.append({
                "severity": "MEDIUM",
                "type": "UI_STANDARD",
                "message": "Non-standard border radius: P4C requires rounded-xl for 'Dignity-First' UI."
            })

        # 2. Architectural Integrity (Data Bypassing)
        is_ui = any(x in file_path for x in ['pages', 'components'])
        if is_ui and 'from \'../data/' in content:
            violations.append({
                "severity": "CRITICAL",
                "type": "ARCH_BYPASS",
                "message": "UI component bypassing Data Access Layer. Use services/api.ts instead."
            })

        # 3. Veteran Accessibility
        if re.search(r'<(button|a|input)(?!.*aria-label)', content):
            violations.append({
                "severity": "HIGH",
                "type": "ACCESSIBILITY",
                "message": "Missing ARIA label: Veterans with disabilities require screen-reader support."
            })

        return violations

    def generate_report(self, output_file: str = "p4c_full_picture_review.json"):
        """Compiles the full picture into a single AI-digestible file."""
        self.scan_project_structure()
        
        for file_path in self.context.dependency_map.keys():
            abs_path = self.source_folder / file_path
            try:
                with open(abs_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                self.report_data["files"].append({
                    "path": file_path,
                    "mission_violations": self.analyze_p4c_standards(content, file_path),
                    "summary": content[:1000] # Provide actual code context to AI
                })
            except Exception as e:
                continue

        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump({
                "context": asdict(self.context),
                "analysis": self.report_data
            }, f, indent=2)
        
        print(f"✅ Full Picture Report generated: {output_file}")

if __name__ == "__main__":
    analyzer = P4CFullPictureAnalyzer(".")
    analyzer.generate_report()