import os
import subprocess

output_path = os.path.join(os.path.dirname(__file__), "outputs")

if not os.path.exists(output_path):
    os.makedirs(output_path)

def execute_cpp(filepath):
    job_id = os.path.splitext(os.path.basename(filepath))[0]
    out_path = os.path.join(output_path, f"{job_id}.out")

    try:
        subprocess.run(
            f"g++ {filepath} -o {out_path} && cd {output_path} && ./{job_id}.out",
            check=True,
            shell=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
    except subprocess.CalledProcessError as e:
        error = e.stderr.decode("utf-8").strip() if e.stderr else str(e)
        raise RuntimeError(f"Failed to execute C++ code: {error}") from None

    with open(os.path.join(output_path, f"{job_id}.txt"), "r") as f:
        return f.read().strip()