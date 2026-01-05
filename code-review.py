#!/usr/bin/env python3
"""
AI-Optimized Grouped File Converter & Project Tree Generator
Consolidates source code into type-specific .txt files and generates a visual project structure.
"""

import os
import sys
import shutil
import argparse
from datetime import datetime
from pathlib import Path

class AIOptimizedGroupedConverter:
    def __init__(self, source_folder, output_dir):
        self.source_folder = Path(source_folder)
        self.output_dir = Path(output_dir)
        self.extensions = ['.html', '.json', '.js', '.css', '.yml', '.yaml', '.ts', '.tsx', '.jsx', '.java', '.c', '.cpp', '.rb', '.go', '.rs', '.ts', '.env.local', '.env', '.css', '.scss', '.csv', '.xml']
        # Directories to exclude from both code consolidation and tree generation
        self.exclude_dirs = ['node_modules', '.git', 'dist', 'build', 'coverage', '.qodo', 'ai_logic_review', '__pycache__']
        self.stats = {"converted": 0, "groups": {}}

    def format_ai_separator(self, file_path):
        """
        Creates a high-contrast separator for AI processing.
        Includes full path and metadata for context grounding.
        """
        rel_path = file_path.relative_to(self.source_folder)
        return (
            f"\n{'=' * 80}\n"
            f"FILE_BEGIN: {rel_path}\n"
            f"METADATA: Size={file_path.stat().st_size} bytes | Last_Modified={datetime.fromtimestamp(file_path.stat().st_mtime)}\n"
            f"{'=' * 80}\n"
        )

    def format_eof_marker(self, file_path):
        """Adds a clear boundary marker for the end of the file content."""
        rel_path = file_path.relative_to(self.source_folder)
        return f"\n\n[FILE_END: {rel_path}]\n{'#' * 80}\n"

    def _tree_walk(self, path, prefix=""):
        """Recursive helper to build the visual tree structure."""
        lines = []
        try:
            # Get all entries in the directory
            entries = list(path.iterdir())
        except PermissionError:
            return []
            
        # Filter out excluded directories and files
        entries = [e for e in entries if e.name not in self.exclude_dirs]
        
        # Sort: directories first, then files, both alphabetically
        entries.sort(key=lambda x: (not x.is_dir(), x.name.lower()))
        
        # Prepare pointers for visual tree
        pointers = [ "├── " ] * (len(entries) - 1) + [ "└── " ]
        
        for pointer, entry in zip(pointers, entries):
            lines.append(f"{prefix}{pointer}{entry.name}")
            if entry.is_dir():
                # Determine extension string for child entries
                extension = "│   " if pointer == "├── " else "    "
                lines.extend(self._tree_walk(entry, prefix + extension))
                
        return lines

    def generate_project_tree(self):
        """Generates and saves the full project tree to a text file."""
        print(f"Generating project tree structure...")
        
        # Start tree with the root folder name
        try:
            tree_lines = [f"{self.source_folder.resolve().name}/"]
            tree_lines.extend(self._tree_walk(self.source_folder))
            
            output_file = self.output_dir / "project_structure.txt"
            
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write("\n".join(tree_lines))
            print(f"[OK] Project structure saved to {output_file.name}")
        except Exception as e:
            print(f"[ERR] Failed to save project tree: {e}")

    def process_files(self):
        all_files = []
        
        # Walk for file consolidation
        for root, dirs, files in os.walk(self.source_folder):
            dirs[:] = [d for d in dirs if d not in self.exclude_dirs]
            for f in files:
                all_files.append(Path(root) / f)
        
        all_files.sort()

        for f_path in all_files:
            if f_path.suffix.lower() not in self.extensions:
                continue

            # Group by extension: e.g., js_logic.txt, html_logic.txt
            ext_key = f_path.suffix.lower().replace('.', '')
            output_file = self.output_dir / f"{ext_key}_logic_group.txt"
            
            try:
                with open(f_path, 'r', encoding='utf-8', errors='ignore') as src:
                    content = src.read()
                
                if not content.strip():
                    continue

                with open(output_file, 'a', encoding='utf-8') as out:
                    # Write high-visibility BEGIN marker
                    out.write(self.format_ai_separator(f_path))
                    out.write(content)
                    # Write clear EOF marker
                    out.write(self.format_eof_marker(f_path))

                self.stats['converted'] += 1
                self.stats['groups'][ext_key] = self.stats['groups'].get(ext_key, 0) + 1
                print(f"[OK] {f_path.name} appended to {output_file.name}")
            except Exception as e:
                print(f"[ERR] {f_path.name}: {e}")

    def run(self):
        print(f"Exporting AI-ready groups from: {self.source_folder}")
        
        # CLEANUP: Remove existing output directory to prevent duplicates
        if self.output_dir.exists():
            # Safety check: ensure we aren't deleting the source folder by accident
            if self.output_dir.resolve() != self.source_folder.resolve():
                print(f"Cleaning existing directory: {self.output_dir}")
                shutil.rmtree(self.output_dir)

        # Create fresh directory
        self.output_dir.mkdir(parents=True, exist_ok=True)

        # 1. Generate the Project Tree
        self.generate_project_tree()
        
        # 2. Process File Content
        self.process_files()
        
        print("\n--- Summary ---")
        print(f"Tree Structure: {self.output_dir / 'project_structure.txt'}")
        for group, count in self.stats['groups'].items():
            print(f"Type {group.upper()}: {count} files -> {group}_logic_group.txt")

if __name__ == "__main__":
    # Scans current directory and outputs to 'ai_logic_review' folder
    converter = AIOptimizedGroupedConverter('.', 'ai_logic_review')
    converter.run()