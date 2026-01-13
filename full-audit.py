#!/usr/bin/env python3
"""
P4C INTELLIGENCE ENGINE
=======================
Consolidates Code Review, Context Analysis, and Content Aggregation into a single
AI-optimized artifact.

PURPOSE:
Generates a 'P4C_PROJECT_INTELLIGENCE.md' file that allows an AI to:
1. Understand the 'Dignity-First' mission.
2. See high-level architectural health and quality scores.
3. Access the full codebase with inline issue annotations.

USAGE:
python p4c_intelligence_engine.py [source_directory]
"""

import os
import sys
import re
import json
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Any, Optional, Tuple
from dataclasses import dataclass, field
from collections import defaultdict

# =============================================================================
# CONFIGURATION & STANDARDS
# =============================================================================

@dataclass
class Issue:
    severity: str  # CRITICAL, HIGH, MEDIUM, LOW, INFO
    category: str
    message: str
    line: Optional[int] = None
    suggestion: Optional[str] = None

@dataclass
class FileData:
    path: str
    extension: str
    content: str
    loc: int
    issues: List[Issue] = field(default_factory=list)

class P4CStandards:
    MISSION = "Housing veterans and families with dignity and technical excellence."
    
    BRAND_COLORS = {
        'navy': '#0B1120', 'gold': '#C5A059', 
        'beige': '#F5F5F0', 'slate': '#334155'
    }

    # Files that are critical to the user journey/security
    HIGH_STAKES_FILES = [
        'Application.tsx', 'AdminDashboard.tsx', 'TenantLogin.tsx', 
        'api.ts', 'geminiService.ts', 'AuthContext.tsx'
    ]

    # Regex Patterns for Static Analysis
    PATTERNS = [
        # -- SECURITY --
        (r'(?i)(password|secret|api_key|auth_token)\s*=\s*["\'][^"\']+["\']', 'CRITICAL', 'Security', 'Hardcoded secret detected'),
        (r'(?i)(eval|exec)\s*\(', 'HIGH', 'Security', 'Dangerous dynamic code execution'),
        
        # -- ARCHITECTURE --
        (r'import\s+.*\s+from\s+[\'"]\.{1,2}/data/', 'HIGH', 'Architecture', 'UI bypassing Service Layer (direct data import)'),
        (r'(?:\.generateContent)\s*\(', 'HIGH', 'AI-Service', 'Ensure Gemini calls are wrapped in error boundaries'),
        
        # -- ACCESSIBILITY (Veteran Focus) --
        (r'<button(?!.*aria-label)', 'HIGH', 'Accessibility', 'Button missing aria-label (Critical for disabled veterans)'),
        (r'<input(?!.*aria-label)(?!.*type="(hidden|submit)")', 'HIGH', 'Accessibility', 'Input missing aria-label'),
        (r'<img(?!.*alt)', 'MEDIUM', 'Accessibility', 'Image missing alt text'),
        
        # -- DIGNITY-FIRST UI --
        (r'rounded-(?!xl|2xl|3xl|full|none)', 'MEDIUM', 'Dignity-UI', 'Use rounded-xl+ for premium "Dignity" aesthetic'),
        (r'border-(?!gray-100|gray-200|transparent)', 'LOW', 'Dignity-UI', 'Ensure subtle borders for high-end feel'),
    ]

# =============================================================================
# ENGINE CORE
# =============================================================================

