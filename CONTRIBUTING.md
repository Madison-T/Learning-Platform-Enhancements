# Contributing to Learning Platform Enhancements

Thanks for your interest in improving this project! Whether you're fixing a bug, writing a new plugin, or improving docs, follow these steps to get started.

---

## 🧭 Folder Structure

- `plugins/` — Each SCORM plugin has its own folder:
  - `drag-and-drop-idevice/`
  - `find-the-error-idevice/`
  - `complete-the-code-idevice/`
  - `timed-sequence-idevice/`
  - `formatted-code-block-idevice/`
  - `prev-fin-page-idevice/`
  - `prev-next-page-idevice/`
  - `next-page-idevice/`
  - `finish-button-idevice/`
- `docs/` — Project documentation, reports, and meeting notes
- `guides/` — Technical guides (e.g. SCORM fixes, iDevice creation)
- `.github/ISSUE_TEMPLATE/` — Templates for bugs and feature requests

---

## 🔧 Development Workflow

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/<plugin-or-change>
   ```

2. Make your changes inside the correct folder

3. 🛠 **Before Testing SCORM Completion Locally**

   Make sure you've applied the required changes to your local `SCOFunctions.js` file in eXeLearning.

   Follow the steps here: [guides/SCOFunctions-Fixes.md](guides/SCOFunctions-Fixes.md)

4. Test your plugin using eXeLearning:
   - Export as SCORM 1.2
   - Upload to TalentLMS and test completion tracking

5. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "Add feature: <plugin name> idevice"
   ```

6. Push your branch and open a Pull Request:
   ```bash
   git push origin feature/<plugin-or-change>
   ```

---

## ✅ Plugin Checklist

Before submitting a pull request, make sure your plugin:
- [ ] Contains a valid `config.xml`
- [ ] Has both `edition/` and `export/` folders
- [ ] Follows the naming conventions (hyphenated lowercase, ends in `-idevice`)
- [ ] Works in eXeLearning and exports cleanly
- [ ] Tracks completion properly in TalentLMS when embedded

---

## 💬 Style Guidelines

- Use clear, meaningful commit messages
- Comment complex code
- Use hyphen-case for folders and filenames (e.g. `find-the-error-idevice`)
- Organize JS/CSS cleanly and modularly
- Keep unrelated changes in separate branches

---

## 🙌 Thanks!

Your contributions help improve learning experiences for Foster Moore's clients and make this project shine in your portfolio.
