# Git Ignore Hands-on

This repository contains the solution for the **Git Ignore Hands-on** completed as part of the **Cognizant Digital Nurture Program**.

---

## Objectives

- Understand the purpose of `.gitignore`.
- Ignore unwanted files and folders.
- Verify ignored files using Git.
- Commit only the required files to the repository.

---

## Environment

| Tool | Version |
|------|---------|
| Git | 2.47.1 |
| Git Bash | MINGW64 |
| OS | Windows 11 |
| Remote Repository | GitHub |

---

## Project Structure

```text
GitIgnoreDemo/
│
├── README.md
├── .gitignore
├── welcome.txt
└── screenshots/
```

---

# Step 1 - Check Repository Status

```bash
git status
```

<p align="center">
<img src="screenshots/01-git-status-before-ignore.png" width="900">
</p>

---

# Step 2 - Create Log File and Log Folder

Create a `.log` file and a `log` directory.

Example:

```bash
echo "Sample log" > sample.log

mkdir log
```

<p align="center">
<img src="screenshots/02-create-log-files.png" width="900">
</p>

---

# Step 3 - Create .gitignore

Create the `.gitignore` file.

```bash
touch .gitignore
```

<p align="center">
<img src="screenshots/03-create-gitignore.png" width="900">
</p>

---

# Step 4 - Add Ignore Rules

Update `.gitignore` with the following rules:

```text
*.log
log/
```

<p align="center">
<img src="screenshots/04-gitignore-content.png" width="900">
</p>

---

# Step 5 - Verify Ignored Files

```bash
git status
```

The `.log` files and the `log/` directory should no longer appear in the Git status output.

<p align="center">
<img src="screenshots/05-git-status-after-ignore.png" width="900">
</p>

---

# Step 6 - Commit Changes

```bash
git add .

git commit -m "Add .gitignore configuration"
```

<p align="center">
<img src="screenshots/06-commit.png" width="900">
</p>

---

# Step 7 - Push to GitHub

```bash
git push -u origin master
```

<p align="center">
<img src="screenshots/07-push-to-github.png" width="900">
</p>

---

# Step 8 - GitHub Repository

Final GitHub repository after pushing the project.

<p align="center">
<img src="screenshots/08-github-repository.png" width="900">
</p>

---

# Files Ignored

The following patterns were ignored using `.gitignore`:

```text
*.log
log/
```

---

# Learning Outcomes

- Learned the purpose of the `.gitignore` file.
- Configured Git to ignore unnecessary files and folders.
- Verified ignored files using `git status`.
- Committed only the required project files.
- Pushed the project to a remote GitHub repository.

---