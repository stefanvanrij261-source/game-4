import os
import zlib

ROOT = os.path.dirname(os.path.abspath(__file__))
GIT = os.path.join(ROOT, ".git")


def read_obj(sha):
    path = os.path.join(GIT, "objects", sha[:2], sha[2:])
    with open(path, "rb") as handle:
        data = zlib.decompress(handle.read())
    header, body = data.split(b"\x00", 1)
    kind, _size = header.split(b" ", 1)
    return kind.decode("ascii"), body


def walk_tree(tree_sha, prefix=""):
    kind, body = read_obj(tree_sha)
    if kind != "tree":
        raise RuntimeError(f"Expected tree, got {kind}")

    index = 0
    while index < len(body):
        mode_end = body.index(b" ", index)
        mode = body[index:mode_end].decode("ascii")
        name_end = body.index(b"\x00", mode_end + 1)
        name = body[mode_end + 1:name_end].decode("utf-8", "replace")
        sha = body[name_end + 1:name_end + 21].hex()
        index = name_end + 21
        path = f"{prefix}{name}"

        if mode.startswith("04"):
            yield from walk_tree(sha, f"{path}/")
        else:
            yield path, sha


def main():
    with open(os.path.join(GIT, "refs", "heads", "main"), "r", encoding="ascii") as handle:
        commit_sha = handle.read().strip()

    kind, commit_body = read_obj(commit_sha)
    if kind != "commit":
        raise RuntimeError(f"Expected commit, got {kind}")

    tree_sha = commit_body.splitlines()[0].decode("ascii").split()[1]
    for path, sha in walk_tree(tree_sha):
        if path == "calender.js":
            kind, blob = read_obj(sha)
            if kind != "blob":
                raise RuntimeError(f"Expected blob, got {kind}")
            output = os.path.join(ROOT, "calender.js")
            with open(output, "wb") as handle:
                handle.write(blob)
            print(f"restored {path} from {sha}, {len(blob)} bytes")
            return

    raise RuntimeError("calender.js not found")


if __name__ == "__main__":
    main()
