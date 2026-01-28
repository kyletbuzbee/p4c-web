#!/usr/bin/env python3
"""
Properties 4 Creation INTELLIGENCE ENGINE (UPDATED)
=================================
Consolidates Code Review, Context Analysis, and Content Aggregation.
Tailored for the "Properties 4 Creation" Community Developer Pivot (40/30/20/10 Split).
"""

import os
import sys
import re
from datetime import datetime
from pathlib import Path
from typing import List, Optional
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

@dataclass
class FileData:
    path: str
    extension: str
    content: str
    loc: int
    issues: List[Issue] = field(default_factory=list)

class P4CStandards:
    # UPDATED MISSION: The 40/30/20/10 Community Developer Split
    MISSION = "Revitalizing East Texas by providing quality affordable housing for families and the community, while offering sustainable solutions for property owners and investors."
    
    # Files that are critical to the user journey/security
    HIGH_STAKES_FILES = [
        'Application.tsx', 'AdminDashboard.tsx', 'TenantLogin.tsx', 
        'api.ts', 'AuthContext.tsx', 'Home.tsx'
    ]

    # Regex Patterns for Static Analysis
    PATTERNS = [
        # -- SECURITY --
        (r'(?i)(password|secret|api_key|auth_token)\s*=\s*["\'][^"\']+["\']', 'CRITICAL', 'Security', 'Hardcoded secret detected'),
        
        # -- ARCHITECTURE --
        (r'import\s+.*\s+from\s+[\'"]\.{1,2}/data/', 'HIGH', 'Architecture', 'UI bypassing Service Layer (direct data import)'),
        
        # -- ACCESSIBILITY (Crucial for General Public/Seniors) --
        (r'<button(?!.*aria-label)', 'HIGH', 'Accessibility', 'Button missing aria-label'),
        (r'<img(?!.*alt)', 'MEDIUM', 'Accessibility', 'Image missing alt text'),
        
        # -- BRAND ALIGNMENT (Enforcing the 40/30/20/10 Split) --
        (r'(?i)gold standard', 'MEDIUM', 'Brand-Misalignment', 'Replace "Gold Standard" with "Reliability Pledge"')
    ]

# =============================================================================
# ENGINE CORE
# =============================================================================