class P4CIntelligenceEngine:
    def __init__(self, source_dir: str = '.'):
        self.source_dir = Path(source_dir).resolve()
        self.output_file = self.source_dir / "P4C_PROJECT_INTELLIGENCE.md"
        
        self.ignored_dirs = {
            'node_modules', '.git', 'dist', 'build', 'coverage', 
            '__pycache__', '.qodo', 'ai_logic_review'
        }
        self.ignored_exts = {
            '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', 
            '.pdf', '.zip', '.tar', '.gz', '.pyc', '.log', '.py', '.txt',
            '.md', '.exe', '.dll', '.svg'
        }
        self.include_exts = {
            '.ts', '.tsx', '.js', '.jsx', '.css', '.html', 
            '.json', '.md', '.csv'
        }
        
        self.files_data: List[FileData] = []
        self.project_stats = {
            "score": 100,
            "total_files": 0,
            "total_loc": 0,
            "issues_breakdown": defaultdict(int)
        }

    def _should_process(self, file_path: Path) -> bool:
        """Determines if a file should be analyzed based on rules."""
        if any(part in self.ignored_dirs for part in file_path.parts):
            return False
        return file_path.suffix.lower() in self.include_exts

    def _analyze_content(self, content: str, file_name: str) -> List[Issue]:
        """Runs P4C regex heuristics against file content."""
        issues = []
        lines = content.split('\n')
        
        # 1. Regex Checks
        for pattern, severity, category, msg in P4CStandards.PATTERNS:
            for match in re.finditer(pattern, content):
                # Find line number
                line_idx = content[:match.start()].count('\n')
                issues.append(Issue(
                    severity=severity,
                    category=category,
                    message=msg,
                    line=line_idx + 1,
                    suggestion=f"Review line {line_idx + 1} matches pattern: {pattern}"
                ))

        # 2. Context-Specific Checks
        if "pages" in file_name or "components" in file_name:
            if "rounded-" in content and "shadow-" not in content:
                 issues.append(Issue("LOW", "Dignity-UI", "Flat design detected. Consider adding shadows for depth.", None))

        return issues

    def scan_project(self):
        """Walks the directory, reads files, and runs analysis."""
        print(f"🚀 Scanning P4C Project at: {self.source_dir}")
        
        for root, dirs, files in os.walk(self.source_dir):
            dirs[:] = [d for d in dirs if d not in self.ignored_dirs]
            
            for file in sorted(files):
                file_path = Path(root) / file
                if not self._should_process(file_path):
                    continue

                try:
                    # Attempt reading with fallback encodings
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                    except UnicodeDecodeError:
                        with open(file_path, 'r', encoding='latin-1') as f:
                            content = f.read()

                    # Calculate LOC
                    lines = content.split('\n')
                    loc = len([l for l in lines if l.strip() and not l.strip().startswith(('#', '//', '/*'))])

                    # Analyze
                    rel_path = str(file_path.relative_to(self.source_dir))
                    issues = self._analyze_content(content, rel_path)
                    
                    self.files_data.append(FileData(
                        path=rel_path,
                        extension=file_path.suffix,
                        content=content,
                        loc=loc,
                        issues=issues
                    ))
                    
                    print(f"  ✅ Analyzed: {rel_path}")

                except Exception as e:
                    print(f"  ❌ Failed to read {file}: {e}")

    def calculate_metrics(self):
        """Aggregates stats and calculates a 'Dignity Score'."""
        total_issues = 0
        score_penalty = 0
        
        for f in self.files_data:
            self.project_stats["total_files"] += 1
            self.project_stats["total_loc"] += f.loc
            
            for i in f.issues:
                total_issues += 1
                self.project_stats["issues_breakdown"][i.severity] += 1
                
                # Weighted Penalties
                if i.severity == "CRITICAL": score_penalty += 15
                elif i.severity == "HIGH": score_penalty += 10
                elif i.severity == "MEDIUM": score_penalty += 5
                elif i.severity == "LOW": score_penalty += 1
        
        self.project_stats["score"] = max(0, 100 - score_penalty)

    def generate_markdown_report(self):
        """Generates the massive, AI-optimized Markdown file."""
        print("📝 Generating Intelligence Report...")
        
        md = []
        
        # --- HEADER & MISSION ---
        md.append(f"# P4C PROJECT INTELLIGENCE REPORT")
        md.append(f"**Date:** {datetime.now().isoformat()}  ")
        md.append(f"**Mission:** {P4CStandards.MISSION}  ")
        md.append(f"**Dignity Quality Score:** {self.project_stats['score']}/100\n")
        
        # --- EXECUTIVE SUMMARY ---
        md.append("## 1. Executive Summary")
        md.append("| Metric | Value |")
        md.append("| :--- | :--- |")
        md.append(f"| Total Files | {self.project_stats['total_files']} |")
        md.append(f"| Lines of Code | {self.project_stats['total_loc']} |")
        md.append(f"| Critical Issues | {self.project_stats['issues_breakdown']['CRITICAL']} |")
        md.append(f"| High Priority | {self.project_stats['issues_breakdown']['HIGH']} |")
        md.append("\n> **AI INSTRUCTION:** Prioritize fixing CRITICAL and HIGH issues to ensure veteran trust and platform security.\n")

        # --- CRITICAL ACTION ITEMS ---
        md.append("## 2. Critical Action Items")
        has_critical = False
        for f in self.files_data:
            crit_issues = [i for i in f.issues if i.severity in ["CRITICAL", "HIGH"]]
            if crit_issues:
                has_critical = True
                md.append(f"### 🔴 {f.path}")
                for i in crit_issues:
                    md.append(f"- **[{i.severity}]** {i.message} (Line {i.line})")
        
        if not has_critical:
            md.append("✅ No Critical or High priority issues detected.")
        md.append("\n")

        # --- PROJECT STRUCTURE ---
        md.append("## 3. Project Structure")
        md.append("```text")
        # Simple tree generation
        structure = []
        for f in self.files_data:
            structure.append(f.path)
        
        # Sort and indent
        structure.sort()
        for path in structure:
            depth = path.count(os.sep)
            indent = "  " * depth
            name = os.path.basename(path)
            md.append(f"{indent}📄 {name}")
        md.append("```\n")

        # --- SOURCE CODE DATABASE ---
        md.append("## 4. Source Code & Analysis")
        md.append("The following sections contain the full source code annotated with analysis insights.\n")
        
        # Group by folder for logical reading
        self.files_data.sort(key=lambda x: x.path)
        
        for f in self.files_data:
            md.append(f"### 📄 File: `{f.path}`")
            md.append(f"**Metadata:** {f.loc} LOC | {f.extension.upper()}")
            
            # Inline Issues Header
            if f.issues:
                md.append("\n**⚠️ Analysis Findings:**")
                for i in f.issues:
                    icon = "🔴" if i.severity == "CRITICAL" else "🟠" if i.severity == "HIGH" else "🔵"
                    md.append(f"- {icon} **[{i.severity}]** {i.category}: {i.message} (Line {i.line})")
            
            # Code Block
            # Determine markdown lang
            lang = f.extension.replace('.', '')
            if lang in ['js', 'jsx']: lang = 'javascript'
            if lang in ['ts', 'tsx']: lang = 'typescript'
            if lang == 'py': lang = 'python'
            
            md.append(f"\n```{lang}")
            md.append(f.content)
            md.append("```\n")
            md.append("---")

        # --- WRITE OUTPUT ---
        try:
            with open(self.output_file, 'w', encoding='utf-8') as f:
                f.write("\n".join(md))
            print(f"\n✅ SUCCESS! Report saved to: {self.output_file}")
            print(f"   Size: {self.output_file.stat().st_size / 1024:.2f} KB")
        except Exception as e:
            print(f"\n❌ Error writing report: {e}")

# =============================================================================
# MAIN
# =============================================================================

if __name__ == "__main__":
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    
    engine = P4CIntelligenceEngine(target_dir)
    engine.scan_project()
    engine.calculate_metrics()
    engine.generate_markdown_report()