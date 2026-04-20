import os
import re
import glob

replacements = [
    (re.compile(r'QSD Residential Fire Sprinklers', re.IGNORECASE), 'Fire Stopping Birmingham'),
    (re.compile(r'Residential Fire Sprinklers', re.IGNORECASE), 'Fire Stopping Birmingham'),
    (re.compile(r'QSD Fire Systems', re.IGNORECASE), 'Fire Stopping Birmingham'),
    (re.compile(r'QSD', re.IGNORECASE), 'FSB'),
    (re.compile(r'Residential fire sprinkler systems', re.IGNORECASE), 'Fire stopping and passive fire protection systems'),
    (re.compile(r'residential fire sprinkler contractor', re.IGNORECASE), 'passive fire protection contractor'),
    (re.compile(r'residential fire sprinkler', re.IGNORECASE), 'fire stopping'),
    (re.compile(r'qsdfiresystems\.co\.uk', re.IGNORECASE), 'firestoppingbirmingham.co.uk'),
]

files = glob.glob('c:/Users/graha/QSD - Birmingham/qsd-residential-fire-sprinklers/*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for pattern, replacement in replacements:
        new_content = pattern.sub(replacement, new_content)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(filepath)}")

print("Done.")
