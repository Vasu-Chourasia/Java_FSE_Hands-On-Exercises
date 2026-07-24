# Git Hands-on

This repository contains the Git Hands-on exercise completed as part of the **Cognizant Digital Nurture Program**.

---

## Objectives

- Configure Git on the local machine.
- Configure global Git username and email.
- Initialize a local Git repository.
- Create and track files using Git.
- Commit changes to the local repository.
- Connect the local repository to GitHub.
- Push the local repository to GitHub.

---

# Environment

| Tool | Version |
|------|---------|
| Git | 2.47.1 |
| OS | Windows 11 |
| Git Bash | MINGW64 |
| Remote Repository | GitHub |

---

# Project Structure

```text
GitDemo/
│
├── README.md
├── welcome.txt
└── screenshots/
```

---

# Step 1 - Verify Git Installation

```bash
git --version
```

### Output

<img src="screenshots/01-git-version.png" width="900"/>

---

# Step 2 - Verify Global Git Configuration

```bash
git config --global --list
```

### Output

<img src="screenshots/02-global-config.png" width="900"/>

---

# Step 3 - Initialize Git Repository

Initially Git was initialized in the home directory.

```bash
git init
```

<img src="screenshots/03-git-init-home-directory.png" width="900"/>

---

# Step 4 - Navigate to Project Directory

```bash
cd "D:\Digital Nurture Java FSE\git handson"
```

<img src="screenshots/04-change-project-directory.png" width="900"/>

---

# Step 5 - Create GitDemo Directory

```bash
mkdir GitDemo
```

<img src="screenshots/05-create-gitdemo-folder.png" width="900"/>

---

# Step 6 - Initialize Repository

```bash
git init
```

<img src="screenshots/06-initialize-repository.png" width="900"/>

---

# Step 7 - Create welcome.txt

```bash
echo "Welcome to the version control" >> welcome.txt
```

<img src="screenshots/07-create-welcome-file.png" width="900"/>

---

# Step 8 - Commit Changes

```bash
git add welcome.txt

git commit -m "Initial commit"
```

<img src="screenshots/08-initial-commit.png" width="900"/>

---

# Step 9 - Configure Remote Repository

```bash
git remote add origin https://github.com/Vasu-Chourasia/GitDemo.git
```

<img src="screenshots/09-add-remote-first-attempt.png" width="900"/>

---

# Step 10 - Verify Remote

```bash
git remote -v
```

<img src="screenshots/10-check-remote.png" width="900"/>

---

# Step 11 - Troubleshooting

While pushing the repository, the following issues were encountered:

- Remote already exists.
- Attempted to push from the wrong directory.
- Corrected the working directory and remote configuration.

<img src="screenshots/11-remote-and-push-error.png" width="900"/>

---

# Step 12 - Verify Branch

```bash
git branch
```

<img src="screenshots/12-branch-check.png" width="900"/>

---

# Step 13 - Push Repository to GitHub

```bash
git push -u origin master
```

<img src="screenshots/13-final-push.png" width="900"/>

---

# Step 14 - GitHub Repository

Final repository after successfully pushing the project.

<img src="screenshots/14-github-repository.png" width="900"/>

---

# Learning Outcomes

- Learned Git installation and configuration.
- Initialized a Git repository.
- Added files to the staging area.
- Created commits.
- Connected a local repository to GitHub.
- Pushed commits to a remote repository.
- Understood common Git errors and their solutions.
