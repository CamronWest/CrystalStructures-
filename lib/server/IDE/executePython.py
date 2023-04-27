import os
import subprocess

output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "outputs")

if not os.path.exists(output_path):
    os.makedirs(output_path)

def execute_cpp(filepath):
    job_id = os.path.splitext(os.path.basename(filepath))[0]
    out_path = os.path.join(output_path, f"{job_id}.out")

    try:
        subprocess.check_output(f"g++ {filepath} -o {out_path} && cd {output_path} && ./{job_id}.out", stderr=subprocess.STDOUT, shell=True)
    except subprocess.CalledProcessError as e:
        return e.output.decode("utf-8")

    try:
        output = subprocess.check_output(f"./{job_id}.out", stderr=subprocess.STDOUT, cwd=output_path, shell=True)
    except subprocess.CalledProcessError as e:
        return e.output.decode("utf-8")

    return output.decode("utf-8")

def execute_py(filepath):
    try:
        output = subprocess.check_output(f"python {filepath}", stderr=subprocess.STDOUT, shell=True)
    except subprocess.CalledProcessError as e:
        return e.output.decode("utf-8")

    return output.decode("utf-8")