import os
import uuid

CODES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'codes')

if not os.path.exists(CODES_DIR):
    os.makedirs(CODES_DIR)

def generate_file(format, content):
    job_id = uuid.uuid4()
    filename = f"{job_id}.{format}"
    filepath = os.path.join(CODES_DIR, filename)
    with open(filepath, 'w') as f:
        f.write(content)
    return filepath