class P4CIntelligenceEngine:
    def __init__(self, source_dir: str = '.'):
        self.source_dir = Path(source_dir).resolve()
        self.output_file = self.source_dir / "P4C_PROJECT_INTELLIGENCE.md"
        
        # 1. EXCLUDED DIRECTORIES
        self.ignored_dirs = {
            'node_modules', '.git', 'dist', 'build', 'coverage', 
            '__pycache__', '.qodo', 'ai_logic_review', '.vscode', '.idea',
            'server' # Ignoring server/backend code to focus on Frontend/Content
        }
        
        # 2. EXCLUDED EXTENSIONS (Explicitly banning non-code assets)
        self.ignored_exts = {
            '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', 
            '.pdf', '.zip', '.tar', '.gz', '.pyc', '.log', 
            '.py', '.txt', '.md', '.exe', '.dll', '.lock',
            '.mp4', '.png', '.webp', '.avif', '.md', '.txt'
            '.bpz', '.json', '.sh' 
        }
        
        # 3. INCLUDED EXTENSIONS (Strictly Code)
        self.include_exts = {
            '.ts', '.tsx', '.js', '.jsx', '.css', '.html' 
        }
        
        # 4. SPECIFIC FILE IGNORES (Noise reduction)
        self.ignored_filenames = {
            'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 
            'full-audit.py', 'analyze.py', 'code-review.py',
            'tailwind.config.js', 'postcss.config.js'
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
        # Check Directory
        if any(part in self.ignored_dirs for part in file_path.parts):
            return False
            
        # Check Specific Filename
        if file_path.name in self.ignored_filenames:
            return False
            
        # Check Extension (Allowlist)
        return file_path.suffix.lower() in self.include_exts

    def _analyze_content(self, content: str, file_name: str) -> List[Issue]:
        issues = []
        
        # Regex Checks
        for pattern, severity, category, msg in P4CStandards.PATTERNS:
            for match in re.finditer(pattern, content):
                line_idx = content[:match.start()].count('\n')
                issues.append(Issue(
                    severity=severity,
                    category=category,
                    message=msg,
                    line=line_idx + 1
                ))
        return issues

    def _generate_tree(self, dir_path: Path, prefix: str = "") -> str:
        """Generates a visual directory tree structure."""
        output = ""
        
        try:
            # Get all items in directory
            items = list(dir_path.iterdir())
            
            # Filter ignored items
            filtered_items = []
            for item in items:
                # Skip if in ignored dirs
                if item.is_dir() and item.name in self.ignored_dirs:
                    continue
                # Skip if in ignored filenames
                if item.name in self.ignored_filenames:
                    continue
                # Skip hidden files
                if item.name.startswith('.'):
                    continue
                filtered_items.append(item)
            
            # Sort: Directories first, then alphabetical
            filtered_items.sort(key=lambda x: (not x.is_dir(), x.name.lower()))
            
            # Build tree string
            for i, item in enumerate(filtered_items):
                is_last = (i == len(filtered_items) - 1)
                connector = "└── " if is_last else "├── "
                
                output += f"{prefix}{connector}{item.name}\n"
                
                if item.is_dir():
                    extension = "    " if is_last else "│   "
                    output += self._generate_tree(item, prefix + extension)
                    
        except PermissionError:
            output += f"{prefix}└── [Access Denied]\n"
            
        return output

    def scan_project(self):
        print(f"🚀 Scanning Properties 4 Creation Project at: {self.source_dir}")
        print(f"ℹ️  Mission: {P4CStandards.MISSION}")
        
        for root, dirs, files in os.walk(self.source_dir):
            # Filter directories in-place
            dirs[:] = [d for d in dirs if d not in self.ignored_dirs]
            
            for file in sorted(files):
                file_path = Path(root) / file
                if not self._should_process(file_path):
                    continue

                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()

                    # Calculate LOC
                    lines = content.split('\n')
                    loc = len([l for l in lines if l.strip() and not l.strip().startswith(('#', '//', '/*'))])

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
        for f in self.files_data:
            self.project_stats["total_files"] += 1
            self.project_stats["total_loc"] += f.loc
            
            for i in f.issues:
                self.project_stats["issues_breakdown"][i.severity] += 1
                if i.severity == "CRITICAL": self.project_stats["score"] -= 15
                elif i.severity == "HIGH": self.project_stats["score"] -= 10
                elif i.severity == "MEDIUM": self.project_stats["score"] -= 5
        
        self.project_stats["score"] = max(0, self.project_stats["score"])

    def generate_markdown_report(self):
        print("📝 Generating Intelligence Report...")
        
        md = []
        md.append(f"# Properties 4 Creation PROJECT INTELLIGENCE REPORT")
        md.append(f"**Date:** {datetime.now().isoformat()}  ")
        md.append(f"**Mission:** {P4CStandards.MISSION}  ")
        md.append(f"**Community Alignment Score:** {self.project_stats['score']}/100\n")
        
        # Executive Summary
        md.append("## 1. Executive Summary")
        md.append(f"- **Total Files:** {self.project_stats['total_files']}")
        md.append(f"- **Lines of Code:** {self.project_stats['total_loc']}")
        md.append(f"- **High/Critical Issues:** {self.project_stats['issues_breakdown']['CRITICAL'] + self.project_stats['issues_breakdown']['HIGH']}")
        md.append("\n")

        # Project Structure (NEW SECTION)
        md.append("## 2. Project Structure")
        md.append("```text")
        md.append(self._generate_tree(self.source_dir))
        md.append("```")
        md.append("\n")

        # Codebase Dump
        md.append("## 3. Source Code & Analysis")
        self.files_data.sort(key=lambda x: x.path)
        
        for f in self.files_data:
            md.append(f"### 📄 `{f.path}`")
            
            if f.issues:
                md.append("\n**⚠️ Analysis Findings:**")
                for i in f.issues:
                    icon = "🔴" if i.severity in ["CRITICAL", "HIGH"] else "🔵"
                    md.append(f"- {icon} **[{i.severity}]** {i.message} (Line {i.line})")
            
            lang = f.extension.replace('.', '')
            if lang in ['js', 'jsx']: lang = 'javascript'
            if lang in ['ts', 'tsx']: lang = 'typescript'
            
            md.append(f"\n```{lang}")
            md.append(f.content)
            md.append("```\n")
            md.append("---")

        try:
            with open(self.output_file, 'w', encoding='utf-8') as f:
                f.write("\n".join(md))
            print(f"\n✅ SUCCESS! Report saved to: {self.output_file}")
        except Exception as e:
            print(f"\n❌ Error writing report: {e}")

if __name__ == "__main__":
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    engine = P4CIntelligenceEngine(target_dir)
    engine.scan_project()
    engine.calculate_metrics()
    engine.generate_markdown_report()